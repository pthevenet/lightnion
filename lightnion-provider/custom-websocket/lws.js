import CustomWebSocket from "./custom-websocket.js";
import { lnnOpen, ltcpOpen } from "../lightnion-helpers.js";

/**
 * LWS is a WebSocket tunnelled through Lightnion.
 */
export default class LWS extends CustomWebSocket {

    constructor(url, protocols, lightnionHost = "192.168.122.180", lightnionPort = 4990) {
        // TODO: 
        //  - secure websockets

        let urlP = new URL(url); // TODO: parse ?

        let port = urlP.port;
        if (!port) {
            port = urlP.protocol == "ws:" ? "80" : "443";
        }

        super(urlP, protocols);

        // user defined handlers
        this.onmessage = (payload) => { };
        this.onopen = (payload) => { };
        this.onclose = (event) => { };
        this.onerror = (event) => { };

        // schedule the handshake to start when the underlying socket is ready
        lnnOpen(lightnionHost, lightnionPort).then(lnnEndpoint => {
            // open tcp
            return ltcpOpen(lnnEndpoint, urlP.hostname, port);
        }).then(ltcp => {
            console.log("[LTCP]: connected")

            // start websocket handshake protocol
            this.doOpen(ltcp);

            // install handlers
            this._onmessage = (event) => {
                console.log("[LWS] received message");
                this.onmessage(event);
            }
            this._onopen = (event) => {
                console.log("[LWS] opened");
                this.onopen(event);
            }
            this._onclose = (event) => {
                console.log("[LWS] closed");
                this.onclose(event);
            }
            this._onerror = (event) => {
                console.log("[LWS] error");
                this.onerror(event);
            }

        });
    }
}
