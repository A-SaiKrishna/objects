function values(obj) {
  let valueArray = [];
  for (key in obj) {
    valueArray.push(obj[key]);
  }
  return valueArray;
}
module.exports = values;
