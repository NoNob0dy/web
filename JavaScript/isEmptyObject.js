function isEmptyObject(obj) {
  for (o in obj) {
    return false;
  }
  return true;
  //return Object.keys(obj || []).length === 0; //将对象转换为数组
  //为防止undefined以及null参数无法转换，因此并上数组(|| [])
}

module.exports = isEmptyObject