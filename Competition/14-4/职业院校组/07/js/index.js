// 将用户输入的带分隔符的 isbn 字符串转换只有纯数字和大写 X 字母的字符串
// 入参 str 为转换为包含任意字符的字符串
function getNumbers(str) {
  // TODO: 待补充代码
  return str.match(/\d|X/g).join("");
}

// 验证当前 ISBN10 字符串是否有效
// 入参 str 为待判断的只有纯数字和大写 X 字母的字符串
function validISBN10(str) {
  // TODO: 待补充代码
  if (!/^\d{10}$|^\d{9}X$/.test(str)) {
    return false;
  }
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == str.length - 1) {
      let mod = ans % 11;
      if (mod == 10) {
        return str.charAt(i) == 'X';
      } else {
        return mod == parseInt(str.charAt(i));
      }
    }
    ans += (i + 1) * parseInt(str.charAt(i));
  }

}

// 将用户输入的 ISBN-10 字符串转化为 ISBN-13 字符串
// 入参 isbn 为有效的 ISBN-10 字符串
function ISBN10To13(isbn) {
  // TODO: 待补充代码
  let ISBN13 = "978" + isbn.substring(0, isbn.length - 1);
  let ans = 0;
  for (let i = 0; i < ISBN13.length; i++) {
    if ((i + 1) % 2 != 0) {
      ans += 1 * parseInt(ISBN13.charAt(i))
    } else {
      ans += 3 * parseInt(ISBN13.charAt(i));
    }
  }
  
  let mod = ans % 10;
  if (mod == 0) {
    return ISBN13 + "0";
  } else {
    mod = 10 - mod;
    return ISBN13 + mod.toString();
  }
}

// 测试用例
console.log(getNumbers("7-5600-3879-4")); // 7560038794
console.log(getNumbers("7 5600 3879 4")); // 7560038794

console.log(validISBN10("7560038794")); // true
console.log(validISBN10("7560038793")); // false
console.log(validISBN10("756003879")); // false
console.log(validISBN10("756003879004")); // false

console.log(ISBN10To13("7560038794")); // 9787560038797
console.log(ISBN10To13("3598215088")); // 9783598215087
