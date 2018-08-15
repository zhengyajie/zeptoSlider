;(function ($) {
    $.fn.jquerySlider = function (options) {

        //定义默认设置
        var defaults = {
            auto: true, //是否自动播放
            index: 0,
            times: 3000, //定时器时间
        };
        var options = $.extend({}, defaults, options); //{}这个代表是把defaults 和后面的optinso整合一起返回给你options
        var timer = setInterval(function () {
                //对index进行累加  
                options.index++;
                //调用移动ul的方法  
                // console.log(index);
                options.auto?sliderAuto():'';
            }, options.times);
        this.each(function () {
            var _this = $(this),
                width = $('body').width(),
                imgLists = $('.slider-list');
            var imgs = $('.slider-item');
            var indexList = $('.slider-index');
            var indexs = $('.index-item');
            var str = '';
            for (var i = 0; i < imgs.length - 1; i++) {
                str += '<li class="index-item"></li>';
                console.log('aaaaaaa');
            }
            console.log(str);
            $('.slider-index').append(str);
            console.log($(indexs));
            $('.slider-list').css({
                'width': imgs.length * width,
            });
            $('.slider-item').css({
                'width': width
            })
            $('.slider-index').css({
                'width': imgs.length * 26
            })
            //定时器自动轮播  

        });
        function sliderAuto() {
            if ( options.index >= $('.slider-item').length) {
                $('.slider-list').animate({
                    'left': 0
                });
                options.index = 0
            } else if (options.index < 0) {
                options.index = $('.slider-item').length - 1
                $('.slider-list').animate({
                    'left': options.index * $('body').width() * -1
                });
            } else {
                $('.slider-list').animate({
                    'left': options.index * $('body').width() * -1
                });
            }
            //修改激活点的样式  
            $('.index-item').removeClass('active').eq(options.index).addClass('active');
            //重新启动定时器
            if (timer == undefined) {　　　　
                timer = setInterval(function () {
                    console.log('aaaaaaaaa')
                    options.index++;
                    sliderAuto();
                },options.times);
            }
        }
        $('.slider-list').swipeRight(function () {
            clearInterval(timer);
            timer = undefined;
            index--;
            //调用移动ul的方法  
            sliderAuto();
        });
        //右滑动
        $('.slider-list').swipeLeft(function () {
            clearInterval(timer);
            timer = undefined;
            options.index++;
            //调用移动ul的方法  
            sliderAuto();
        });
        return this;
    }
})(Zepto);