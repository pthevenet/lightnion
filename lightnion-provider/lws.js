// Lightnion WebSocket

// LTCP represents a lightnion tunelled tcp socket
class LTCP {
    constructor(host) {
        this.connected = false;
        this.onmessage = (msg) => { };
        this.host = host;
    }

    send(data) {
        throw "LTPC: undefined send method";
    }
}

// LWS represents lightnion tunelled ws socket
class LWS {
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;

    constructor(url, protocols) {
        this.url = url;

        this.protocols = []
        if (Array.isArray(protocols)) {
            this.protocols = protocols;
        }
        else if (typeof protocols === 'string' || protocols instanceof String) {
            this.protocols = [protocols];
        }


        // TODO
        this.binaryType = undefined;
        this.bufferedAmmount = undefined;
        this.extensions = undefined;
        this.protocol = undefined;

        this.state = LWS.CONNECTING;

        // event handlers
        this.onclose = (event) => { };
        this.onerror = (event) => { };
        this.onmessage = (event) => { }; // TODO: real handler and user handler
        this.onopen = (event) => { };

        // TCP connection
        this.tcp = undefined;
    }

    close(code, reason) {
        // TODO
    }

    send(data) {
        // TODO framing
        let frame = data;
        this.tcp.send(frame);
    }
}


// Connect to Lightnion Proxy
// return a promise that resolve on connection success, and reject in case of failure
// in case of success, return the lightnion endpoint
function lnnOpen(lnnHost, lnnPort) {
    return new Promise((resolve, reject) => {
        lnn.open(lnnHost, lnnPort, function (endpoint) {
            if (endpoint.state != lnn.state.success) {
                console.log("lightnion proxy connection failed")
                reject()
            }
            console.log("lightnion proxy connection established")
            resolve(endpoint)
        })
    })
}

// Connect to TCP endpoint
// return a promise that resolve on connection success, and reject in case of failure
// in case of succes, return a TCP object
function ltcpOpen(lnnEndpoint, host, port) {

    return new Promise((resolve, reject) => {

        let tcp = new LTCP(host);

        function handler(request) {
            switch (request.state) {
                case lnn.state.created:
                    tcp.connected = true;
                    tcp.send = request.send;
                    resolve(tcp);
                case lnn.state.pending:
                    tcp.onmessage(request); // TODO: maybe process request first?
                case lnn.state.success:
                    tcp.connected = false;
            }
        }

        lnn.stream.tcp(lnnEndpoint, host, port, handler)
    })
}

// Construct the HTTP payload for the client websocket handshake message
function wsClientHandshakePayload(host, path) {
    // create the nonce: base64 encoded 16 random bytes
    let nonce = lnn.enc.base64(nacl.randomBytes(16));

    let payload = [
        ["GET", path, "HTTP/1.1"], // TODO: path, port
        ["Host:", host],
        ["Connection:", "Upgrade"],
        ["Upgrade:", "websocket"],
        ["Sec-WebSocket-Key:", nonce],
        ["Origin:", host], // TODO: valid ?
        ["Sec-WebSocket-Version:", "13"],
    ].map(s => s.join(" ")).join("\r\n") + "\r\n\r\n"

    return payload;
}

// Perform the websocket handshake
function lwsOpen(ltcp, path) {

    return new Promise((resolve, reject) => {

        let statusLine = "";

        ltcp.onmessage = (request) => {  // TODO: refactor to avoid request

            var buffer = forge.util.createBuffer();
            var response = forge.http.createResponse();

            let payload = lnn.enc.utf8(request.recv());
            console.log(payload);

            // FIXME: proper parsing
            let lines = payload.split("\r\n");
            if (lines.length < 1) {
                // pass
                reject();
            }

            if (statusLine === "") {
                // first message
                var statusLine = lines[0].split(" ");
                var headerLines = lines.slice(1);

                // check status
                if (statusLine.length < 3) {
                    // pass
                    reject();
                }

                var statusCode = statusLine[1];

                if (statusCode != "101") {
                    console.log(`failed to connect to websocket: got status code ${statusCode}`)
                    reject();
                }
            } else {
                // following message
                var headerLines = lines;
            }

            // TODO: verification of the packet!

            // todo: wrap ltcp to lws
            if (headerLines[headerLines.length - 1] === "") {
                // last line of headers, no body expected

                let lws = new LWS(ltcp.host + path, undefined); // FIXME: protocols
                lws.state = LWS.OPEN;

                resolve(ltcp);
            }
        }

        console.log("sending message")

        let clientHS = wsClientHandshakePayload(ltcp.host, path)
        ltcp.send(clientHS);
    })
}


// -- -- -- TESTING

lnnOpen("localhost", 4990).then(lnnEndpoint => {
    console.log("[LP]: connected")
    // open tcp
    return ltcpOpen(lnnEndpoint, "echo.websocket.org", 80);
}).then(ltcp => {
    console.log("[LTCP]: connected")
    // start websocket protocol
    return lwsOpen(ltcp, "/");
}).then(ws => {
    console.log("[LWS]: connected")

    // TODO: unframe/frame ws data    

    ws.onmessage = (request) => {
        console.log("RECEIVED>>>>>>>");
        let payload = request.recv(); // lnn.enc.utf8
        console.log(payload.data);
        console.log(`[LWS]: received: ${payload}`);
        // console.log(payload);
    };

    ws.send("hello");

    // TODO: does not work
    // setTimeout(() => {console.log("sending.....");ws.send(lnn.dec.utf8("HELLO!"));}, 200);

});

