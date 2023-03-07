// 实现选项卡功能
function init() {
    // TODO 待补充代码
    let tabs = document.querySelectorAll('.tabs div');
    let items = document.querySelectorAll('#content div');
    for (let i = 0; i < tabs.length; i++) { 
        tabs[i].onclick = () => {
            for (let ind = 0; ind < tabs.length; ind++) {
                if(ind != i) {
                    tabs[ind].classList.remove('active');
                    items[ind].classList.remove('active');
                } else {
                    tabs[i].classList.add('active');
                    items[i].classList.add('active');
                }
            }
        }
    }

}
init();