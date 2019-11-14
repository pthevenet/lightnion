/**
 * @module utils
 * Utility functions used in the lightnion-js-client module.
 */

// var sjcl = require("../../vendor/sjcl.js");
import * as sjcl from "../../vendor/sjcl.js";
// import * as sjcl from "sjcl";
import * as naclutil from "tweetnacl-util";

console.log(sjcl)

/**
 * Encoding functions.
 */
export class enc {
    static get bits() { return sjcl.codec.bytes.toBits; }
    static get utf8() { return naclutil.encodeUTF8; }
    static get base64() { return naclutil.encodeBase64; }
    static get bin() {
        return function (data) {
            var str = ""
            for (var idx = 0; idx < data.length; idx++)
                str += String.fromCharCode(data[idx])
            return str
        }
    }
}

/**
 * Decoding functions.
 */
export class dec {
    static get bits() {
        return function (data) {
            return new Uint8Array(sjcl.codec.bytes.fromBits(data));
        }
    }
    static get utf8() { return naclutil.decodeUTF8; }
    static get base64() { return naclutil.decodeBase64; }
    static get bin() {
        return function (str) {
            var data = new Uint8Array(str.length)
            for (var idx = 0; idx < str.length; idx++)
                data[idx] = str.charCodeAt(idx)
            return data
        }
    }
}
