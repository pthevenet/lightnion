import { parseHTTPHeaders, parseURL } from "./parsing.js";
import * as wspackets from "./packets.js";

/**
 * CustomWebSocket is a WebSocket aimed to replace standard WebSocket with user-defined behavior.
 */

// TODO: verify https://www.w3.org/TR/websockets/#the-websocket-interface

export default class CustomWebSocket {
    // TODO: refactor public/private fiels
    // onclose;
    // onerror;
    // onmessage;
    // onopen;

    /**
     * 
     * @param {URL} url 
     * @param {list} protocols 
     * @param socket should have an 'onmessage' callback method, and a 'send' method
     */
    constructor(url, protocols) {
        this.url = new URL(url);
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

        // event handlers
        this._onclose = (event) => { }; // TODO
        this._onerror = (event) => { }; // TODO
        this._onmessage = (event) => { };
        this._onopen = () => { };

        // state
        this.state = WebSocket.CONNECTING;

        // transport level socket connection
        // will be set when the handshake is requested
        this.socket = undefined;

        // true if the closing handshake has been initiated
        this.closing = false;

        /**
         * On message handler, when the state is OPEN.
         */
        this.onOpenMessage = (request) => {
            // TODO:
            //  - defragmentation
            //  - filter out control frames
            //  - unmask if needed
            const frame = request.recv();
            if (!frame) {
                return;
            }
            const wsHeader = wspackets.parse(frame);
            console.log("WS INC>");
            console.log(wsHeader);
            if ((wsHeader["opcode"] & 8) === 8) {
                // control frame
                // first bit of opcode == 1 for control frames
                const opcode = wsHeader["opcode"];

                switch (opcode) {
                    case wspackets.opcodes.close:
                        // TODO: could read reason
                        let status;
                        if ("Payload data" in wsHeader) {
                            const payload = wsHeader["Payload data"];
                            if (payload.length < 2) {
                                status = 1005;
                            } else {
                                status = payload[0] << 8 + payload[1];
                            }
                        }

                        if (!this.closing) {
                            // send back a close frame
                            this.state = WebSocket.CLOSING;
                            this.socket.send(wspackets.encapsulate(new ArrayBuffer(status), "1000", wspackets.opcodes.close));
                        } else {
                            // end of the closing handshake
                            this.state = WebSocket.CLOSED;
                        }
                        break;
                    case wspackets.opcodes.ping:
                        // send back a pong frame, with received payload if any
                        const payload = "Payload data" in wsHeader ? wsHeader["Payload data"] : new Uint8Array(0);
                        this.socket.send(wspackets.encapsulate(payload, "1000", wspackets.opcodes.pong));
                        break;
                    case wspackets.opcodes.pong:
                        break;
                    default:
                        // not implemented or invalid
                        return;
                }
                return;
            }

            // data frame
            if (wsHeader["Payload data"]) {
                this._onmessage(wsHeader["Payload data"]); // user defined handler
            }
        }

        // check if duplicates in protocols
        if (new Set(this.protocols).size != this.protocols.length) {
            throw SyntaxError(`duplicates in protocols: ${this.protocols}`);
        }

        let origin = new URL(window.location.href);
        // parse url
        try {
            var [_, _, _, secure] = parseURL(this.url);
        } catch (err) {
            throw SyntaxError(`could not parse url: ${err}`);
        }

        if (secure && origin.protocol !== "https") {
            throw Error(`SecurityError: cannot open non-secure websocket from a secure origin`);
        }

        origin = origin.href;
    }

    /**
     * Perform the opening websocket handshake.
     * 
     * @param socket underlying socket
     */
    doOpen(socket) {
        this.socket = socket;
        // parse url
        try {
            var [host, port, ressourceName, secure] = parseURL(this.url);
        } catch (err) {
            throw SyntaxError(`could not parse url: ${err}`);
        }

        // perform handshake
        this.openingHandshake(host, port, ressourceName, secure).then(_ => {
            this.state = WebSocket.OPEN;
            this.socket.onmessage = this.onOpenMessage;
            this._onopen();
        }).catch(err => {
            this.state = WebSocket.CLOSED;
        });
    }

    get readyState() {
        return this.state;
    }

    close(code, reason) {
        // check code
        if (code && (code !== 1000 || (code >= 3000 && code <= 4999))) {
            throw Error(`InvalidAccessError: code must be 1000 or in the range 3000-4999`);
        }

        if (reason) {
            const unicodeReason = lnn.enc.utf8(reason);
            if (unicodeReason.byteLength > 123) {
                throw SyntaxError(`reason is too long: ${reason}`);
            }
        }


        if (this.state === WebSocket.CLOSED || this.state === WebSocket.CLOSING) {
            // do nothing
            return;
        } else if (this.state !== WebSocket.OPEN) {
            // connection not yet established
            // fail the connection
            this.state = WebSocket.CLOSING;
            this.fail();
        } else if (!this.closing) {
            // the closing handshake has not yet been started

        } else {
            this.state = WebSocket.CLOSING;
        }
    }

