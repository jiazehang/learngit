$(document).ready(function() {
    // 导航栏
    // i为导航栏父标签，j为子标签，k为父标签的i
    function navbiaoqian(i, j, k) {
        $(i).mouseover(function() {
            $(this).css("color", "rgb(53, 181, 88)");
            $(j).css("display", "block");
            $(k).css({
                "transform": "rotate(45deg)",
                "transition": "0.5s"
            })
            $(".submenu a").mouseover(function() {
                $(this).css("color", "#35b558")
            })
        }).mouseout(function() {
            $(this).css("color", "");
            $(k).css({
                "transform": "",
                "transition": ""
            });
            $(".submenu a").css("color", "");
            $(".submenu").css("display", "none");

        })

    };
    navbiaoqian(".sy");
    navbiaoqian(".hykc", ".hykc .submenu", ".hykc>i");
    navbiaoqian(".zyxy", ".zyxy .submenu", ".zyxy>i");
    navbiaoqian(".jksq", ".jksq .submenu", ".jksq>i");

    // 登录、注册
    // a为导航栏图标，b为移入后的icon,c为子菜单
    function iconBox(a, b, c) {
        $(a).mouseover(function() {
            $(this).addClass(b)
            $(c).css("display", "block")
        }).mouseout(function() {
            $(this).removeClass(b)
            $(c).css("display", "none")
        })
    }
    iconBox(".search-icon", "search-icon2")
    iconBox(".app-icon", "app-icon2", ".appIcon")
    iconBox(".login-icon", "", ".loginIcon")

    // 搜索框
    $(".search-icon").click(function() {
            $(".nav1,.icon-box").hide(200);
            $(".searchbox").show(500);
            $(".close-icon").click(function() {
                $(".nav1,.icon-box").show(200);
                $(".searchbox").hide(500);
            })

        })
        // 主体内容左侧栏
        // a为父菜单，b为子菜单
    function listShow(a, b, c) {
        $(a).mouseover(function() {
            $(this).addClass("aside-cList2").css("color", "#35b558");
            $(b).css("display", "block");
        }).mouseout(function() {
            $(this).removeClass("aside-cList2");
            $(".list-show").css("display", "none")
        })
    }
    listShow(".ydkf1", ".ydkf2");
    listShow(".qdkf1", ".qdkf2");
    listShow(".hdkf1", ".hdkf2");
    listShow(".jczs1", ".jczs2");
    listShow(".yjs1", ".yjs2");
    listShow(".znyj1", ".znyj2");
    listShow(".sjk1", ".sjk2");
    listShow(".rzks1", ".rzks2");
    listShow(".qyit1", ".qyit2");
    listShow(".sj1", ".sj2");

    // 左边栏，课程分类菜单
    // a为分类菜单，b为子菜单
    function sort1(a, b) {
        $(a).mouseover(function() {
            $(b).css({ "display": "block", "box-shadow": "1px 2px 4px rgba(0, 0, 0, .1)" })
            $(".sortMode a").mouseover(function() {
                $(this).css("color", "rgb(53, 181, 88)")
            }).mouseout(function() {
                $(this).css("color", "")
            })
        }).mouseout(function() {
            $(b).css("display", "")
        })
    }
    sort1(".sortMode .zx", ".sortMode .zx1")
    sort1(".sortMode .kclx", ".sortMode .kclx1")
    sort1(".sortMode .nrlx", ".sortMode .nrlx1")
    sort1(".sortMode .nddj", ".sortMode .nddj1")

    // 右侧主题内容
    $(".lesson-list ul li").each(function(index) {
        $(this).mouseover(function() {
             $(".lesson-list .lesson-infor h2 a").eq(index).css("color", "rgb(53, 181, 88)");
                
            $(".lesson-list .lesson-infor .p1").eq(index).css("display", "block");
            $(".lesson-list .zhongji").eq(index).css("display", "block");
            $(".lesson-list .learn-number").eq(index).css("display", "block");
            $(".lesson-list .lesson-infor").eq(index).css("height", "175px");
            $(".lesson-list .lessonicon-box").eq(index).css("margin-top", "25px");
            $(".lesson-list .lessonplay").eq(index).addClass("lessonplay1");
        }).mouseout(function() {
             $(".lesson-list .lesson-infor h2 a").eq(index).css("color", "");
            $(".lesson-list .lesson-infor .p1").eq(index).css("display", "");
            $(".lesson-list .zhongji").eq(index).css("display", "");
            $(".lesson-list .learn-number").eq(index).css("display", "");
            $(".lesson-list .lesson-infor").eq(index).css("height", "");
            $(".lesson-list .lessonicon-box").eq(index).css("margin-top", "");
            $(".lesson-list .lessonplay").eq(index).removeClass("lessonplay1");
        });


    });
    // 样式2
    $(".list-icon").click(function() {
        $(".w-1000").css("height", "1500px");
        $("#changeid").addClass("lesson-list2");
        $(".lesson-list2 ul li").each(function(index) {
            $(this).mouseover(function() {
                $(".lesson-list2 .lesson-infor h2 a").mouseover(function() {
                    $(this).css("color", "rgb(53, 181, 88)")
                }).mouseout(function(){
                	$(this).css("color", "")
                })
                $(".lessonplay").eq(index).addClass("lessonplay1");

            }).mouseout(function() {
                $(".lessonplay").eq(index).removeClass("lessonplay1");

            });


        })
        $("#changeid").removeClass("lesson-list");

    });
    $(".kuai-icon").click(function() {
            $(".w-1000").css("height", "");
            $("#changeid").addClass("lesson-list");
            $("#changeid").removeClass("lesson-list2");
        })
        // 换页条
    $(".page-nav .page-number,.page-nav .pgNext").mouseover(function() {
        $(this).css({ "color": "#35b558", "border": "1px solid #35b558" });
        $(this).click(function() {
            $(this).css({ "background": "#35b558", "color": "#fff" });
            $(this).siblings().css({ "background": "", "color": "" });
        });
    }).mouseout(function() {
        $(this).css({ "color": "", "border": "" });
    });
    // footer
    $(".jkinfor dl dd a,.wangzhi").mouseover(function() {
            $(this).css("color", "#35b558")
        }).mouseout(function() {
            $(this).css("color", "")
        })
        // APP二维码
    $(".downCon").mouseover(function() {
            $(".twoCode").css("display", "block")
        }).mouseout(function() {
            $(".twoCode").css("display", "none")
        })
        // 回到顶部
    $(".gotop .top").mouseover(function() {
        $(this).addClass("top2");
        $(this).removeClass("top");
        $(this).click(function(){
        	// 回到顶部
        	$("body").animate({scrollTop:0},200);
        })
    }).mouseout(function() {
        $(this).addClass("top");
        $(this).removeClass("top2")
    });
    $(".jk-app").mouseover(function(){
    	
    	$(this).css({"background":"url(imgs/phone-2.png) center center no-repeat","backgroundSize":"12px 24px"})
   		$(".appewm").css("display","block");
    }).mouseout(function(){
    	$(this).css("background","");
    	$(".appewm").css("display","");
    })




















})
