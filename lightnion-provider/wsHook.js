// The MIT License (MIT)

// Copyright (c) 2015 Ahamed Nafeez

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



/* eslint-disable no-proto */
/* eslint-disable accessor-pairs */
/* eslint-disable no-global-assign */

/* wsHook.js
 * https://github.com/skepticfx/wshook
 * Reference: http://www.w3.org/TR/2011/WD-websockets-20110419/#websocket
 */

var wsHook = {};
(function () {
  // Mutable MessageEvent.
  // Subclasses MessageEvent and makes data, origin and other MessageEvent properites mutatble.
  function MutableMessageEvent (o) {
    this.bubbles = o.bubbles || false
    this.cancelBubble = o.cancelBubble || false
    this.cancelable = o.cancelable || false
    this.currentTarget = o.currentTarget || null
    this.data = o.data || null
    this.defaultPrevented = o.defaultPrevented || false
    this.eventPhase = o.eventPhase || 0
    this.lastEventId = o.lastEventId || ''
    this.origin = o.origin || ''
    this.path = o.path || new Array(0)
    this.ports = o.parts || new Array(0)
    this.returnValue = o.returnValue || true
    this.source = o.source || null
    this.srcElement = o.srcElement || null
    this.target = o.target || null
    this.timeStamp = o.timeStamp || null
    this.type = o.type || 'message'
    this.__proto__ = o.__proto__ || MessageEvent.__proto__
  }

  var before = wsHook.before = function (data, url, wsObject) {
    return data
  }
  var after = wsHook.after = function (e, url, wsObject) {
    return e
  }
  var modifyUrl = wsHook.modifyUrl = function(url) {
    return url
  }
  wsHook.resetHooks = function () {
    wsHook.before = before
    wsHook.after = after
    wsHook.modifyUrl = modifyUrl
  }

  var _WS = WebSocket
  WebSocket = function (url, protocols) {
    var WSObject
    url = wsHook.modifyUrl(url) || url
    this.url = url
    this.protocols = protocols
    if (!this.protocols) { WSObject = new _WS(url) } else { WSObject = new _WS(url, protocols) }

    var _send = WSObject.send
    WSObject.send = function (data) {
      arguments[0] = wsHook.before(data, WSObject.url) || data
      _send.apply(this, arguments)
    }

    // Events needs to be proxied and bubbled down.
    WSObject._addEventListener = WSObject.addEventListener
    WSObject.addEventListener = function () {
      var eventThis = this
      // if eventName is 'message'
      if (arguments[0] === 'message') {
        arguments[1] = (function (userFunc) {
          return function instrumentAddEventListener () {
            arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url, WSObject)
            if (arguments[0] === null) return
            userFunc.apply(eventThis, arguments)
          }
        })(arguments[1])
      }
      return WSObject._addEventListener.apply(this, arguments)
    }

    Object.defineProperty(WSObject, 'onmessage', {
      'set': function () {
        var eventThis = this
        var userFunc = arguments[0]
        var onMessageHandler = function () {
          arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url, WSObject)
          if (arguments[0] === null) return
          userFunc.apply(eventThis, arguments)
        }
        WSObject._addEventListener.apply(this, ['message', onMessageHandler, false])
      }
    })

    return WSObject
  }
})()
