define(["jquery"],function(e){return{enterfix:function(){e(document).ready(function(){e("body").height(e("body")[0].clientHeight)}),/Android [4-6]/.test(navigator.appVersion)&&window.addEventListener("resize",function(){"INPUT"!=document.activeElement.tagName&&"TEXTAREA"!=document.activeElement.tagName||window.setTimeout(function(){document.activeElement.scrollIntoViewIfNeeded()},0)})}}});