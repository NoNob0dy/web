function getType(target) {
    //返回变量的原始类型
    var type = Object.prototype.toString.apply(target);
    //var type = Object.prototype.toString.call(target);
    var start = type.indexOf(' ');
    var end = type.length - 1;
    return type.slice(start, end).toLowerCase();
    //return Object.prototype.toString.apply(target).slice(8,-1).toLowerCase();
}

module.exports = getType