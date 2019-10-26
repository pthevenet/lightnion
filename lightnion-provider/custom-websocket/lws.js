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
            // start websocket protocol
            this.doOpen(ltcp);


            this._onmessage = (payload) => {
                // TODO: maybe do lnn.enc.utf8 here ?
                this.onmessage(payload);
            }

            this.onopen = () => {
                console.log("OPENED !");
                // this.send(lnn.dec.utf8("HELLO"));
            }
        });
    }
}
