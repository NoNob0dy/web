/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  var newA = new Array();
  var len = oldArr.length;
  oldArr = oldArr.sort(function (a,b) {
    if (a < b) {    
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
  });
  var a = new Date();
  var tmp = a.getMinutes();
  for (var flag = 0; flag < len; flag += num) {
    if(flag + num >= len) {
      newA.push(oldArr.slice(flag, len));
    }
    else newA.push(oldArr.slice(flag, flag + num));
  }
  return newA;
};
module.exports = splitArray; // 检测需要，请勿删除
