// Parsing function helpers
import * as http from "./http/http.js"

/**
 * Parse the TODO of a HTTP request.
 * @param {string} line the request line
 */
export function parseHTTPRequestLine(line) {
    // Request-Line = Method SP Request-URI SP HTTP-Version CRLF
    if (!line) {
        throw `could not parse request line from ${line}`;
    }

    let parsed = {};
    let elements = line.split(" ")

    if (elements.length < 3) {
        throw `could not parse request line from ${line}: should be of the form 'Method Request-URI HTTP-Version CRLF'`;
    }

    parsed["method"] = elements[0];
    if (!Object.values(http.methods).includes(parsed["method"])) {
        throw `could not parse request line from ${line}: method is not recognized'`;
    }

    // FIXME: validate?
    parsed["request-uri"] = elements[1];

    // FIXME validate?
    parsed["version"] = elements[2];

    return parsed;
}

/**
 * Parse the status line of a HTTP response.
 * @param {string} line the status-line  
 */
export function parseHTTPStatusLine(line) {
    // Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF
    if (!line) {
        throw `could not parse status line from ${line}`;
    }
    let parsed = {};
    let elements = line.split(" ")

    if (elements.length < 2) {
        throw `could not parse status line from ${line}: should be of the form 'HTTP-Version Status-Code Reason CRLF'`;
    }

    parsed["version"] = elements[0];
    parsed["status-code"] = parseInt(elements[1]);
    parsed["reason"] = elements.slice(2).join(" ");

    if (isNan(parsed["status-code"])) {
        throw `could not parse status line from ${line}: status-code is not an integer`
    }

    return parsed;
}



/**
 * Parse the headers of a HTTP packet.
 * 
 * @param {string} headers HTTP headers
 * @returns a dictionnary of key-values in the header, 
 *  if multiple header key is present, values will be comma separated
 *  the header field names and values are set to lower-case, except for case-sensitive values
 */
export function parseHTTPHeaders(headers) {
    let parsed = {};

    if (!headers) { return parsed; }

    headers.split('\r\n')
        .forEach(line => {
            // split header line in key - value
            let i = line.indexOf(':');
            let key = line.substr(0, i).trim().toLowerCase();
            let val;
            if (key != "sec-websocket-accept" && key != "sec-websocket-key") {
                val = line.substr(i + 1).trim().toLowerCase();
            } else {
                val = line.substr(i + 1).trim();
            }

            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });

    return parsed;
}


/**
 * Parse the given url.
 * https://www.w3.org/TR/2012/CR-websockets-20120920/#parse-a-websocket-url-s-components
 * @param {URL} url the url to parse
 * @returns [host, port, ressourceName, secure]
 * @throws error when url is incorrect for a websocket connection
 */
export function parseURL(url) {
    // 1. if the url string is not an absolute URL, then fail this algorithm
    var absoluteURLChecker = new RegExp('^(?:[a-z]+:)?//', 'i');
    if (!absoluteURLChecker.test(url.href)) {
        throw `url is not absolute: ${url}`;
    }

    // 2. resolve the url string, with the URL character encoding set to UTF-8.

    // 3. if url does not have a <scheme> component whose value
    //    when converted to ASCII lowercase, is either "ws" or "wss",
    //    then fail this algorithm.
    if (url.protocol !== "ws:" && url.protocol !== "wss:") {
        throw `url scheme must be either 'ws:' or 'wss:', but is: ${url.protocol}`;
    }

    // 4. f url has a <fragment> component, then fail this algorithm.
    if (url.hash.substr(1) !== "") {
        throw `url cannot have a fragment: ${url}`;
    }


    // 5. if the <scheme> component of url is "ws", set secure to false;
    //    otherwise, the <scheme> component is "wss", set secure to true.
    const secure = url.protocol === "ws:" ? false : true;

    // 6. let host be the value of the <host> component of url,
    //    converted to ASCII lowercase.
    const host = url.hostname.toLowerCase();

    // 7. If url has a <port> component, then let port be that component's value;
    //    otherwise, there is no explicit port.
    // 8. if there is no explicit port, then: if secure is false, let port be 80, 
    //    otherwise let port be 443.
    const port = url.port || (url.protocol === "ws:" ? "80" : "443");

    // 9. let resource name be the value of the <path> component (which might be empty) of url.
    // 10. if resource name is the empty string, set it to a single character U+002F SOLIDUS (/).
    let ressourceName = url.pathname || "/";

    // 11. if url has a <query> component, then append a single U+003F QUESTION MARK character (?) to resource name,
    //     followed by the value of the <query> component.
    if (url.search) {
        ressourceName += url.search;
    }

    // 12. return host, port, resource name, and secure.
    return [host, port, ressourceName, secure];
}