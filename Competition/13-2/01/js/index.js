/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  oldArr = oldArr.sort((x, y) => {
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  });
  let len = oldArr.length,
    newArr = new Array();
  for (let i = 0; i < len; i += num) {
    if (i + num >= len) { newArr.push(oldArr.slice(i, len)); }
    else { newArr.push(oldArr.slice(i, i + num)); }
  }
  return newArr;
};
module.exports = splitArray; // 检测需要，请勿删除
