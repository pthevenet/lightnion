import { parseHTTPHeaders, parseURL } from "./parsing.js";
import * as wspackets from "./packets.js";

let binaryTypes = {
    blob: "blob",
    arraybuffer: "arraybuffer",
}

/**
 * CustomWebSocket is a WebSocket aimed to replace standard WebSocket with user-defined behavior.
 */

// TODO: verify https://www.w3.org/TR/websockets/#the-websocket-interface
// TODO:
// - bufferedAmount
// - event handlers (see: https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)
// - extensions
// - protocols  
// - garbage collection
// - proper errors
// - public/private fields

export default class CustomWebSocket extends EventTarget {

    // CONSTANTS
    // static getters are used to implement static constants
    static get CONNECTING() { return 0 };
    static get OPEN() { return 1 };
    static get CLOSING() { return 2 };
    static get CLOSED() { return 3 };

    /**
     * Constructor
     * @param {URL} url 
     * @param {string[]|string} [protocols] 
     */
    constructor(url, protocols = []) {
        super();

        // transport level socket connection
        // will be set when the handshake is requested
        this._socket = undefined;

        // url
        this._url = new URL(url);

        // TODO: see https://www.w3.org/TR/websockets/#dom-websocket-bufferedamount
        // probably need to use the underlying socket buffered amount if any, otherwise ?
        this._bufferedAmount = 0;

        this._extensions = "";
        this._protocol = "";
        this._readyState = WebSocket.CONNECTING;
        this._binaryType = binaryTypes.blob;


        // 'private' event handlers
        // these are the handlers called by the underlying socket
        // each of them will call the user-defined handler (e.g. this.onmessage) after some processing
        // TODO: can they be implemented here ? it depends on the underlying socket...
        this.__onclose = (event) => { };
        this.__onerror = (event) => { };
        this.__onmessage = (event) => { };
        this.__onopen = (event) => { };

        // 'public' event handlers
        this._onclose = (event) => { };
        this._onerror = (event) => { };
        this._onmessage = (event) => { };
        this._onopen = (event) => { };

        // true if the closing handshake has been initiated
        // TODO: refactor
        this._closing = false;

        /**
         * On message handler, when the state is OPEN.
         * TODO: refactor as method
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

            if (this.binaryType == "arraybuffer") {
                // TODO
                throw `Error: arraybuffer binary type not implemented`;
            } else {
                // should be "blob", assume "blob"
            }

            const wsHeader = wspackets.parse(frame);

            console.log("WS INC>");
            console.log(wsHeader);

            const opcode = wsHeader["opcode"];

            if (wspackets.isControlFrame(opcode)) {
                // control frame

                switch (opcode) {
                    case wspackets.opcodes.close:
                        // TODO: could read reason
                        let status = 1005;
                        let reason = "";
                        if ("Payload data" in wsHeader) {
                            const payload = wsHeader["Payload data"];
                            if (payload.length >= 2) {
                                status = payload[0] << 8 + payload[1];
                                let reasonBytes = payload.slice(2);
                                if (reasonBytes.length > 0) {
                                    // read reason
                                    reason = lnn.enc.utf8(reasonBytes);
                                }
                            }
                        }

                        if (!this._closing) {
                            // send back a close frame
                            this._readyState = WebSocket.CLOSING;
                            const payload = wsHeader["Payload data"]
                            this._socket.send(wspackets.encapsulate(payload, "1000", wspackets.opcodes.close));
                        } else {
                            // end of the closing handshake
                            this._readyState = WebSocket.CLOSED;
                        }
                        break;
                    case wspackets.opcodes.ping:
                        // send back a pong frame, with received payload if any
                        const payload = "Payload data" in wsHeader ? wsHeader["Payload data"] : new Uint8Array(0);
                        this._socket.send(wspackets.pongFrame(payload));
                        break;
                    case wspackets.opcodes.pong:
                        break;
                    default:
                        // not implemented or invalid
                        return;
                }
                return;
            }


            // TODO
            // data frame
            let payload = wsHeader["Payload data"];
            switch (opcode) {
                case wspackets.opcodes.continuation:
                    throw `websocket fragmentation not implemented`;
                    break;
                case wspackets.text:
                    break;
                case wspackets.binary:
                    break;
                default:
                    // not implemented or invalid
                    break;
            }

            if (wsHeader["Payload data"]) {

                // wrap to event
                let event = new MessageEvent(
                    "message",
                    {
                        data: lnn.enc.utf8(payload),
                        origin: this._url.href,
                        lastEventId: "", // TODO ?
                        source: null, // TODO ?
                        ports: [], // TODO ?
                    }
                )
                this.__onmessage(event); // user defined handler
            }
        }

        // check if duplicates in protocols
        // TODO
        // if (new Set(this.protocols).size != this.protocols.length) {
        //     throw SyntaxError(`duplicates in protocols: ${this.protocols}`);
        // }

        let origin = new URL(window.location.href);
        // parse url
        try {
            var [_, _, _, secure] = parseURL(this._url);
        } catch (err) {
            throw SyntaxError(`could not parse url: ${err}`);
        }

        if (secure && origin.protocol !== "https") {
            // TODO: verify
            throw Error(`SecurityError: cannot open non-secure websocket from a secure origin`);
        }
    };

    // PROPERTIES

    // url: read-only DOMString
    get url() {
        return this._url.href;
    };

    // readyState: read-only unsigned short
    get readyState() {
        return this._readyState;
    };

    // bufferedAmount: read-only unsigned long
    get bufferedAmount() {
        return this._bufferedAmount;
    };

    // extensions: read-only DOMString
    get extensions() {
        return this._extensions;
    };

    // protocol: read-only DOMString
    get protocol() {
        return this._protocol;
    };

    // binaryType: DOMString
    get binaryType() { return this._binaryType; };
    set binaryType(binaryType) {
        switch (binaryType) {
            case "blob":
                this._binaryType = binaryTypes.blob;
                break;
            case "arraybuffer":
                this._binaryType = binaryTypes.arraybuffer;
                break;
            default:
                throw new SyntaxError(`websocket binaryType cannot be set to ${binaryType}, allowed values are 'blob' and 'arraybuffer'`);
        }
    };

    // EVENT HANDLERS

    get onopen() {
        return this._onopen;
    }
    set onopen(onopen) {
        this._onopen = onopen;
    };

    get onmessage() {
        return this._onmessage;
    }
    set onmessage(onmessage) {
        this._onmessage = onmessage;
    };

    get onerror() {
        return this._onerror;
    }
    set onerror(onerror) {
        this._onerror = onerror;
    };

    get onclose() {
        return this._onclose;
    }
    set onclose(onclose) {
        this._onclose = onclose;
    };

    // INTERFACE METHODS

    /**
     * Close the WebSocket connection.
     * @param {int} code 
     * @param {DOMString} reason 
     */
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


        if (this._readyState === WebSocket.CLOSED || this._readyState === WebSocket.CLOSING) {
            // do nothing
            return;
        } else if (this._readyState !== WebSocket.OPEN) {
            // connection not yet established
            // fail the connection
            this._readyState = WebSocket.CLOSING;
            this.fail();
        } else if (!this._closing) {
            // the closing handshake has not yet been started

        } else {
            this._readyState = WebSocket.CLOSING;
        }
    }

