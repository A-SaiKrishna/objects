let mapObject = require("../mapObject");
let testData = require("../data");

const newObject = mapObject(testData, (data) => data + data);
console.log(newObject);
