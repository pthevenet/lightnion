// LTCP represents a lightnion tunelled tcp socket
export class LTCP {
    constructor(host) {
        this.connected = false;
        this.onmessage = (msg) => { };
        this.host = host;
    }

    send(data) {
        throw "LTPC: undefined send method";
    }
}

// Connect to Lightnion Proxy
// return a promise that resolve on connection success, and reject in case of failure
// in case of success, return the lightnion endpoint
export function lnnOpen(lnnHost, lnnPort) {
    console.log("called lnnOpen")
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
export function ltcpOpen(lnnEndpoint, host, port) {

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


// Perform the websocket handshake
export function lwsOpen(ltcp, path) {

    return new Promise((resolve, reject) => {

        let statusLine = "";
        let headerLines = [];

        ltcp.onmessage = (request) => {  // TODO: refactor to avoid request ?

            let payload = lnn.enc.utf8(request.recv());
            console.log(payload);

            // FIXME: proper parsing
            let lines = payload.split("\r\n");
            if (lines.length < 1) {
                console.log(`failed to connect to websocket: empty http packet`)
                reject();
            }

            if (statusLine) {
                // following message
                headerLines = headerLines.concat(lines);
            } else {
                // first message
                statusLine = lines[0].split(" ");
                headerLines = headerLines.concat(lines.slice(1));

                // check status
                if (statusLine.length < 3) {
                    console.log(`failed to connect to websocket: invalid status line ${statusLine.join(" ")}`)
                    reject();
                }

                var statusCode = statusLine[1];

                if (statusCode != "101") {
                    console.log(`failed to connect to websocket: got status code ${statusCode}`)
                    reject();
                }
            }

            // TODO: verification of the packet!
            parsedHeaders = parseHTTPHeaders(headerLines.join("\r\n"));

            if (headerLines[headerLines.length - 1] === "") {
                // last line of headers, no body expected

                let lws = new LWS(ltcp.host + path, undefined, ltcp); // FIXME: protocols
                lws.state = LWS.OPEN;
                lws.onMessage = (event) => {
                    // FIXME testing 
                    console.log("[LWS+] this is the user onMessage");
                }

                resolve(lws);
            }
        }

        let clientHS = wsClientHandshakePayload(ltcp.host, path)
        console.log("sending handshake");
        console.log(parseHTTPHeaders(clientHS));
        ltcp.send(clientHS);
    })
}

