// Tests for CustomWebSocket.
// Tests ensuring that CustomWebSocket implements the standardized interface.
// See: https://www.w3.org/TR/websockets/#the-websocket-interface 

import CustomWebSocket from "../custom-websocket.js"

describe("WebSocket interface", function () {

  let testUrlString;
  let testWS;
  let testHandler;

  before(function () {
    testUrlString = "ws://example.com/";
    testWS = new CustomWebSocket(testUrlString);
    testHandler = (event) => { };
  });

  it("can be imported", function () {
    assert.exists(CustomWebSocket);
  });

  it("should have a readonly DOMString attribute 'url'", function () {
    assert.property(testWS, "url");
    assert.equal(testWS.url, testUrlString);
    assert.isTrue(_.isString(testWS.url));
    assert.throws(() => { testWS.url = undefined; }, TypeError);
  });

  it("should have defined ready state constants", function () {
    assert.equal(CustomWebSocket.CONNECTING, 0);
    assert.equal(CustomWebSocket.OPEN, 1);
    assert.equal(CustomWebSocket.CLOSING, 2);
    assert.equal(CustomWebSocket.CLOSED, 3);
  });

  it("should have a readonly unsigned short attribute 'readyState'", function () {
    assert.property(testWS, "readyState");
    assert.isNumber(testWS.readyState);
    assert.oneOf(testWS.readyState, [0, 1, 2, 3]);
    assert.throws(() => { testWS.readyState = undefined; }, TypeError);
  });

  it("should have a readonly unsigned long attribute 'bufferedAmount'", function () {
    assert.property(testWS, "bufferedAmount");
    assert.isNumber(testWS.bufferedAmount);
    assert.isAtLeast(testWS.bufferedAmount, 0);
    assert.throws(() => { testWS.bufferedAmount = undefined; }, TypeError);
  });

  it("should have an EventHandler attribute 'onopen'", function () {
    assert.property(testWS, "onopen");
    assert.isTrue(_.isFunction(testWS.onopen));
    // should be able to set it
    testWS.onopen = testHandler;
    assert.equal(testWS.onopen, testHandler);
  });

  it("should have an EventHandler attribute 'onerror'", function () {
    assert.property(testWS, "onerror");
    assert.isTrue(_.isFunction(testWS.onerror));
    // should be able to set it
    testWS.onerror = testHandler;
    assert.equal(testWS.onerror, testHandler);
  });

  it("should have an EventHandler attribute 'onclose'", function () {
    assert.property(testWS, "onclose");
    assert.isTrue(_.isFunction(testWS.onclose));
    // should be able to set it
    testWS.onclose = testHandler;
    assert.equal(testWS.onclose, testHandler);
  });

  it("should have an EventHandler attribute 'onmessage'", function () {
    assert.property(testWS, "onmessage");
    assert.isTrue(_.isFunction(testWS.onmessage));
    // should be able to set it
    testWS.onmessage = testHandler;
    assert.equal(testWS.onmessage, testHandler);
  });

  it("should have a readonly DOMString attribute 'extensions'", function () {
    assert.property(testWS, "extensions");
    assert.isTrue(_.isString(testWS.extensions));
    assert.throws(() => { testWS.extensions = undefined; }, TypeError);
  });

  it("should have a readonly DOMString attribute 'protocol'", function () {
    assert.property(testWS, "protocol");
    assert.isTrue(_.isString(testWS.protocol));
    assert.throws(() => { testWS.protocol = undefined; }, TypeError);
  });

  it("should have a 'close' method", function () {
    assert.property(testWS, "close");
    assert.isTrue(_.isFunction(testWS.close));
  });

  it("should have a DOMString attribute 'binaryType'", function () {
    assert.property(testWS, "binaryType");
    assert.oneOf(testWS.binaryType, ["blob", "arraybuffer"]);

    // should be able to set it if acceptable value
    testWS.binaryType = "arraybuffer";
    assert.equal(testWS.binaryType, "arraybuffer");
    testWS.binaryType = "blob";
    assert.equal(testWS.binaryType, "blob");
    assert.throws(() => { testWS.binaryType = ""; }, SyntaxError);
  });

  it("should have a 'send' method", function () {
    assert.property(testWS, "send");
    assert.isTrue(_.isFunction(testWS.send));
  });

})
