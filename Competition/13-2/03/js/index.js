// TODO：请补充代码
function startGame() {
    let time = 0, cnt = 0,
        btn = $('#start'),
        score = $('#score'),
        imgs = $('img'),
        imgBoxes = $('.img-box'),
        pre = {
            src: '',
            index: 0
        };

    btn.css("display", "none");
    imgs.show(1000);
    imgs.hide(1000);

    for (let i = 1; i <= imgs.length; i++) {
        let imgBox = $(`#item${i}`);
        imgBox.on("click", () => {
            if (imgBox.attr("style.visibility") != "hidden") {
                time++;
                let img = $(`#fruit${i}`);
                img.css("display", "inline");
                if (time % 2 != 0) {
                    pre.src = img.attr('src');
                    pre.index = i;
                } else {
                    let preImg = $(`#fruit${pre.index}`),
                        preImgBox = $(`#item${pre.index}`);
                    //I don't know if it is neccessory, but its dangerous
                    imgBoxes.css("pointer-events", "none");
                    if (pre.src == img.attr('src')) {
                        setTimeout(() => {
                            cnt += 2;
                            score.text(cnt);
                            imgBox.css("visibility", "hidden");
                            preImgBox.css("visibility", "hidden");
                            imgBoxes.css("pointer-events", "all");
                        }, 500);
                    } else {
                        setTimeout(() => {
                            cnt -= 2;
                            score.text(cnt);
                            img.css("display", "none");
                            preImg.css("display", "none");
                            imgBoxes.css("pointer-events", "all");
                        }, 500)
                    }
                }
            }
        })
    }
}