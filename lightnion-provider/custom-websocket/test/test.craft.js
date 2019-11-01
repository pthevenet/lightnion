// Tests for WebSocket packet crafting

var assert = chai.assert;

import { encapsulate } from "../packets.js"

describe("ws packet encapsulation", function () {
    it("import", function () {
        assert.ok(encapsulate);
    });

    it("encapsulates small packets", function () {
        let payload = "small";
        // TODO: proper assertions...
        // with proper payload length as well...
        assert.ok(encapsulate(payload))
    });

    it("encapsulates medium packets", function () {
        let payload = "this should be a payload of at least 126 bytes and less than 65536 bytes";
        // TODO: proper assertions...
        // with proper payload length as well...
        assert.ok(encapsulate(payload))
    });

    it("encapsulates small packets", function () {
        let payload = "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------"; "----------------------------------------------------------------------------------";
        // TODO: proper assertions...
        // with proper payload length as well...
        assert.ok(encapsulate(payload))
    });

});

