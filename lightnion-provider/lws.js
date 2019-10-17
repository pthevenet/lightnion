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

    constructor(url, protocols, ltcp) {
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
        this.onmessage = (event) => { };
        this.onopen = (event) => { };

        // TCP connection
        this.ltcp = ltcp;

        this.ltcp.onmessage = (request) => {
            console.log("[LWS-] received message");
            // console.log(request);

            let frame = request.data;
            let wsHeader = parseWSHeader(frame);
            // console.log("Message Header:");
            // console.log(wsHeader);
            // TODO: defragmentation
            // TODO: filter out control frames
            if (wsHeader["Payload data"]) {
                this.onmessage(wsHeader["Payload data"]); // user defined handler
            }
        }
    }

    close(code, reason) {
        // TODO
    }

    send(data) {
        let frame = encapsulateWS(data);
        this.ltcp.send(frame);
    }
}


// Parse input string into an object
function parseHTTPHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) { return parsed; }

    headers.split('\r\n')
        .forEach(line => {
            i = line.indexOf(':');
            key = line.substr(0, i).trim();
            val = line.substr(i + 1).trim();

            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });

    return parsed;
};

// Encapsulate given payload (Uint8Array) to a WS frame
function encapsulateWS(payload) {
    // TODO: fragmentation ?

    let flags = "0000";
    let opcode = "0001";

    if (payload.length >= 126) {
        // TODO
        throw 'payload too long, not implemented';
    }

    let payloadLen = payload.length.toString(2).padStart(7, '0');

    let mask = '1';

    let maskingKey = nacl.randomBytes(4);

    let maskedPayload = maskWithKey(payload, maskingKey);

    // mask input x with key
    // x must be a Uint8Array, and key a 4-bytes Uint8Array
    function maskWithKey(x, key) {
        let out = new Uint8Array(x.length);
        for (var i = 0; i < x.length; i++) {
            out[i] = x[i] ^ key[i % 4];
        }
        return out;
    }

    function bitstringToUint8Array(bitstring) {

        let len = Math.ceil(bitstring.length / 8);
        let out = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
            out[i] = parseInt(bitstring.slice(8 * i, 8 * i + 8), 2);
        }

        return out;
    }

    let headerStart = bitstringToUint8Array(flags + opcode + mask + payloadLen);

    return Uint8Array.from([...headerStart, ...maskingKey, ...maskedPayload])
}

function parseWSHeader(frame) {

    parsed = {};
    let restLen = frame.byteLength;
    if (restLen < 2) {
        // bogus frame
        return undefined;
    }


    let byteIterator = frame.entries();

    // first byte

    var bits0 = (byteIterator.next().value[1]).toString(2).padStart(8, '0').split('').map(c => c === "1" ? 1 : 0);
    parsed["FIN"] = bits0[0];
    parsed["RSV1"] = bits0[1];
    parsed["RSV2"] = bits0[2];
    parsed["RSV3"] = bits0[3];
    parsed["opcode"] = parseInt(bits0.slice(4, 8).join(''), 2);
    restLen--;

    // second byte

    var bits1 = (byteIterator.next().value[1]).toString(2).padStart(8, '0').split('').map(c => c === "1" ? 1 : 0);
    parsed["MASK"] = bits1[0];
    parsed["Payload len"] = parseInt(bits1.slice(1, 8).join(''), 2);
    restLen--;

    // rest

    if (parsed["Payload len"] == 126) {
        // if 126, the following 2 bytes interpreted as a 16-bit unsigned integer are the payload length
        if (restLen < 2) {
            return undefined;
        }
        let pLen = (byteIterator.next().value[1]).toString(2).split('');
        pLen = pLen.concat((byteIterator.next().value[1]).toString(2).split(''));
        parsed["Payload len"] = parseInt(pLen, 2);
        restLen -= 2;
    } else if (parsed["Payload len"] == 127) {
        // if 127, the following 8 bytes interpreted as a 64-bit unsigned integer (the most significant bit MUST be 0) are the payload length
        if (restLen < 8) {
            return undefined;
        }
        let pLenBits = "";
        for (i = 0; i < 8; i++) {
            pLenBits = pLen.concat((byteIterator.next().value[1]).toString(2).split(''));
        }
        parsed["Payload len"] = parseInt(pLenBits, 2);
        restLen -= 8;
    }



    if (parsed["MASK"]) {
        // next 4 bytes is the masking key
        if (restLen < 4) {
            return undefined;
        }
        let maskingKeyBits = "";
        for (i = 0; i < 4; i++) {
            maskingKeyBits += (byteIterator.next().value[1]).toString(2);
        }
        parsed["Masking-key"] = parseInt(maskingKeyBits, 2);
        restLen -= 4;
    }

    parsed["Payload data"] = frame.slice(-restLen); // UInt8Array

    return parsed;
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


// Perform the websocket handshake
function lwsOpen(ltcp, path) {

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

            console.log(`status line: ${statusLine}`);
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

        console.log(">>>>>sending message")

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
}).then(lws => {
    console.log("[LWS]: connected")

    lws.onmessage = (payload) => {
        let resp = lnn.enc.utf8(payload);
        console.log("RESPONSE: " + resp)
    }
    let text = "COUCOU =)"
    console.log("SENDING: " + text)
    lws.send(lnn.dec.utf8(text));

    // TODO: does not work
    // setTimeout(() => {console.log("sending.....");ws.send(lnn.dec.utf8("HELLO!"));}, 200);

});

