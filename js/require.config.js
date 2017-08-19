require.config({　
    baseUrl: "js",　　　
    paths: {　　　　　　
        "jquery": "lib/jquery-2.1.3.min", //新jq版本本身支持AMD规则
        "jweixin": "lib/jweixin-1.0.0",
        "zepto": "lib/zepto.min",
        "mtween": "lib/m.Tween",
        "pxloaderImages": "lib/pxloader-images.min",
        "PageSlider": "PageSlider" //这个通用方法JS 是自己写的，里面有依赖，所以要用AMD方式进行改写
    },
    shim: {　　　　
        'zepto': {　　　　　　　　
            exports: '$'　 //zepto库不支持AMD模式，并且有全局变量$ 　　　　　
        }
        /* 'PageSlider': {　　　　　　　　
            deps: ['underscore', 'jquery'],
             exports: 'Backbone'　　　　　　
        }　*/
        　　　
    }　　
});