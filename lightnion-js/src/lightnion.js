/**
 * @module lightnion
 */

import * as header from "./lnn/header.js";
import * as endpoint from "./lnn/endpoint.js";
import * as api from "./lnn/api.js";
import * as consensusParser from "./lnn/consensusParser.js";
import * as get from "./lnn/get.js";
import * as io from "./lnn/io.js";
import * as ntor from "./lnn/ntor.js";
import * as onion from "./lnn/onion.js";
import * as parser from "./lnn/parser.js";
import * as path from "./lnn/path.js";
import * as post from "./lnn/post.js";
import * as relay from "./lnn/relay.js";
import * as signature from "./lnn/signature";
import * as stream from "./lnn/stream.js";
import * as utils from "./lnn/utils.js";

// header
let lnn = header.lnn;

// api
lnn.fast = api.fast
lnn.auth = api.auth
lnn.open = api.open
lnn.agents = api.agents
lnn.send_req = api.send_req
lnn.http_request = api.http_request

// consensus parser
lnn.consensusParser = consensusParser.consensusParser;

// endpoint
lnn.endpoint = endpoint.endpoint;

// get
lnn.get = {};
lnn.get.guard = get.guard;
lnn.get.consensus = get.consensus;
lnn.get.descriptors = get.descriptors;
lnn.get.consensus_raw = get.consensus_raw;
lnn.get.descriptors_raw = get.descriptors_raw;
lnn.get.signing_keys = get.signing_keys;

// io
lnn.io = {};
lnn.io.polling = io.polling;
lnn.io.socket = io.socket;

// ntor
lnn.ntor = ntor.ntor;

// onion
lnn.onion = {};
lnn.onion.ctr = onion.ctr;
lnn.onion.sha = onion.sha;
lnn.onion.forward = onion.forward;
lnn.onion.backward = onion.backward;
lnn.onion.build = onion.build;
lnn.onion.peel = onion.peel;

// parser
lnn.parser = parser.parser;

// path
lnn.path = path.path;

// post
lnn.post = {};
lnn.post.create = post.create;
lnn.post.circuit_info = post.circuit_info;
lnn.post.handshake = post.handshake;
lnn.post.channel = post.channel;
lnn.post.extend = post.extend;
lnn.post.close = post.close;

// relay
lnn.relay = relay.relay;

// signature
lnn.signature = {};
lnn.signature.verify = signature.verify;
lnn.signature.get_hash = signature.get_hash;
lnn.signature.verify_key = signature.verify_key;
lnn.signature.get_sig_and_keys_digests = signature.get_sig_and_keys_digests;
lnn.signature.get_signature_big_int = signature.get_signature_big_int;
lnn.signature.get_hash_from_rsa_cipher = signature.get_hash_from_rsa_cipher;

// stream
lnn.stream = stream.stream;

// utils
lnn.enc = {};
lnn.enc.bits = utils.enc.bits;
lnn.enc.utf8 = utils.enc.utf8;
lnn.enc.base64 = utils.enc.base64;
lnn.enc.bin = utils.enc.bin;

lnn.dec = {};
lnn.dec.bits = utils.dec.bits;
lnn.dec.utf8 = utils.dec.utf8;
lnn.dec.base64 = utils.dec.base64;
lnn.dec.bin = utils.dec.bin;

console.log("WINDOW BEFORE:")
console.log(window);

window.lnn = lnn;
console.log("WINDOW AFTER:")
console.log(window);

export { lnn };