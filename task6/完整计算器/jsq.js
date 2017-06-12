    var clear = document.getElementById('clear'); //c 清除
    var sin = document.getElementById('sin'); //sin
    var cos = document.getElementById('cos'); //cos
    var dividespot = document.getElementById('dividespot'); ///
    var multiply = document.getElementById('multiply'); //*
    var subtract = document.getElementById('subtract'); //-
    var add = document.getElementById('add'); //+
    var spot = document.getElementById('spot'); //.
    var plusMinus = document.getElementById('plus-minus'); //+/-
    var etc = document.getElementById('etc'); //=
    var one = document.getElementById('one'); //1
    var two = document.getElementById('two'); //2
    var three = document.getElementById('three'); //3
    var fore = document.getElementById('fore'); //4
    var five = document.getElementById('five'); //5
    var six = document.getElementById('six'); //6
    var seven = document.getElementById('seven'); //7
    var eight = document.getElementById('eight'); //8
    var nine = document.getElementById('nine'); //9
    var zero = document.getElementById('zero'); //0
    var result = document.getElementById('result'); //结果
    var temp = ""; //储存运算的变量
    var temp1 = ""; //控制显示的变量
    if (zero.addEventListener) { //适配大多数浏览器
        //清除
        clear.addEventListener("click", clearEvent, false);
        //输入数字绑定单击事件
        zero.addEventListener("click", zeroEvent, false);
        one.addEventListener("click", oneEvent, false);
        two.addEventListener("click", twoEvent, false);
        three.addEventListener("click", threeEvent, false);
        fore.addEventListener("click", foreEvent, false);
        five.addEventListener("click", fiveEvent, false);
        six.addEventListener("click", sixEvent, false);
        seven.addEventListener("click", sevenEvent, false);
        eight.addEventListener("click", eightEvent, false);
        nine.addEventListener("click", nineEvent, false);
        //运算符号绑定单击事件
        sin.addEventListener("click", sinEvent, false);
        cos.addEventListener("click", cosEvent, false);
        dividespot.addEventListener("click", dividespotEvent, false);
        multiply.addEventListener("click", multiplyEvent, false);
        subtract.addEventListener("click", subtractEvent, false);
        add.addEventListener("click", addEvent, false);
        spot.addEventListener("click", spotEvent, false);
        plusMinus.addEventListener("click", plusMinusEvent, false);
        etc.addEventListener("click", etcEvent, false);
    } else { //兼容IE
        zero.attachEvent("onclick", zeroEvent);
        one.attachEvent("onclick", oneEvent);
        two.attachEvent("onclick", twoEvent);
        three.attachEvent("onclick", threeEvent);
        fore.attachEvent("onclick", foreEvent);
        five.attachEvent("onclick", fiveEvent);
        six.attachEvent("onclick", sixEvent);
        seven.attachEvent("onclick", sevenEvent);
        eight.attachEvent("onclick", eightEvent);
        nine.attachEvent("onclick", nineEvent);
        sin.attachEvent("onclick", sinEvent);
        cos.attachEvent("onclick", cosEvent);
        dividespot.attachEvent("onclick", dividespotEvent);
        multiply.attachEvent("onclick", multiplyEvent);
        subtract.attachEvent("onclick", subtractEvent);
        add.attachEvent("onclick", addEvent);
        spot.attachEvent("onclick", spotEvent);
        plusMinus.attachEvent("onclick", plusMinusEvent);
        etc.attachEvent("onclick", etcEvent);
        //清除
        clear.attachEvent("onclick", clearEvent);
    }

    function numEvent(i, j) {
        var regex = /^[+/*]+$/gi; //校验用户先输入运算符的情况
        var regex1 = /^[-]{2,}$/gi; //校验用户先输入运算符的情况
        if (regex.test(temp) || regex1.test(temp)) {
            // console.info("NaN");
            result.innerHTML = "NaN";
        } else {
            temp += i;
            temp1 += j;
            result.innerHTML = temp1;
        }
        console.info(temp);
    }

    function zeroEvent() {
        numEvent(0, 0);
    }

    function oneEvent() {
        numEvent(1, 1);
    }

    function twoEvent() {
        numEvent(2, 2);
    }

    function threeEvent() {
        numEvent(3, 3);
    }

    function foreEvent() {
        numEvent(4, 4);
    }

    function fiveEvent() {
        numEvent(5, 5);
    }

    function sixEvent() {
        numEvent(6, 6);
    }

    function sevenEvent() {
        numEvent(7, 7);
    }

    function eightEvent() {
        numEvent(8, 8);
    }

    function nineEvent() {
        numEvent(9, 9);
    }
    //运算符函数
    function operator(a) {
        var reg = /[a]{1,}$/gi; //校验输入过多加号情况
        if (reg.test(temp)) {
            temp += "";
            temp1 += "";
        } else {
            temp += a;
            temp1 = ""; //输入符号之前清空之前输入的数字
        }
    }
    //加法方法
    function addEvent() {
        operator("+");
    }
    //减法方法
    function subtractEvent() {
        operator("-");
    }
    //乘法方法
    function multiplyEvent() {
        operator("*");
    }
    //除法方法
    function dividespotEvent() {
        operator("/");
    }

    function sincos() {
        console.info(Math.sin(temp));
        temp = Math.sin(temp);
        result.innerHTML = temp;
    }
    //sin方法
    function sinEvent() {
        sincos();
    }
    //cos方法
    function cosEvent() {
        sincos();
    }
    //小数点添加方法
    function spotEvent() {
        // result.innerHTML=".";
        var reg1 = /[.]{1,}$/gi; //对于多输入小数点情况验证
        if (reg1.test(temp1)) {
            temp += "";
            temp1 += "";
        } else {
            temp += ".";
            temp1 = temp1 + ".";
            result.innerHTML = temp1;
        }
    }
    //添加取消负号方法
    var index = 0;

    function plusMinusEvent() {
        index++;
        // console.info(index);
        if (index % 2 == 0) {
            temp1 = Math.abs(temp);
            if (isNaN(temp1)) {
                temp1 = "";
            }
            temp = temp1;
            // console.info("偶数次"+temp);
            result.innerHTML = temp1;
        } else {
            // temp +="-";
            temp1 = "-" + temp1;
            temp = temp1;
            // console.info("奇数次"+temp);
            result.innerHTML = temp1;
        }
    }
    //等于方法
    function etcEvent() {
        var reg = /\/0/gi; //验证0为除数的情况
        if (reg.test(temp)) {
            result.innerHTML = "NaN";
        } else {
            result.innerHTML = parseFloat(eval(temp).toFixed(1));
            temp1 = eval(temp);
            console.info(eval(temp1));
        }
        //当计算完一组运算之后，清除之前保留的运算结果
        temp = "";
        temp1 = "";
    }
    //清除方法
    function clearEvent() {
        result.innerHTML = 0;
        temp = "";
        temp1 = "";
    }
