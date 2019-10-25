// Tests for parsing helpers

import { parseURL, parseHTTPHeaders } from "../parsing.js"

describe("parseHTTP", function () {
    it("should parse no headers", function () {
        let httpHeaders = "";
        let parsed = parseHTTPHeaders(httpHeaders);
        assert.isEmpty(parsed, "parsing no headers should output an empty object");
    })

    it("should parse host", function () {
        let httpHeaders = "Host: localhost:1234";
        let parsed = parseHTTPHeaders(httpHeaders);
        assert.equal(parsed["host"], "localhost:1234");
    })

    it("should parse multiple headers", function () {
        let httpHeaders = `Host: localhost:1234\r\n
            Content-Language: en\r\n
            Content-Length: 3495`;
        let parsed = parseHTTPHeaders(httpHeaders);
        assert.deepEqual(parsed, { "host": "localhost:1234", "content-language": "en", "content-length": "3495" });
    })
})

describe("parseURL", function () {
    /**
     * See https://www.w3.org/TR/2012/CR-websockets-20120920/#parse-a-websocket-url-s-components
     */

    // it("should fail on relative url", function () {
    // TODO
    //     let url = new URL("/index.html", "http://localhost");
    //     let p = () => parseURL(url);
    //     assert.throws(p);
    // })

    it("should fail if scheme is not websocket", function () {
        let url = new URL("http://127.0.0.1:8080/");
        let p = () => parseURL(url);
        assert.throws(p);
    })

    it("should fail if url has a fragment", function () {
        let url = new URL("ws://localhost:8080/that#thing");
        let p = () => parseURL(url);
        assert.throws(p);
    })

    it("should set secure to false for ws: scheme", function () {
        let url = new URL("ws://localhost:443/");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.isFalse(secure);
    })

    it("should set secure to true for wss: scheme", function () {
        let url = new URL("wss://localhost/");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.isTrue(secure);
    })

    it("should set host as the url host in lowercase", function () {
        let url = new URL("wss://MY.HOST.COM/path");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal("my.host.com", host);
    })

    it("should set port as the url port", function () {
        let url = new URL("ws://localhost:443/");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(port, 443);
    })


    it("should set port implicitely according to scheme", function () {
        let url = new URL("ws://localhost/");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(port, 80);
    })

    it("should set port implicitely according to scheme", function () {
        let url = new URL("wss://localhost/");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(port, 443);
    })

    it("should set ressourceName as the path of url", function () {
        let url = new URL("ws://localhost/this/is/the/path");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(ressourceName, "/this/is/the/path");
    })

    it("should set ressourceName to default if url path is empty", function () {
        let url = new URL("ws://localhost");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(ressourceName, "/");
    })

    it("should have a single question mark followed by the query component in ressourceName if the url has a query component", function() {
        // FIXME
        let url = new URL("ws://localhost/?this=that&other=it");
        let [host, port, ressourceName, secure] = parseURL(url);
        assert.equal(ressourceName, "/?this=that&other=it");
    })

})

