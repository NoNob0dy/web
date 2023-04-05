/**
 * @description:
 * @param {*} str
 * @param {*} rule
 * @param {*} symbol
 * @param {*} dealPhone
 * @return {*}
 */
const toDesensitization = (str, rule, symbol = "*", dealPhone = true) => {
    if (type(str) != "String" || str == "") {
        return null;
    } else if (type(rule) != "String" && type(rule) != "Array") {
        return str;
    } else {
        if (type(rule) == "String") {
            rule = rule.split(',') || rule.split(' ');
        }
        let res = {
            "ids": [],
            "newStr": ""
        };
        if (dealPhone) {
            const phoneIndex = str.search(/[0-9]{11}/);
            if (phoneIndex != -1) {
                const subStr = str.substring(phoneIndex, phoneIndex + 11);
                str = str.replace(
                    subStr,
                    subStr.slice(0, 3) + symbol.repeat(5) + subStr.slice(8)
                );
            }
        }
        for (let i = 0; i < rule.length; i++) {
            res["ids"].push(str.indexOf(rule[i]));
            while (str.includes(rule[i])) {
                str = str.replace(
                    rule[i],
                    symbol.repeat(rule[i].length),
                )
            }
        }
        res.newStr = str;
        res.ids.sort((x, y) => {
            if (x > y) {
                return 1;
            } else if (x < y) {
                return -1
            } else {
                return 0;
            }
        })
        return res;
    }


};

function type(data) {
    return Object.prototype.toString.apply(data).slice(8, -1);
}

module.exports = toDesensitization;
