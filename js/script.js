//封装getElementById方法
function byId(id) {
    return typeof (id) === "string" ? document.getElementById(id) : id;
}
//全局变量
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    tabBar = byId("tab-bar"),
    tabItems = tabBar.getElementsByClassName("tab-item");

function slideImg() {
    var main = byId("main");
    //鼠标滑过清除定时器，离开继续
    main.onmouseover = function () {
        //清除定时器
        if (timer) clearInterval(timer);
    }
    main.onmouseout = function () {
        timer = setInterval(
            function () {
                index++;
                if (index >= len) {
                    index = 0;
                }
                changeImg();
            }, 1000
        )
    }
    //自动在main上触发鼠标离开事件
    main.onmouseout();
}

//遍历点击，绑定事件
for (var t = 0; t < len; t++) {
    tabItems[t].id=t;
    tabItems[t].onclick = function () {
        index=this.id;
        changeImg();
    }
}

//切换图片
function changeImg() {
    //遍历banner下所有div，将div隐藏
    for (let i = 0; i < len; i++) {
        pics[i].style.display = "none";
        tabItems[i].className="tab-item";
    }
    pics[index].style.display = "block";
    tabItems[index].className = "tab-item tab-active";
}
slideImg();