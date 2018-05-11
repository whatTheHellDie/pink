$(function () {
    var cc = -($(".guige").height());
    $(".guige").css("bottom", "-4.8rem")
    //加入购物车
    $(".buy_now").click(function () {
        $(".guige").show();
        $(".buy_now").hide()
        $(".add_cart").hide()
        $(".next").delay(1500).css("display", "block");
        $(".guige").css({ "bottom": "0.88rem", "opacity": "1" })
    })
    $(".add_cart").click(function () {
        $(".guige").show();
        $(".buy_now").hide()
        $(".add_cart").hide()
        $(".next").delay(1500).css("display", "block");
        $(".guige").css({ "bottom": "0.88rem", "opacity": "1" })

    })
    $(".close").click(function () {
        $(".buy_now").show()
        $(".add_cart").show()
        $(".next").hide();
        $(".guige").css({ "bottom": "-4.8rem", "opacity": "0" })
    })
    //单选按钮
    $(".checked .check_img").click(function () {
        if ($(this).attr("src") == "img/check.png") {
            $(this).attr("src", "img/checked.png")
            $(this).parent().siblings(".checked").children(".check_img").attr("src", "img/check.png")
        }
        else {
            $(this).attr("src", "img/check.png");
            $(this).parent().siblings(".checked").children(".check_img").attr("src", "img/check.png");

        }

    })
})
//adv广告轮播
var slider = Swipe(document.getElementById('scroll_img'), {
    auto: 3000,
    continuous: true,
    callback: function (pos) {
        var i = bullets.length;
        while (i--) {
            bullets[i].className = ' ';
        }
        bullets[pos].className = 'on';
    }
});
var bullets = document.getElementById('scroll_position').getElementsByTagName('li');