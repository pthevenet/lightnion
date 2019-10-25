// Tests for websocket packets

import { parseURL, parseHTTPHeaders, parseHTTPStatusLine, parseHTTPRequestLine } from "../parsing.js";
import * as wspackets from "../packets.js";
import * as http from "../http/http.js"

describe("clientHandshake", function () {
    /**
     * See RFC 6455 4.
     */

    it("should be a HTTP GET request of version at least 1.1", function () {
        let url = new URL("ws://example.com/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);
        let parsed = parseHTTPRequestLine(hs.split("\r\n")[0]);

        // check status-code
        assert.equal(parsed["method"], http.methods.GET);

        // check version
        let versionFloat = parseFloat(parsed["version"].replace("HTTP/", ""))
        if (isNaN(versionFloat)) {
            throw `could not parse request line from ${line}: version is not of the form 'HTTP/...'`;
        }

        assert.isAtLeast(versionFloat, 1.1);
    });

    it("should have the request-uri match the ressource name", function () {
        let url = new URL("ws://example.com/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);
        let parsed = parseHTTPRequestLine(hs.split("\r\n")[0]);

        assert.equal(parsed["request-uri"], "/chat");
    });

    it("should contain a 'host' header", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.equal(parsed["host"], "example.com:1234");
    });

    it("should contain contain an 'upgrade' header field with value containing 'websocket'", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.include(parsed["upgrade"], "websocket");
    });

    it("shoud contain a 'connection' header field with value containing 'upgrade'", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.include(parsed["upgrade"], "websocket");
    });

    it("shoud contain a 'sec-websocket-key' header field", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);
        let nonceB64 = lnn.enc.base64(nonce);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.equal(parsed["sec-websocket-key"], nonceB64);
    });

    it("should contain a 'origin' header field (browser client)", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.equal(parsed["origin"], "example.com");
    });

    it("should contain a 'sec-websocket-version' header field with value '13'", function () {
        let url = new URL("ws://example.com:1234/chat");
        let [host, port, resourceName, secure] = parseURL(url);
        let [hs, nonce] = wspackets.clientHandshake(host, port, resourceName);

        let headers = hs.split("\r\n").slice(1).join("\r\n");
        let parsed = parseHTTPHeaders(headers);

        assert.equal(parsed["sec-websocket-version"], "13");
    });

})