    /**
     * Send to the websocket endpoint.
     * @param {string|Blob|ArrayBuffer|ArrayBufferView} data the payload to send 
     */
    send(data) {
        // FIXME: bufferedAmount, closing handshake started
        // TODO: test

        if (!(this._socket)) {
            throw `Socket not initialized`;
        }

        if (this._readyState === CustomWebSocket.CONNECTING) {
            // TODO: proper errors
            throw `InvalidStateError: cannot send data while websocket is in CONNECTING state`;
        }

        let frame;
        if (typeof data === "string") {
            // convert data to a sequence of Unicode characters
            const payload = lnn.dec.utf8(data);
            if (this._readyState === CustomWebSocket.OPEN) {
                frame = wspackets.encapsulate(payload, "1000", wspackets.opcodes.text);
            }
        } else if (data instanceof Blob) {
            frame = wspackets.encapsulate(data, "1000", wspackets.opcodes.binary);
        } else if (data instanceof ArrayBuffer) {
            frame = wspackets.encapsulate(data, "1000", wspackets.opcodes.binary);
        } else {
            // assume ArrayBufferView
            // send data stored in the section of the buffer described by the ArrayBuffer object that the ArrayBufferView object references
            frame = wspackets.encapsulate(data, "1000", wspackets.opcodes.binary);
        }

        if (frame) {
            console.log("WS OUT>");
            console.log(wspackets.parse(frame));
            this._socket.send(frame);
        } else {
            // not connected or closing, ...
            return
        }
    }

    // TASKS

