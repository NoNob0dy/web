let pics = [];
let len = $('.option').length;
console.log();
for (let i = 1; i <= len; i++) {
    pics.push($(`#item${i}`));
}

for (let i = 0; i < len; i++) {
    pics[i].click(() => {
        for (let cnt = 0; cnt < len; cnt++) {
            if (cnt == i) {
                pics[cnt].attr("class", "option active");
            }
            else {
                pics[cnt].attr("class", "option");
            }
        }
    })
}

