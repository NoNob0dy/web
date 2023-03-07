function generate() {
    subject = document.getElementById("subject").value;
    event1 = document.getElementById("event1").value;
    event2 = document.getElementById("event2").value;
    if (subject.length==0 || event1.length==0 || event2.length==0){
        return;
    }
    result = `欢迎用户${subject}在${event2}学习${event1}课程！`;
    document.getElementById("result").value = result;
}