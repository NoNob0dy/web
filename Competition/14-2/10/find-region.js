function findRegion(regions, regionName) {
    // TODO: 在这里写入具体的实现逻辑
    // 需要从树状结构的行政信息中，遍历找到目标区域的行政信息，如输入：成都市，返回 [四川省，成都市]
    // 如果所输入的位置信息不存在，则返回 null
    let res = [];
    if (dfs(regions, regionName, res)) {    
        return res.reverse();
    } else {
        return null;
    }

}

function dfs(regions, regionName, res) {
    if (regions == []) {
        return false
    }
    for (let i = 0; i < regions.length; i++) {
        let name = regions[i].name;
        if (name == regionName) {
            res.push(name);
            return true;
        }
    }
    for (let i = 0; i < regions.length; i++) {
        if (dfs(regions[i].children, regionName, res)) {
            res.push(regions[i].name);
            return true
        }
    }
    return false;
}
module.exports = findRegion; // 检测需要，请勿删除
