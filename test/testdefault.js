const defalt = require("../default.js");

let obj = { pens: 33, pencil: undefined, books: 58 };
console.log(defalt(obj, 10));

console.log(obj);
