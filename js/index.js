function scrollNews() {
        var kk = parseInt($(".news_content_li").width() - $(".news_content_li").parent().width()) + parseInt($(".news_content").css("font-size"));
        $(".news_content_li").animate({ "left": -kk }, aa)
        $(".news_content_li").animate({ "left": "0" }, 0)
}
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
$(function () {
        (function () {
                // 字体滚动操作
                if ($(".news_content_li").text().length > 21) {
                        //判断字长度，超出滚动
                        var cc = parseInt($(".news_content_li").text().length - 22) * 200;
                        var aa = 3000 + cc;
                }
                else {
                        var aa = 3000;
                }
                if ($(".news_content_li").width() > $(".news_content_li").parent().width()) {
                        var kk = parseInt($(".news_content_li").width() - $(".news_content_li").parent().width()) + parseInt($(".news_content").css("font-size"));
                        $(".news_content_li").animate({ "left": -kk }, aa);
                        $(".news_content_li").animate({ "left": "0" }, 0);
                        window.setInterval("scrollNews()", aa)
                }
        })();
                $(".shoucang").click(function(){
			$(this).attr("src","img/shoucang_a.png");
                })
})