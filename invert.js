function invert(obj) {
  let newObject = {};
  for (key in obj) {
    newObject[obj[key]] = key;
  }
  return newObject;
}

module.exports = invert;
