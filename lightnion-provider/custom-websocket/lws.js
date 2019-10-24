

/**
 * LWS is a WebSocket tunnelled through Lightnion.
 */
class LWS extends CustomWebSocket {

    constructor(url, protocols, lightnionHost = "192.168.122.180", lightnionPort = 4990) {
        // TODO: 
        //  - secure websockets

        let port = url.port;
        if (!port) {
            port = url.protocol == "ws:" ? "80" : "443";
        }

        super(url, protocols);

        // schedule the handshake to start when the underlying socket is ready
        lnnOpen(lightnionHost, lightnionPort).then(lnnEndpoint => {
            console.log("[LP]: connected")
            // open tcp
            return ltcpOpen(lnnEndpoint, url.hostname, port);
        }).then(ltcp => {
            console.log("[LTCP]: connected")
            // start websocket protocol
            this.doOpen(ltcp);

            this.onmessage = (payload) => {
                try {
                    const text = lnn.enc.utf8(payload);
                    console.log(`RECEIVED MESSAGE: ${text}`);
                } catch (err) {
                    // pass
                    console.log(`error: ${err}`)
                }
            }

            this.onopen = () => {
                console.log("OPENED !");
                // this.send(lnn.dec.utf8("HELLO"));
            }
        });

    }
}
