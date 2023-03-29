$(function () {
  getData();
  let rl = [], ll = $("#leftSelect option").map(item => $(item));
  console.log(ll);
  $("#add").click(function () {
    let change = [];
    for (let i = 0; i < ll.length; i++) {
      if (ll[i].attr("selected")) {
        ll[i].attr("selected", false);
        $('#rightSelect').append(ll[i]);
        ll[i].remove();
        
        rl.push(ll[i]);
        change.push(ll[i]);
        ll.splice(i, 1);
      }
    }
    changeAccess(true, change);
  });
  $("#addAll").click(function () {
    let change = [];
    for (let i = 0; i < ll.length; i++) {

      $('#rightSelect').append(ll[i]);
      ll[i].remove();

      rl.push(ll[i]);
      change.push(ll[i]);
      ll.splice(i, 1);
    }
    changeAccess(true, change);
  });
  $("#remove").click(function () {
    let change = [];
    for (let i = 0; i < rl.length; i++) {
      if (rl[i].attr("selected")) {

        rl[i].attr("selected", false);
        $('#leftSelect').append(rl[i]);
        rl[i].remove();

        ll.push(rl[i]);
        change.push(rl[i]);
        rl.splice(i, 1);
      }
    }
    changeAccess(false, change);
  });
  $("#removeAll").click(function () {
    let change = [];
    for (let i = 0; i < rl.length; i++) {

      $('#leftSelect').append(rl[i]);
      rl[i].remove();

      ll.push(rl[i]);
      change.push(ll[i]);
      rl.splice(i, 1);
    }
    changeAccess(false, change);
  });
});

/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  const names = $("#userList td:even").map((item) => $(item)),
        rights = $("#userList td:odd").map((item) => $(item));  
  for (let i = 1, cnt = 0; cnt < changeList.length; i++) {
    const val = changeList[cnt++].value;
    if (names[i].text() == val) {
      if (right) {
        rights[i].text("管理员");
      } else {
        rights[i].text("普通用户");
      }
    }
  }
}

function getData() {
  const tab = $("#userList");
  $.getJSON("./js/userList.json").then(res => {
    for (key in res) {
      let tr = $("<tr>");
      appendName(tr, res[key].name);
      appendRight(tr, res[key].right)
      tab.append(tr);
    }
  })
}

function appendName(tr, name) {
  let td = $("<td>");
  td.text(name);
  tr.append(td);
}

function appendRight(tr, right) {
  let td = $("<td>");
  if (right) {
    td.text("管理员");
  } else {
    td.text("普通用户");
  }
  tr.append(td);
}