/*
 * @param {*}  左侧输入框输入的值转化成的 js 数据
 * @return {*} 根据传入的数据生成对应的 js 格式数据
 */
let generateData = (data) => {
   let res = [];
   let cnt = 1;
   let json = JSON.stringify(data);
   let repeat = json.match(/\"\{\{repeat\((\d+(\,\d+)?)\)\}\}\"/);
   if (repeat !== null) {
      json = json.substring(2 + repeat[0].length, json.length - 1);
      cnt = getRandom(repeat[0]);
   }
   for (let i = 0; i < cnt; i++) {
      res.push(parseJson(json));
   }
   return res;
};

function parseJson(json) {
   let replace = json;
   let bool = replace.match(/\"\{\{bool\(\)\}\}\"/);
   let integer = replace.match(/\"\{\{integer\((\d+(\,\d+)?)\)\}\}\"/);
   if (bool !== null) {
      bool.forEach(element => {
         replace = replace.replace(element, getRandom("0, 1") == 1 ? true : false);
      });  
   }
   if (integer !== null) {
      integer.forEach(element => {
         replace = replace.replace(element, getRandom(element));
      });  
   }
   return JSON.parse(replace);
}

function getRandom(str) {
   let num = str.match(/\d+(\,\d+)?/)[0].split(",").map(str => parseInt(str));
   if (num.length == 1) {
      return num[0];
   } else {
      return Math.round(Math.random() * (num[1] - num[0]) + num[0]);
   }
}

module.exports = { generateData };
