let activeIndex = 1;
let lb = $(".btn.left");
let rb = $(".btn.right");
const sectionsCount = $("section").length;

// 监听用户按下空格和方向键的事件
$(document).on("keydown", (e) => {
  e.preventDefault();
  if (e.key === " " || e.key === "ArrowRight") {
    goRight();
  }
  if (e.key === "ArrowLeft") {
    goLeft();
  }
});

// 监听按钮点击事件
lb.click(goLeft);
rb.click(goRight);

// 切换下一张的函数
function goLeft() {
  if (activeIndex === 1) {
    return;
  }
  activeIndex -= 1;
  switchPage();
}

// 切换上一张的函数
function goRight() {
  if (activeIndex === sectionsCount) {
    return;
  }
  activeIndex += 1;
  switchPage();
}

function switchPage() {
  if (activeIndex == sectionsCount) {
    rb.addClass("disable");
  } else if (activeIndex == 1) {
    lb.addClass("disable");
  } else {
    lb.removeClass("disable");
    rb.removeClass("disable");
  }
  for (let i = 1; i <= sectionsCount; i++) {
    if (i == activeIndex) {
      $(`section:nth-of-type(${i})`).css("display", "flex");
    }
    else {
      $(`section:nth-of-type(${i})`).css("display", "none");
    }
  }
  $(".page").text(`${activeIndex} / ${sectionsCount}`);
}
