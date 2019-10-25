// Tests for LWS

import LWS from "../lws.js"

var assert = chai.assert;

describe("LWS", function () {
    it("import", function () {
        assert.ok(LWS);
    })


    it("should instanciate", function () {
        let _WebSocket = WebSocket;
        WebSocket = LWS;
        let url = "ws://demos.kaazing.com/echo";
        let ws = new WebSocket(url, undefined, "localhost", 4990);
        // check instanciation
        assert.ok(ws);
    })

})