$(document).ready(function() {
    // 换肤
    // 当点击换肤是，换肤界面滑出
    $("#huanfu").click(function() {
        $(".hfxiala").slideDown(500);
        // 当点击收起时，换肤界面收起
        $("#shouqi").click(function() {
            $(".hfxiala").slideUp(500);
        })
    });
    // 换肤类型
    function hfbiaoqianxl(i, j) {
        $(i).mouseover(function() {
            //当鼠标移入li时
            $(this).css({
                background: "#389cff",
                color: "#fff"
            });
            $(this).siblings().css({
                background: "#fff",
                color: "#555"
            });
            $(i).click(function() {
                $(i).css({
                    background: "#389cff",
                    color: "#fff"
                });
                $(j).css("display", "block");
                $(j).siblings().css("display", "none");
                $(i).siblings().css({
                    background: "#fff",
                    color: "#555"
                })
            })
        }).mouseout(function() {
            $(this).removeClass();
        });
    };
    hfbiaoqianxl("#hf-rm", ".hf-rm1");
    hfbiaoqianxl("#hf-yx", ".hfxiala-b-1left");
    hfbiaoqianxl("#hf-kt", ".hf-kt1");
    hfbiaoqianxl("#hf-ns", ".hf-ns1");
    hfbiaoqianxl("#hf-mx", ".hf-mx1");
    hfbiaoqianxl("#hf-fj", ".hf-fj1");
    hfbiaoqianxl("#hf-jy", ".hf-jy1");
    hfbiaoqianxl("#hf-xqx", ".hf-xqx1");
    hfbiaoqianxl("#hf-zdy");
    hfbiaoqianxl("#hf-zjsy");
    // // end换肤类型
    // 点击图片换肤
    function huanfu(i, j) {
        $(i).click(function() {
            // $(".wrapper").addClass("bodybj");
            $(".wrapper").css({ "background-image": j, "background-size": "cover" });
            $(".header a,.header  p").css("color", "#fff");
            $(".baidu-setting").css({ "border": "none", "box-shadow": "none" })
            $("#baidulogo").attr("src", "img/baidu2.png");
        });
        //不使用皮肤
        $(".nopf>span").click(function() {
            $(".wrapper").css("background-image", "none");
            $("a,p").css("color", "#333");
            $(".more").css("color", "#fff");
            $(".baidu-setting").css({ "color": "#fff", "border": "1px solid #ddd", "box-shadow": "1px 1px 5px #ddd" });
            $("#baidulogo").attr("src", "img/bdlogo.png");
        });
    };
    huanfu("#youxi1", "url(img/swxf.jpg)");
    huanfu("#youxi2", "url(img/swxf2.jpg)");
    huanfu("#youxi3", "url(img/swxf3.jpg)");
    huanfu("#youxi4", "url(img/swxf4.jpg)");
    huanfu("#youxi5", "url(img/swxf5.jpg)");
    huanfu("#youxi6", "url(img/swxf6.jpg)");

    huanfu("#rm1", "url(img/rm1.jpg)");
    huanfu("#rm2", "url(img/rm2.jpg)");
    huanfu("#rm3", "url(img/rm3.jpg)");
    huanfu("#rm4", "url(img/rm4.jpg)");
    huanfu("#rm5", "url(img/rm5.jpg)");
    huanfu("#rm6", "url(img/rm6.jpg)");

    huanfu("#kt1", "url(img/kt1.jpg)");
    huanfu("#kt2", "url(img/kt2.jpg)");
    huanfu("#kt3", "url(img/kt3.jpg)");
    huanfu("#kt4", "url(img/kt4.jpg)");
    huanfu("#kt5", "url(img/kt5.jpg)");
    huanfu("#kt6", "url(img/kt6.jpg)");

    huanfu("#ns1", "url(img/ns1.jpg)");
    huanfu("#ns2", "url(img/ns2.jpg)");
    huanfu("#ns3", "url(img/ns3.jpg)");
    huanfu("#ns4", "url(img/ns4.jpg)");
    huanfu("#ns5", "url(img/ns5.jpg)");
    huanfu("#ns6", "url(img/ns6.jpg)");

    huanfu("#mx1", "url(img/mx1.jpg)");
    huanfu("#mx2", "url(img/mx2.jpg)");
    huanfu("#mx3", "url(img/mx3.jpg)");
    huanfu("#mx4", "url(img/mx4.jpg)");
    huanfu("#mx5", "url(img/mx5.jpg)");
    huanfu("#mx6", "url(img/mx6.jpg)");

    huanfu("#fj1", "url(img/fj1.jpg)");
    huanfu("#fj2", "url(img/fj2.jpg)");
    huanfu("#fj3", "url(img/fj3.jpg)");
    huanfu("#fj4", "url(img/fj4.jpg)");
    huanfu("#fj5", "url(img/fj5.jpg)");
    huanfu("#fj6", "url(img/fj6.jpg)");

    huanfu("#jy1", "url(img/jy1.jpg)");
    huanfu("#jy2", "url(img/jy2.jpg)");
    huanfu("#jy3", "url(img/jy3.jpg)");
    huanfu("#jy4", "url(img/jy4.jpg)");
    huanfu("#jy5", "url(img/jy5.jpg)");
    huanfu("#jy6", "url(img/jy6.jpg)");

    huanfu("#xqx1", "url(img/xqx1.jpg)");
    huanfu("#xqx2", "url(img/xqx2.jpg)");
    huanfu("#xqx3", "url(img/xqx3.jpg)");
    huanfu("#xqx4", "url(img/xqx4.jpg)");
    huanfu("#xqx5", "url(img/xqx5.jpg)");
    huanfu("#xqx6", "url(img/xqx6.jpg)");

    // end点击图片换肤
    // 更多产品下拉
    $(".setting-menu2").mouseover(function() {
        $(".baidu-setting2").css("display", "block");
        $(".more").css({ "background": "#fff", "color": "#333", "border": "none", "box-shadow": "none" });
    }).mouseout(function() {
        $(".baidu-setting2").css("display", "none");
        $(".more").css({ "background": "#38f", "color": "#fff", "border": "1px solid #ddd", "box-shadow": "1px 1px 5px #ddd" });
    });

    // 底部切换标签
    function qiehuan(a,b) {
        $(a).mouseover(function() {
            $(this).css({ "color": "#fff", "background": "#b3b6bb" });
            $(this).click(function() {
                $(this).css("background", "#9a9da2");
                $(b).css("display","block");
                $(b).siblings().css("display","none")
                $(this).siblings().css({ "background": "rgba(255, 255, 255, 0)", "color": "#333" })
            })
        }).mouseout(function() {
            $(this).css({ "background": "rgba(255, 255, 255, 0)", "color": "#333" })

        });
    }
    qiehuan(".fwodeguanzhu",".wdgz1")
    qiehuan(".ftuijian",".tjqiehuan")
    qiehuan(".fdaohang",".dhqiehuan")
    qiehuan(".fshipin",".shipin")
    qiehuan(".fgouwu",".gouwu")
   
    $(".shezhi").mouseover(function() {
        $(this).css("background-position", "-121px -73px")
    }).mouseout(function() {
        $(this).css("background-position", "-121px -49px")
    });

    // 推荐,h2
    $(".footer-f-r ul li a,.tuijianxw h2 a,.sp1 a,.gd,.gw1-3 ul li").mouseover(function() {
        $(this).css({ "color": "#389cff", "text-decoration": "underline" })
    }).mouseout(function() {
        $(this).css({ "color": "#333", "text-decoration": "none" })
    });
    // 导航
    $(".qiy").mouseover(function() {
        $(this).css("border", "1px solid #ddd");
    }).mouseout(function() {
        $(this).css("border", "1px solid #fcfcfc")
    })





})
