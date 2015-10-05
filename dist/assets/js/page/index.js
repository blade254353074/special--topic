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

    var img_list = $('img');
    Loader.show({
        iFileData: img_list,
        bgColor: '#000', //loading背景色值，默认#000
        defaultAnimation: true, //布尔值，默认值true。是否显示默认的loading动画
        customAnimation: function(curPer) { //加载进度回调函数，取值0~1
            if (curPer > 0.9) {
                // $('#main').css('display', 'block');
            }
        },
        completeCallback: function() { //完成预加载回调函数
            $('#main').css('display', 'block');
            var timerDream,
                timerCircle;
            var swiper = new Swiper('.swiper-container', {
                effect: false,
                speed: 350,
                followFinger: false,
                direction: 'vertical',
                slideActiveClass: 'active',
                slidePrevClass: 'prev',
                resistanceRatio: 1,
                onSlideChangeEnd: function(swiper) {
                    if (swiper.activeIndex === 4) {
                        if (timerDream) clearTimeout(timerDream);
                        timerDream = setTimeout(function() {
                            $('.layer-dream').addClass('fadeOutUp');
                        }, 2000);
                        if (timerCircle) clearTimeout(timerCircle);
                        timerCircle = setTimeout(function() {
                            $('.layer-signcircle').addClass('spin');
                        }, 3100);
                    }
                },
                onSlideChangeStart: function(swiper) {
                    if (swiper.activeIndex === 4) {
                        $('.layer-dream').removeClass('fadeOutUp');
                        $('.layer-signcircle').removeClass('spin');
                    }
                },
                onTouchEnd: function(swiperx) {
                    if (swiperx.activeIndex === 5 && swiperx.swipeDirection === 'next') {
                        swiperx.slidePrev();
                    }
                }
            });
            $('.layer-signcircle').on('click', function() {
                swiper.slideNext();
            });
        }
    });

});
