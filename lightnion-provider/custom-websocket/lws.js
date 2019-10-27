import CustomWebSocket from "./custom-websocket.js";
import { lnnOpen, ltcpOpen } from "../lightnion-helpers.js";

/**
 * LWS is a WebSocket tunnelled through Lightnion.
 */
export default class LWS extends CustomWebSocket {

    constructor(url, protocols = [], lightnionHost = "192.168.122.180", lightnionPort = 4990) {

        let urlP = new URL(url);

        let port = urlP.port;
        if (!port) {
            port = urlP.protocol == "ws:" ? "80" : "443";
        }

        super(urlP, protocols);

        // user defined handlers
        this.onmessage = (event) => { };
        this.onopen = (event) => { };
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
            this.__onmessage = (event) => {
                console.log("[LWS] message event");
                this.onmessage(event);
            }
            this.__onopen = (event) => {
                console.log("[LWS] open event");
                this.onopen(event);
            }
            this.__onclose = (event) => {
                console.log("[LWS] close event");
                this.onclose(event);
            }
            this.__onerror = (event) => {
                console.log("[LWS] error event");
                this.onerror(event);
            }

        });
    }
}
