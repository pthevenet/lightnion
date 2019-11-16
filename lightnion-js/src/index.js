import * as lnnutils from "./lnn/utils.js";


console.log(lnnutils);


console.log(lnnutils.enc.bits(lnnutils.dec.bits("bits <-> strings")));
console.log(lnnutils.enc.utf8(lnnutils.dec.utf8("utf8 <-> strings")));
console.log(lnnutils.dec.base64(lnnutils.enc.base64("base64 <-> strings")))
console.log(lnnutils.enc.bin(lnnutils.dec.bin("binary <-> strings")))
