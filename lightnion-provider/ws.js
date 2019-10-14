
let wsUrl = new URL("ws://51.91.103.228:10001");
let ws = new WebSocket(wsUrl); // TODO protocols ?

function sendMessage() {
    let msg = document.getElementById("echo-input").value;
    document.getElementById("echo-input").value = "";
    appendMessage(msg);
    ws.send(msg);
    return false;
}

function appendMessage(msg) {
    var ul = document.getElementById("messages");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
}

ws.onmessage = function (event) {
    appendMessage(">> " + event.data);
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

wsHook.before = function (data, url) {
    data += " [modified]"
    console.log(`[Websocket send] ${url}: ${data}`);
    url = "www.google.com"
    console.log(url)
    return data;
}

// Make sure your program calls `wsClient.onmessage` event handler somewhere.
wsHook.after = function (messageEvent, url, wsObject) {
    console.log(`[Websocket receive] ${url}: ${messageEvent.data}`);
    return messageEvent;
}