    /**
     * Task to run when "the WebSocket connection is established"
     */
    _established() {
        // 1. change the readyState attribute's value to OPEN
        this._readyState = CustomWebSocket.OPEN;

        // 2. TODO: change the extensions attribute's value to the extensions in use, if is not the null value
        // this._extensions = 

        // 3. TODO: change the protocol attribute's value to the subprotocol in use, if is not the null value
        // this._protocol = 

        // 4. TODO: act as if the user agent had received a set-cookie-string consisting of the cookies 
        //          set during the server's opening handshake, for the URL url given to the WebSocket() constructor
        // document.cookie = 

        // 5. fire a simple event named open at the WebSocket object
        this.dispatchEvent(new Event("open"));
    }

    /**
     * Task to run when "a WebSocket message has been received"
     */
    _received(data, opcode) {

        // 1. If the readyState attribute's value is not OPEN (1), then abort these steps
        if (this._readyState !== CustomWebSocket.OPEN) {
            return;
        }

        // 2. let event be an event that uses the MessageEvent interface,
        //    with the event type message, which does not bubble, is not cancelable, 
        //    and has no default action.
        // 3. initialize event's origin attribute to the Unicode serialization of the origin of the URL
        //    that was passed to the WebSocket object's constructor.

        let event = new MessageEvent("message", {
            origin: this._url.href, // FIXME?
        });

        // 4. - if type indicates that the data is Text, then initialize event's data attribute to data
        //    - if type indicates that the data is Binary, and binaryType is set to "blob", 
        //      then initialize event's data attribute to a new Blob object that represents data as its raw data
        //    - if type indicates that the data is Binary, and binaryType is set to "arraybuffer",
        //      then initialize event's data attribute to a new read-only ArrayBuffer object whose contents are data

        if (opcode === wspackets.opcodes.text) {
            event.data = data;
        } else if (opcode === wspackets.opcodes.binary) {
            throw `Binary websocket data not implemented`;
            // TODO: depends on the type of data!
            // if (this.binaryType === "blob") {
            //     // binary blob
            //     // event.data = new Blob([data]);
            // } else {
            //     // binary arraybuffer
            //     // event.data = ... // probably works with `data.buffer` since Uint8Array is a ArrayBuffer ?
            // }
        }

        // 5. dispatch event at the WebSocket object.
        this.dispatchEvent(event);
    }

    /**
     * Task to run when "the WebSocket closing handshake is started"
     */
    _closing() {
        // change the readyState attribute to CLOSING (2)
        this._readyState = CustomWebSocket.CLOSING;
    }

    /**
     * Task to run when "the WebSocket connection is closed"
     */
    _closed(wasClean, code = 1005, reason = "") {
        // 1. change the readyState attribute's value to CLOSED (3)
        this._readyState = CustomWebSocket.CLOSED;

        // 2. if the user agent was required to fail the WebSocket connection 
        //    or the WebSocket connection is closed with prejudice, 
        //    fire a simple event named error at the WebSocket object

        // TODO

        // 3. Create an event that uses the CloseEvent interface,
        //    with the event type close, which does not bubble, is not cancelable, has no default action,
        //    whose wasClean attribute is initialized to true if the connection closed cleanly and false otherwise,
        //    whose code attribute is initialized to the WebSocket connection close code,
        //    and whose reason attribute is initialized to the WebSocket connection close reason decoded as UTF-8,
        //    with error handling, and dispatch the event at the WebSocket object

        const event = new CloseEvent("close", {
            wasClean: wasClean,
            code: code,
            reason: reason,
        })

        this.dispatchEvent(event);
    }

    // HELPER METHODS

    /**
     * Perform the opening websocket handshake.
     * 
     * @param socket underlying socket
     */
    doOpen(socket) {
        this._socket = socket;
        // parse url
        try {
            var [host, port, ressourceName, secure] = parseURL(this._url);
        } catch (err) {
            throw SyntaxError(`could not parse url: ${err}`);
        }

        // perform handshake
        this.openingHandshake(host, port, ressourceName, secure).then(_ => {
            this._established();
            this._socket.onmessage = this.onOpenMessage;
            this.__onopen();
        }).catch(err => {
            this._readyState = WebSocket.CLOSED;
        });
    }

    fail(code, reason) {
        // TODO
        this._closingHandshake(code, reason);
    }

    /**
     * Perform the WebSocket closing handshake.
     * @param code 
     * @param {string} reason 
     */
    closingHandshake(code, reason) {
        if (this._readyState = WebSocket.CLOSED || this._closing) {
            return;
        }
        this._readyState = WebSocket.CLOSING;
        this._socket.send(wspackets.encapsulate(new ArrayBuffer(code).concat(lnn.dec.utf8(reason)), "1000"));
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
            this._socket.onmessage = (request) => {  // TODO: refactor to avoid request ?
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
            this._socket.send(lnn.dec.utf8(clientHS));
        })

    }
}