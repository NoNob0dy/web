/**
 * @description 得到分页数组 indexArr，如[1,2,3,4,10],[1,3,4,5,10],[1,7,8,9,10]
 * @param {number} currentPage 当前页数,默认为第一页	
 * @param {number} totalPages 总的页码数
 * @param {number} pagerCount 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
 * @return {Array} 分页数组 indexArr
*/
const createPaginationIndexArr = (currentPage, totalPages, pagerCount) => {
    // TODO：根据传参生成分页数组 indexArr
    let indexArr = new Set([1, totalPages]);
    if (totalPages <= pagerCount) {
        return Array.from({ length: totalPages }, (v, k) => k + 1);
    }
    else {
        let cnt;
            left = 1 + (pagerCount - 3),
            right = totalPages - (pagerCount - 3);
        if (currentPage >= right) {
            cnt = totalPages - 1;
            while (indexArr.size < pagerCount) {
                indexArr.add(cnt--);
            }
        } else if (currentPage <= left){
            cnt = 2;
            while (indexArr.size < pagerCount) {
                indexArr.add(cnt++);
            }
        } else {
            cnt = 0;
            while (1) {
                let l = currentPage - cnt,
                    r = currentPage + cnt; 
                if (l >= left - 1) {
                    indexArr.add(l);
                    if (indexArr.size == pagerCount) {
                        break;
                    }
                }
                if (r <= right + 1) {
                    indexArr.add(r);
                    if (indexArr.size == pagerCount) {
                        break;
                    }
                }
                cnt++;
            }
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