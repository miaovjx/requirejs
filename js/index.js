/* 
 * @Author: anchen
 * @Date:   2017-08-14 11:44:16
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-08-19 10:44:50
 */

require(['zepto', 'PageSlider', 'mtween', 'pxloaderImages'], function($) {　　
     var bird1 = document.querySelector('#bird1');
    MTween({
        el: bird1,
        target: {
            translateY: 100,
            translateX: 100
        },
        time: 1000,
        type: "linear",
        callBack: function() {}
    });
    var imgarr = [''];
    var h5 = new PageSlider({
        pages: $('.page-wrap .page'),
        dev: 0, //
        // musicUrl: 'music/bg.mp3',
        baseUrl: 'https://yidian.weiyihui.com.cn/Hengda_page/',
        onchange: function() { //每一屏切换完成时的回调   
        }
    });

  //  console.log(h5.checkMobile)
    h5._loadimg(imgarr, function() {
        $('.page1').removeClass('none')
    });
    h5.wxShare('恒大华庭？', '大全城', '恒大华庭', h5.baseUrl + 'index.html', h5.baseUrl + 'images/jsshare.jpg');
});