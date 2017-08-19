/* 
 * @Author: anchen
 * @Date:   2017-08-14 11:44:40
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-08-19 15:29:46
 */
define(['jquery'], function(jq) {
    return {
        enterfix: function() {
          
            jq(document).ready(function() {
                jq('body').height(jq('body')[0].clientHeight);
            });
            if (/Android [4-6]/.test(navigator.appVersion)) {
                window.addEventListener("resize", function() {
                    if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                        window.setTimeout(function() {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }, 0);
                    }
                })
            }
        }
    }
});