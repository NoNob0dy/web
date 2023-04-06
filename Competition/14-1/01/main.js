/**
 * @description: 数据类型检测
 * @param {*} data 传入的待检测数据
 * @return {*} 返回数据类型
 */
function getType(data) {
  return Object.prototype.toString.apply(data).slice(8, -1);
}

module.exports = {
  getType
}