    fail(code, reason) {
        // TODO
        this.closingHandshake(code, reason);
    }

    /**
     * Send to the websocket endpoint.
     * @param {Uint8Array} data the payload to send 
     */
    send(data) {
        const frame = wspackets.encapsulate(data);
        console.log("WS OUT>");
        console.log(wspackets.parse(frame));
        this.socket.send(frame);
    }

    /**
     * Perform the WebSocket closing handshake.
     * @param code 
     * @param {string} reason 
     */
    closingHandshake(code, reason) {
        if (this.state = WebSocket.CLOSED || this.closing) {
            return;
        }
        this.state = WebSocket.CLOSING;
        this.socket.send(wspackets.encapsulate(new ArrayBuffer(code).concat(lnn.dec.utf8(reason)), "1000"));
    }

    /**
     * Perform the WebSocket connection handshake.
     * @returns Promise that resolves when connection is successful,
     *  or rejects otherwise with an error message.
     */
    openingHandshake(host, port, ressourceName, secure) {
        return new Promise((resolve, reject) => {

            let statusLine = "";
            let headerLines = [];

            const [clientHS, secWebSocketKey] = wspackets.clientHandshake(host, port, ressourceName);

            // change onmessage of underlying socket
            this.socket.onmessage = (request) => {  // TODO: refactor to avoid request ?
                let payload = lnn.enc.utf8(request.recv());

                // parse received packet as a HTTP websocket connection response
                let lines = payload.split("\r\n");
                if (lines.length < 1) {
                    reject(`failed to connect to websocket: received empty http response`);
                }

                if (statusLine) {
                    // following message (response was fragmented)
                    headerLines = headerLines.concat(lines);
                } else {
                    // first message
                    statusLine = lines[0].split(" ");
                    headerLines = headerLines.concat(lines.slice(1));

                    // status code verification
                    if (statusLine.length < 3) {
                        reject(`failed to connect to websocket: invalid status line ${statusLine.join(" ")}`);
                        return;
                    }

                    var statusCode = statusLine[1];

                    if (statusCode != "101") {
                        reject(`failed to connect to websocket: got status code ${statusCode}`);
                        return;
                    }
                }

                if (headerLines[headerLines.length - 1] !== "") {
                    return;
                } else {
                    // last line of headers, no body expected
                    // this means that this is the last packet expected
                    let headers = parseHTTPHeaders(headerLines.join("\r\n"));

                    // verification of the headers

                    // check for the upgrade header field
                    if (!("upgrade" in headers) || !(headers["upgrade"].toLowerCase().split(", ").includes("websocket"))) {
                        reject(`failed to connect to websoket: server handshake response invalid, does not contain 'upgrade: websocket' header line: ${headers}`);
                        return;
                    }

                    // check for the connection header field
                    if (!("connection" in headers) || !(headers["connection"].toLowerCase().split(", ").includes("upgrade"))) {
                        reject(`failed to connect to websocket: server handshake response invalid, does not contain 'connection: upgrade' header line: ${headers}`);
                        return;
                    }

                    // check for the sec-websocket-accept header field
                    if (!("sec-websocket-accept" in headers)) {
                        reject(`failed to connect to websocket: server handshake response invalid, does not contain 'sec-websocket-accept' header line: ${headers}`);
                        return;
                    }

                    if (!wspackets.verifySecWebSocketAccept(secWebSocketKey, headers["sec-websocket-accept"].trim())) {
                        reject(`failed to connect to websocket: 'sec-websocket-accept' could not be verified`);
                        return;
                    }

                    // check for the sec-websocket-extensions header field
                    if ("sec-websocket-extensions" in headers) {
                        const serverExtensions = header["sec-websocket-extensions"].split(", ");
                        // TODO: no support for extensions
                        if (serverExtensions.length > 1 || serverExtensions[0] !== "") {
                            reject(`failed to connect to websocket: extensions are not supported: ${headers["sec-websocket-extensions"]}`);
                            return;
                        }
                    }

                    // check for the sec-websocket-protocol header field
                    if ("sec-websocket-protocol" in headers) {
                        const serverSubProtocols = header["sec-websocket-protocol"].split(", ");
                        // TODO: no support for subprotocols
                        if (serverSubProtocols.length > 1 || serverSubProtocols[0] !== "") {
                            reject(`failed to connect to websocket: sub protocols are not supported: ${headers["sec-websocket-protocol"]}`);
                            return;
                        }
                    }

                    resolve();
                }
            }
            this.socket.send(lnn.dec.utf8(clientHS));
        })

    }
}