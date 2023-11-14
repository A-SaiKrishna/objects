function keys(obj) {
  let keyArray = [];
  for (key in obj) {
    keyArray.push(key);
  }
  return keyArray;
}

module.exports = keys;
