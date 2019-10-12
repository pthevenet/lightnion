// HTTPS abstraction library

var https = {}


https.lnnInit = function (callback) {
    // open connection with the lightnion proxy
    lnn.open('localhost', 4990, function (endpoint) {
        if (endpoint.state != lnn.state.success) {
            console.log("lightnion proxy connection failed")
            return
        }
        console.log("lightnion proxy connection established")
        https.endpoint = endpoint
        callback()
    })
}

https.tcpInit = function (host, onCreated, onReceive, onClose) {
    let lnnCallback = function () {
        let lnnTCPHandler = (request) => {
            switch (request.state) {
                case lnn.state.created:
                    onCreated(request)
                    return
                case lnn.state.pending:
                    onReceive(request)
                    return
                case lnn.state.success:
                    onClose(request)
                    return
            }
        }

        // TODO: check errors
        lnn.stream.tcp(https.endpoint, host, 443, lnnTCPHandler)
    }

    return https.lnnInit(lnnCallback)
}


https.tlsInit = function (host, onCreated, onReceive) {

    // need tcp
    let tcp = null

    // create tls client working on tcp
    let tlsClient = forge.tls.createConnection({
        // see: https://github.com/digitalbazaar/forge#tls
        server: false,
        verify: function (connection, verified, depth, certs) {
            // FIXME
            return true // skip cert. verif. (testing)
        },
        connected: function (connection) {
            // (tls handshake finished, now ready to send)
            console.log("tls connection established")
        },
        tlsDataReady: function (connection) {
            if (tcp != null) {
                // TLS -> TCP
                // (decode binary data into array before processing)
                tcp.send(lnn.dec.bin(connection.tlsData.getBytes()))
            } else {
                console.log("tcp not ready")
            }
        },
        dataReady: function (connection) {
            // TLS -> Application
            // (receive decrypted data from the tls transport)
            var data = connection.data.getBytes()
            onReceive(data)
        },
        closed: function (connection) {
            console.log("tls connection closed")
        },
        error: function (connection, err) {
            console.log(`tls connection error: ${err}`)
            console.log(err)
        }
    })


    let tcpOnCreated = (req) => {
        console.log("tcp connection established")
        tcp = req
        tlsClient.handshake()
        setTimeout(function () {
            onCreated(tlsClient)
        }, 1000);
    }
    let tcpOnReceive = (req) => { tlsClient.process(lnn.enc.bin(req.recv())) }
    let tcpOnClose = (req) => { console.log("tcp connection closed") }

    return https.tcpInit(host, tcpOnCreated, tcpOnReceive, tcpOnClose)

}



https.get = function (url, callback) {
    // TODO: deal with port
    console.log("HTTP GET " + url)
    let req = `GET ${(url.pathname + url.search)} HTTP/1.1\r\nHost: ${url.host}\r\n\r\n`
    console.log(req)

    var buffer = forge.util.createBuffer();
    var response = forge.http.createResponse();
    var httpHandler = function (bytes) {
        if (!response.bodyReceived) {
            buffer.putBytes(bytes);
            if (!response.headerReceived) {
                if (response.readHeader(buffer)) {
                    // console.log('HTTP response header: ' + response.toString());
                }
            }
            if (response.headerReceived && !response.bodyReceived) {
                if (response.readBody(buffer)) {
                    callback(response)
                }
            }
        }
    };


    return https.tlsInit(url.host, (tlsClient) => { tlsClient.prepare(req); }, httpHandler)
}

https.fetch = (url) => {
    return new Promise((resolve, reject) => {
        var request = new Request(url);
        https.get(url, (resp) => {
            resolve(resp)
        })
    })
}