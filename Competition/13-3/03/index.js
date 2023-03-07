function cal(salary) {
    // TODO: 在此处补充代码
    salary -= 5000;
    if (salary <= 0) {
        return 0;
    } else if (salary > 0 && salary <= 4000) {
        return salary * 0.03;
    } else if (salary > 4000 && salary <= 10000) {
        return salary * 0.05;
    } else {
        return salary * 0.1;
    }
}
module.exports = cal; //请勿删除