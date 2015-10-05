$(function() {
    function _onorientationchange(e) {
        console.log(window.orientation);
        if (window.orientation == 90 || window.orientation == -90) {

            $("#forhorview").css("display", "-webkit-box"); //显示竖屏浏览提示框
            $("html").css("font-size", 62.5 * $(window).height() * 2 / 3 / 320 + "%"); //横屏下将整个页面缩小;
            $("#content").css({
                "height": $(window).height(),
                "width": $(window).height() * 2 / 3,
                "margin": "auto"
            }); //横屏下将整个页面以宽高比2：3在横屏中居中显示;

        } else { //竖屏下恢复默认显示效果
            $("#content").css({
                "width": "auto",
                "margin": "auto",
                "height": "100%"
            });
            $("html").removeAttr("style");
            $("#forhorview").css("display", "none");
        }
        // _resize(e);
    }

    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(e) {

        _onorientationchange(e);
    }, false);

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical'
    });
});
