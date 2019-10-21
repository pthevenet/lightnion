
// create websocket as normal
let url = new URL("ws://demos.kaazing.com/echo");

// connect to websocket
let _ws = new WebSocket(url); // TODO protocols ?

// send message through usual websocket
function sendMessage() {
    console.log("_WS SENDMESSAGE");
    let msg = document.getElementById("echo-input").value;
    document.getElementById("echo-input").value = "";
    appendMessage(msg);
    _ws.send(msg);
    return false;
}

function appendMessage(msg) {
    var ul = document.getElementById("messages");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
}

function onMessage(msg) {
    appendMessage(">> " + msg);
}

_ws.onmessage = function (event) {
    console.log("_WS ONMESSAGE - " + event.data);
    onMessage(event.data);
}

document.getElementById("echo-form").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("echo-button").click();
    }
});

function focus() {
    document.getElementById("echo-input").focus();
}


// Websocket Redirection

wsConnections = {}

wsHook.before = function (data, url) {
    let rurl = new URL(url);

    // check if this is a lightnion websocket
    if (rurl.port === lnn.api.ws_port && rurl.pathname.startsWith(lnn.api.url) && rurl.hostname == location.hostname) {
        // passthrough request
        return data;
    }

    let ndata = data + " [redirected]"

    // if new connection, create one

    if (!(rurl in wsConnections)) {
        console.log(`adding a websocket connection for ${rurl}`);
        lnnOpen("localhost", 4990).then(lnnEndpoint => {
            console.log("[LP]: connected")
            // open tcp
            return ltcpOpen(lnnEndpoint, rurl.hostname, 80);
        }).then(ltcp => {
            console.log("[LTCP]: connected")
            // start websocket protocol
            return lwsOpen(ltcp, rurl.pathname);
        }).then(lws => {
            console.log("[LWS]: connected")
            wsConnections[rurl] = lws;

            // setup reception
            // TODO: fake reception to the normal websocket
            lws.onmessage = (payload) => {
                try {
                    let resp = lnn.enc.utf8(payload);
                    console.log("RESPONSE: " + resp);
                    // TODO: put the true ws onmessage handler
                    onMessage(resp);    
                } catch (err) {
                    console.log(`could not decode ws payload: ${err}`);
                    console.log(payload);
                }
            }

            console.log(`[LWS] sending: ${rurl}: ${ndata}`);

            lws.send(lnn.dec.utf8(ndata));
        });
    } else {
        let lws = wsConnections[rurl];
        console.log(`[LWS] sending: ${rurl}: ${ndata}`);
        lws.send(lnn.dec.utf8(ndata));
    }

    // TODO: block request
    return data;
}

wsHook.after = function (messageEvent, url, wsObject) {
    // return null;
    // TODO: this should allow WS communications with the lightnion proxy
    return messageEvent;
}
