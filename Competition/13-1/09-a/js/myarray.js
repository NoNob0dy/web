
Array.prototype.myarray = function (cb) {
  let tmp = [];
  for (item in this) {
    if (cb(this[item])) {
      tmp.push(this[item]);
    }
  }
  return tmp;
};
