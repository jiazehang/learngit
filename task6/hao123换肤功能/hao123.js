var skin = document.getElementById("skin"); //拿到link元素
var cookieval = document.cookie;
var skipval = readcookie("skin");
if (!skipval) { //如果cookie不存在记录
    skin.href = "green.css";
} else {
    skin.href = skipval + ".css"; //有记录
};
window.onload = function() {
    //点击按钮换肤
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var Days = 30; //设置过期时间，30天以后
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    btn1.onclick = function() {
        skin.href = "green.css";
        document.cookie = "skin=green;expires=" + exp.toUTCString();
    };
    btn2.onclick = function() {
        skin.href = "blue.css";
        document.cookie = "skin=blue;expires=" + exp.toUTCString();
    };
    btn3.onclick = function() {
        skin.href = "orange.css";
        document.cookie = "skin=orange;expires=" + exp.toUTCString();
    };
     btn4.onclick = function() {
        skin.href = "red.css";
        document.cookie = "skin=red;expires=" + exp.toUTCString();
    };
     btn5.onclick = function() {
        skin.href = "yellow.css";
        document.cookie = "skin=yellow;expires=" + exp.toUTCString();
    };
};
//读取cookie指定值
function readcookie(key) {
    var skinval = false;
    var arrkv = cookieval.split(";");
    for (var i = 0; i < arrkv.length; i++) {
        var itemc = arrkv[i].split("=");
        if (itemc[0] == key) {
            skinval = itemc[1];
        } else {};
    };
    return skinval;
};
