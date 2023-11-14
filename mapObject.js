function mapObject(obj, cb) {
  let tempobject = {};
  for (key in obj) {
    tempobject[key] = cb(obj[key]);
  }
  return tempobject;
}
module.exports = mapObject;
