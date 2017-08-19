/**
 * Created by json(610330335@qq.com) .
 */





require(['zepto','appfix','PageSlider', 'mtween', 'pxloaderImages'], function($,appfix) {　
    console.log(appfix.enterfix)
     
   
    //加载图
    var imgarr = [''];
    //app初始化
    var h5 = new PageSlider({
        pages: $('.page-wrap .page'),
        dev: 0, //
        onbeforechange: function() { //开始切换前的回调
            $('.p6-box,.p7-box,.p8-box,.p9-box').hide();
        },
        onchange: function() { //每一屏切换完成时的回调
            //console.log(this.index)
            // alert(this.index)
            if (this.index == 2) {
                lizi.init(2,"#d7b56e")
            }else if (this.index == 3) {
                lizi.init(3,"#d7b56e")
            } else if (this.index == 4) {
                lizi.init(4,"#d7b56e")
            } else if (this.index == 5) {
                $('.p4_10,.p5_9').removeClass('flash').addClass('fadeIn delay2600');
                $('.p6-box').show();
            } else if (this.index == 6) {
                $('.p7-box').show();
            } else if (this.index == 7) {
                $('.p8-box').show();
            } else if (this.index == 8) {
                $('.p9-box').show();
            } else if (this.index == 9) {}
        },
      //  musicUrl: 'music/bg.mp3',
        baseUrl: 'http://yidian.weiyihui.com.cn/ydzx_hengda_02/'
    });
    ////默认分享
    h5.wxShare('万亿恒大，再献荆州', '荆州恒大翡翠华庭，荣耀问世！', '万亿恒大，再献荆州', h5.baseUrl + 'index.html', h5.baseUrl + 'images/jsshare.jpg');
    h5._loadimg(imgarr, function() {
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
        }, 500);
    });
    var lizi = (function() {
        var $page = $('.page');

        function init(index,color) {
            bindCanvas(index,color);
        }

        function bindCanvas(index,color) {
            var $img = $page.eq(index).find('.Img');
            var posl = parseInt($img.css('left'));
            var post = parseInt($img.css('top'));
            var color = color
            console.log('posl:' + posl)
            console.log('post:' + post)
            var oC = $page.eq(index).find('canvas').get(0);
            oC.width = $(window).width();
            oC.height = $(window).height();
            var oGC = oC.getContext('2d');
            var objImg = new Image();
            objImg.src = $img.attr('src');
            $img.css('opacity', 0);
            objImg.onload = function() {
                oGC.drawImage(objImg, 0, 0);
                var dataImg = oGC.getImageData(0, 0, oC.width, oC.height);
                oGC.clearRect(0, 0, oC.width, oC.height);
                var step = 5;
                var arr = [];
                var stepW = parseInt(dataImg.width / step);
                var stepH = parseInt(dataImg.height / step);
                for (var i = 0; i < stepH; i++) {
                    for (var j = 0; j < stepW; j++) {
                        var color = getColor(dataImg, j * step, i * step);
                        if (color ==255) {
                            arr.push({
                                x: j * step + posl,
                                y: i * step + post,
                                bx: Math.random() * oC.width,
                                by: Math.random() * oC.height
                            });
                        }
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    oGC.beginPath();
                    oGC.fillStyle = color;
                    oGC.arc(arr[i].bx, arr[i].by, 1, 0, 360 * Math.PI / 180);
                    oGC.closePath();
                    oGC.fill();
                }
                setTimeout(function() {
                    move(arr);
                }, 100);
            };

            function getColor(dataImg, x, y) {
                var w = dataImg.width;
                var h = dataImg.height;
                var d = dataImg.data;
                return d[(y * w + x) * 4 + 3];
            }

            function move(arr) {
                var d = 500;
                var startTime = now();
                var timer = setInterval(function() {
                    var changeTime = now();
                    oGC.clearRect(0, 0, oC.width, oC.height);
                    var t = Math.min(changeTime - startTime, d);
                    for (var i = 0; i < arr.length; i++) {
                        var nowX = (arr[i].x - arr[i].bx) * t / d + arr[i].bx;
                        var nowY = (arr[i].y - arr[i].by) * t / d + arr[i].by;
                        oGC.beginPath();
                        oGC.fillStyle = color;
                        oGC.arc(nowX, nowY, 1, 0, 360 * Math.PI / 180);
                        oGC.closePath();
                        oGC.fill();
                    }
                    if (t == d) {
                        clearInterval(timer);
                        setTimeout(function() {
                            oGC.clearRect(0, 0, oC.width, oC.height);
                            $img.animate({
                                opacity: 1
                            }, 100);
                        }, 200);
                    }
                }, 15);
            }

            function now() {
                return (new Date()).getTime();
            }
        }
        return {
            init: init
        };
    })();


    $('.btn_start').on('animationend webkitAnimationEnd', function() {
        $('.btn_start').removeClass('rotateIn delay1200').addClass('pulse')
    });
    $('.p4_10').on('animationend webkitAnimationEnd', function() {
        $('.p4_10').removeClass('fadeIn delay2600').addClass('flash');
    });
    $('.p5_9').on('animationend webkitAnimationEnd', function() {
        $('.p5_9').removeClass('fadeIn delay2600').addClass('flash');
    });
    $(".btn_start").on({
        touchstart: function(e) {
            e.preventDefault();
            timeOutEvent = setTimeout(longPress, 500);
        },
        touchmove: function(e) {
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        },
        touchend: function(e) {
            clearTimeout(timeOutEvent);
            if (timeOutEvent != 0) {
                //alert("你这是点击，不是长按");
                h5.moveTo(1, false);
            }
            return false;
        }
    });

    function longPress() {
        timeOutEvent = 0;
        // alert("长按事件触发发");
        //  h5.moveTo(1, false);
    }
    //我的福利
    $('.p10-btn').on('tap', function(ev) {
        ev.stopPropagation();
        var username = $('.username').val();
        var tel = $('.phone').val();
        if (username == '') {
            alert('请输入您的姓名!');
            return false;
        } else if (tel == '' || !checkMobile(tel)) {
            alert('请输入正确的手机号码!');
            return false;
        } else {
            $.ajax({
                url: 'index.php?ac=info',
                type: 'POST',
                data: {
                    username: username,
                    phone: tel
                },
                dataType: 'json',
                beforeSend: function() {
                    $('.tk-load').removeClass('none');
                },
                success: function(data) {
                    $('.tk-load').addClass('none');
                    if (data.result == true) {
                        alert('提交信息成功！');
                        var ran = Math.random();
                        setTimeout(function() {
                            window.location.href = "index.html?" + ran;
                        }, 200)
                    } else {
                        if (data.error == 1) {
                            alert('参数不全');
                        } else if (data.error == 2) {
                            alert('手机号格式不正确');
                        } else if (data.error == 3) {
                            alert('提交失败');
                        }
                    }
                }
            })
        }
    });
    //分享弹层
    $('.btn_share').on('tap', function(ev) {
        ev.stopPropagation();
        $('.tk_share').removeClass('none');
    });
    $(document).on('tap', function() {
        $('.tk_share').addClass('none')
    });

    function checkMobile(s) {
        if (s.length != 11) return false;
        var partten = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15\d{9}$)|(^17\d{9}$)|(^18\d{9}$)/g;
        return partten.test(s);
    }

});

     
