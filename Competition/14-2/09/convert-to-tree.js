function convertToTree(regions, rootId = "0") {
    // TODO: 在这里写入具体的实现逻辑
    // 将平铺的结构转化为树状结构，并将 rootId 下的所有子节点数组返回
    // 如果不存在 rootId 下的子节点，则返回一个空数组
    let res = [];
    let obj = [];
    while (regions.length != 0) {
        let region = regions.shift();
        if (region.pid == "0") {
            obj.push({ ...region, "children": [] });
        } else {
            dfs(obj, region, res, rootId);
        }
    }
    if (rootId == "0") {
        return obj;
    } else {
        console.log(res);
        return res;
    }
}

function dfs(obj, region, res, rootId) {
    if (obj == []) {
        return;
    }
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].pid == rootId && res.length != 1) {
            res.push(obj[i]);
        }
        if (obj[i].id == region.pid) {
            obj[i].children.push({ ...region, "children": [] });
            return;
        }
    }
    for (let i = 0; i < obj.length; i++) {
        dfs(obj[i].children, region, res, rootId);
    }
}

module.exports = convertToTree; // 检测需要，请勿删除
