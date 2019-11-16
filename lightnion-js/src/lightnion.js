import * as lnnutils from "./lnn/utils.js";

// export let DO_TEST = () => {
//     console.log(lnnutils);

//     console.log(lnnutils.enc.bits(lnnutils.dec.bits("bits <-> strings")));
//     console.log(lnnutils.enc.utf8(lnnutils.dec.utf8("utf8 <-> strings")));
//     console.log(lnnutils.dec.base64(lnnutils.enc.base64("base64 <-> strings")))
//     console.log(lnnutils.enc.bin(lnnutils.dec.bin("binary <-> strings")))
// }

let lnn = {};

lnn.enc = {};
lnn.enc.bits = lnnutils.enc.bits;
lnn.enc.utf8 = lnnutils.enc.utf8;
lnn.enc.base64 = lnnutils.enc.base64;
lnn.enc.bin = lnnutils.enc.bin;


export { lnn };