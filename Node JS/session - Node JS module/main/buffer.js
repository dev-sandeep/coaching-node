const { Buffer } = require('node:buffer');

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);

// finding the length of the buffer
console.log(buf2.length);

// converting buffer to string
const buf3 = Buffer.alloc(5, "INDIA");
// printing the encoded buffer
console.log(buf3);
// converting and printing the buffer to string
console.log(buf3.toString());