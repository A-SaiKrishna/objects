function defalt(obj, defaultValue) {
  for (key in obj) {
    if (obj[key] === undefined) obj[key] = defaultValue;
  }
  return obj;
}
module.exports = defalt;
