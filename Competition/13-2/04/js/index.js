// 2h30min TODO：请补充代码
var process = '';
const formula = document.getElementById("formula"),
    result = document.getElementById("result"),
    calbtn = document.getElementsByClassName("calc-button"),
    cals = ['x', '÷', '+', '-', '√'];

for (let i = 0; i < calbtn.length; i++) {
    let cal = calbtn[i],
        text = cal.innerHTML;
    if (text == "AC") {
        cal.onclick = () => {
            result.value = '';
            formula.value = '';
            process = '';
        }
    } else if (text == '=') {
        cal.onclick = () => {
            process = process.replace('x', '*');
            process = process.replace('÷', '/');
            result.value = eval(process);
            process = '';
        }
    } else if (text == '√') {
        cal.onclick = () => {
            preserve(text);
            let res = Math.sqrt(eval(process));
            if (res != Math.floor(res)) {
                result.value = "NaN";
            } else {
                result.value = res;
            }
            process = '';
        }
    }
    else {
        cal.onclick = () => {
            preserve(text);
            formula.value += text;
            process += text;
        }
    }
}

function preserve(text) {
    if (process == '') {
        formula.value = '';
        if (cals.includes(text)) {
            formula.value += result.value;
            process += result.value;
        }
    }
}


