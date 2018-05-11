$(function () {
    $(".checked img").click(function () {
        //单选多选按钮点击打勾
        if ($(this).attr("src") == "img/check.png") {
            $(this).attr("src", "img/checked.png")
        }
        else { $(this).attr("src", "img/check.png") }
    })
   
})