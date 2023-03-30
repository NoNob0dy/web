$(function () {
  getData();
  $("#add").click(function () {
    let change = [], ll = getOptions("left");
    for (let i = 0; i < ll.length; i++) {
      if (ll[i].is(":checked")) {
        ll[i].attr("checked", false);
        $('#rightSelect').append(createOption(ll[i]));
        ll[i].remove();
        change.push(ll[i]);
      }
    }
    changeAccess(true, change);
  });
  $("#addAll").click(function () {
    let change = [], ll = getOptions("left");
    for (let i = 0; i < ll.length; i++) {
      $('#rightSelect').append(createOption(ll[i]));
      ll[i].remove();
      change.push(ll[i]);
    }
    changeAccess(true, change);
  });
  $("#remove").click(function () {
    let change = [], rl = getOptions("right");
    for (let i = 0; i < rl.length; i++) {
      if (rl[i].is(":checked")) {
        rl[i].attr("checked", false);
        $('#leftSelect').append(createOption(rl[i]));
        rl[i].remove();
        change.push(rl[i]);
      }
    }
    changeAccess(false, change);
  });
  $("#removeAll").click(function () {
    let change = [], rl = getOptions("right");
    for (let i = 0; i < rl.length; i++) {
      $('#leftSelect').append(createOption(rl[i]));
      rl[i].remove();
      change.push(rl[i]);
    }
    changeAccess(false, change);
  });
});

function createOption(node) {
  let option = $("<option>");
  option.text(node.text());
  option.attr("value", node.attr("value"));
  return option;
}

function getOptions(dir) {
  let options = [];
  $(`#${dir}Select option`).each((index, elem) => {
    options.push($(elem));
  });
  return options;
}

function getTd(seriel) {
  let tds = [];
  $(`#userList td:${seriel}`).each((index, elem) => {
    tds.push($(elem));
  });
  return tds;
}
/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  const names = getTd("even"),
        rights = getTd("odd");
  for (let i = 1, cnt = 0; cnt < changeList.length; i++) {
    const val = changeList[cnt++].attr("value");
    if (names[i].text() == val) {
      if (right) {
        console.log(1);
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