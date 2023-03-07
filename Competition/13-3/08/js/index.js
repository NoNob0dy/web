function bind(cardno, password) {
<<<<<<< HEAD
    $.getJSON('js/cardnolist.json', (data) => {
        let flag = false,
            res = data.cardnolist;
        for (key in res) {
            if (res[key].cardno == cardno) {
                if (res[key].password == password) {
                    flag = true;
                }
            }
        }
        if (flag) {
            $("#tip1").attr("class", "alert alert-primary alert-dismissible show");
            $("#tip2").attr("class", "alert alert-warning alert-dismissible fade");
        } else {
            $("#tip2").attr("class", "alert alert-warning alert-dismissible show");
            $("#tip1").attr("class", "alert alert-primary alert-dismissible fade");
        }
    })
}
$(document).ready(function () {
    $("#btnsubmit").click(function () {
=======
    //Todo:补充代码
 
}
$(document).ready(function() {
    $("#btnsubmit").click(function() {
>>>>>>> bd545d0c982368f185922076aa4c310baccee200
        //卡号
        let cardno = $("#exampleInputCardno").val();
        //密码
        let password = $("#exampleInputPassword").val();
        bind(cardno, password);
    });
});