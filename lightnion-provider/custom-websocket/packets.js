/**
 * Packet crafting for WebSockets.
 */

/**
 * Construct the HTTP packet send by the client during the WebSocket handshake.
 * @returns the HTTP client handshake packet as a string, with the Uint8Array SecWebSocketKey used in it
 */
export function clientHandshake(host, port, resourceName, protocols = []) {
    // TODO: support for subprotocols
    // no Sec-WebSocket-Protocol, Sec-WebSocket-Extensions

    // create the nonce: base64 encoded 16 random bytes
    const nonce = nacl.randomBytes(16);
    const nonceB64 = lnn.enc.base64(nonce);

    // create the http packet
    const pkt = [
        ["GET", `${resourceName}`, "HTTP/1.1"],
        ["Host:", `${host}:${port}`],
        ["Connection:", "Upgrade"],
        ["Upgrade:", "websocket"],
        ["Sec-WebSocket-Key:", `${nonceB64}`],
        ["Origin:", `${host}`],
        ["Sec-WebSocket-Version:", "13"],
    ].map(s => s.join(" ")).join("\r\n") + "\r\n\r\n"

    return [pkt, nonce];
}

/**
 * The GUID used for the Sec-WebSocket verification.
 */
export let guid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"


/**
 * Verify the Sec-WebSocket-Accept header field by computing its expected value.
 * @param {Uint8Array} key 4-bytes sec-websocket-key used for client handshake
 * @param {string} resp received header field value string
 * 
 * @returns boolean true if the received value is expected
 */
export function verifySecWebSocketAccept(key, resp) {

    const fromHexString = hexString =>
        new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

    const keyb64 = lnn.enc.base64(key);
    let hashed = forge.md.sha1.create();
    hashed.update(keyb64 + guid);
    const hashedBytes = fromHexString(hashed.digest().toHex());
    const expected = lnn.enc.base64(hashedBytes);
    return resp === expected;
}


/**
 * Encapsulate given data into a WebSocket packet.
 * 
 * @param {Uint8Array} payload the packet payload
 * @param {string} flags the first 4 bits of the packet, FIN/RSV1/RSV2/RSV3 in bitstring format
 * @param {int} opcode the integer opcode 
 */
export function encapsulate(payload, flags = "1000", opcode = 1) {
    // TODO:
    // - fragmentation
    // - optimizations

    const opcodeBits = opcode.toString(2).padStart(4, '0');

    if (payload.length >= 126) {
        // TODO
        throw 'payload too long, not implemented';
    }
    let payloadLen = payload.length.toString(2).padStart(7, '0');

    // mask input x with key
    // x must be a Uint8Array, and key a 4-bytes Uint8Array
    function maskWithKey(x, key) {
        let out = new Uint8Array(x.length);
        for (var i = 0; i < x.length; i++) {
            out[i] = x[i] ^ key[i % 4];
        }
        return out;
    }

    let mask = '1';
    // let maskingKey = nacl.randomBytes(4);
    let maskingKey = new Uint8Array(4);
    let maskedPayload = maskWithKey(payload, maskingKey);
    console.log(payload)
    console.log(maskedPayload)

    function bitstringToUint8Array(bitstring) {
        let len = Math.ceil(bitstring.length / 8);
        let out = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            out[i] = parseInt(bitstring.slice(8 * i, 8 * i + 8), 2);
        }
        return out;
    }

    let headerStart = bitstringToUint8Array(flags + opcodeBits + mask + payloadLen);

    return Uint8Array.from([...headerStart, ...maskingKey, ...maskedPayload])
}


/**
 * Parse a websocket packet to a disctionnary.
 * 
 * @param {Uint8Array} frame the websocket-encapsulated packet to parse
 * 
 * @returns dictionnary of fields and fields values of the encapsulated packet, or undefined if packet is invalid
 *      keys are a subset of ['FIN', 'RSV1', 'RSV2', 'RSV3', 'opcode', 'MASK', 'Payload Len', 'Masking-key', 'Payload Data']
 */
export function parse(frame) {
    let parsed = {};
    let restLen = frame.byteLength;
    if (restLen < 2) {
        // bogus frame
        return undefined;
    }

    let byteIterator = frame.entries();

    // first byte
    var bits0 = (byteIterator.next().value[1]).toString(2).padStart(8, '0').split('').map(c => c === "1" ? 1 : 0);
    parsed["FIN"] = bits0[0];
    parsed["RSV1"] = bits0[1];
    parsed["RSV2"] = bits0[2];
    parsed["RSV3"] = bits0[3];
    parsed["opcode"] = parseInt(bits0.slice(4, 8).join(''), 2);
    restLen--;

    // second byte
    var bits1 = (byteIterator.next().value[1]).toString(2).padStart(8, '0').split('').map(c => c === "1" ? 1 : 0);
    parsed["MASK"] = bits1[0];
    parsed["Payload len"] = parseInt(bits1.slice(1, 8).join(''), 2);
    restLen--;

    // rest

    if (parsed["Payload len"] == 126) {
        // if 126, the following 2 bytes interpreted as a 16-bit unsigned integer are the payload length
        if (restLen < 2) {
            return undefined;
        }
        let pLen = (byteIterator.next().value[1]).toString(2).split('');
        pLen = pLen.concat((byteIterator.next().value[1]).toString(2).split(''));
        parsed["Payload len"] = parseInt(pLen, 2);
        restLen -= 2;
    } else if (parsed["Payload len"] == 127) {
        // if 127, the following 8 bytes interpreted as a 64-bit unsigned integer (the most significant bit MUST be 0) are the payload length
        if (restLen < 8) {
            return undefined;
        }
        let pLenBits = "";
        for (i = 0; i < 8; i++) {
            pLenBits = pLen.concat((byteIterator.next().value[1]).toString(2).split(''));
        }
        parsed["Payload len"] = parseInt(pLenBits, 2);
        restLen -= 8;
    }

    if (parsed["MASK"]) {
        // next 4 bytes is the masking key
        if (restLen < 4) {
            return undefined;
        }
        let maskingKeyBits = "";
        for (i = 0; i < 4; i++) {
            maskingKeyBits += (byteIterator.next().value[1]).toString(2);
        }
        parsed["Masking-key"] = parseInt(maskingKeyBits, 2);
        restLen -= 4;
    }

    parsed["Payload data"] = frame.slice(-restLen); // UInt8Array

    return parsed;
}

export let opcodes = {
    close: 8,
    ping: 9,
    pong: 10,
}
