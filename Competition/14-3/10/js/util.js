/**
 * @description 得到分页数组 indexArr，如[1,2,3,4,10],[1,3,4,5,10],[1,7,8,9,10]
 * @param {number} currentPage 当前页数,默认为第一页	
 * @param {number} totalPages 总的页码数
 * @param {number} pagerCount 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
 * @return {Array} 分页数组 indexArr
*/
const createPaginationIndexArr = (currentPage, totalPages, pagerCount) => {
    currentPage = Array.of(currentPage);
    let cnt_l, cnt_r, lock = true;
    let indexArr = new Set([1, totalPages]);
    // TODO：根据传参生成分页数组 indexArr
    if (totalPages <= pagerCount) {
        return Array.from({ length: totalPages }, (v, k) => k + 1);
    }
    else {
        for (let i = 0; i < currentPage.length; i++) {
            indexArr.add(currentPage[i]);
        }
        cnt_l = currentPage[0];
        cnt_r = currentPage[currentPage.length - 1];
        while (indexArr.size < pagerCount) {
            if (lock && cnt_l > 1) {
                indexArr.add(cnt_l--);
            } else if (!lock && cnt_r < totalPages) {
                indexArr.add(cnt_r++);
            }
            lock = !lock;
        }
        return Array.from(indexArr).sort((x, y) => {
            if (x < y) {
                return -1;
            } else if (x > y) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}

module.exports = {
    createPaginationIndexArr
}