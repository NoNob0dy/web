let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数
let list = [];
axios.get('../js/carlist.json').then(res => {
  for (key in res.data) {
    list.push(res.data[key]);
  }
  update();
});
// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  list.unshift(list.pop());
  update();
};
let next = document.getElementById("next");
next.onclick = function () {
  list.push(list.shift());
  update();
};
function update() {
  let name = document.getElementById("name"),
      price = document.getElementById("price"),
      description = document.getElementById("description");
  name.text(list[0].name);
  price.text(list[0].price);
  description.text(list[0].description);
}