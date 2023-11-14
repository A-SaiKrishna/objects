function pairs(obj) {
  const pairArray = [];
  for (key in obj) {
    let flagArray = [];
    flagArray.push(key);
    flagArray.push(obj[key]);
    pairArray.push(flagArray);
  }
  return pairArray;
}

module.exports = pairs;
