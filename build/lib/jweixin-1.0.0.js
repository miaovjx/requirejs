!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define([],function(){return n(e)}):n(e,!0)}(this,function(e,n){function i(n,i,o){e.WeixinJSBridge?WeixinJSBridge.invoke(n,t(i),function(e){s(n,e,o)}):u(n,o)}function o(n,i,o){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){o&&o.trigger&&o.trigger(e),s(n,e,i)}):o?u(n,o):u(n,i)}function t(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function r(e,n){return{scope:n,signType:"sha1",timeStamp:e.timestamp+"",nonceStr:e.nonceStr,addrSign:e.addrSign}}function c(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:"SHA1"}}function s(e,n,i){var o,t;switch(delete n.err_code,delete n.err_desc,delete n.err_detail,o=n.errMsg,o||(o=n.err_msg,delete n.err_msg,o=a(e,o),n.errMsg=o),i=i||{},i._complete&&(i._complete(n),delete i._complete),o=n.errMsg||"",M.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),t=o.indexOf(":"),o.substring(t+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function a(e,n){var i,o,t,r;if(n){switch(i=n.indexOf(":"),e){case g.config:o="config";break;case g.openProductSpecificView:o="openProductSpecificView";break;default:o=n.substring(0,i),o=o.replace(/_/g," "),o=o.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),o=o.substring(0,1).toLowerCase()+o.substring(1),o=o.replace(/ /g,""),-1!=o.indexOf("Wcpay")&&(o=o.replace("Wcpay","WCPay")),(t=h[o])&&(o=t)}r=n.substring(i+1),"confirm"==r&&(r="ok"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),r=r.replace(/_/g," "),r=r.toLowerCase(),("access denied"==r||"no permission to execute"==r)&&(r="permission denied"),"config"==o&&"function not exist"==r&&(r="ok"),n=o+":"+r}return n}function d(e){var n,i,o,t;if(e){for(n=0,i=e.length;i>n;++n)o=e[n],(t=g[o])&&(e[n]=t);return e}}function u(e,n){if(M.debug&&!n.isInnerInvoke){var i=h[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function p(){if(!("6.0.2">v)){var e=new Image;V.appId=M.appId,V.initTime=k.initEndTime-k.initStartTime,V.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,P.getNetworkType({isInnerInvoke:!0,success:function(n){V.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+V.version+"&o="+V.isPreVerifyOk+"&s="+V.systemType+"&c="+V.clientVersion+"&a="+V.appId+"&n="+V.networkType+"&i="+V.initTime+"&p="+V.preVerifyTime+"&u="+V.url;e.src=i}})}}function l(){return(new Date).getTime()}function f(n){I&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){P.invoke||(P.invoke=function(n,i,o){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,t(i),o)},P.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}var g,h,S,y,_,I,w,T,v,k,V,M,b,x,P;return e.jWeixin?void 0:(g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},h=function(){var e,n={};for(e in g)n[g[e]]=e;return n}(),S=e.document,y=S.title,_=navigator.userAgent.toLowerCase(),I=-1!=_.indexOf("micromessenger"),w=-1!=_.indexOf("android"),T=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),v=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},V={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:w?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},M={},b={_completes:[]},x={state:0,res:{}},f(function(){k.initEndTime=l()}),P={config:function(e){M=e,u("config",e),f(function(){i(g.config,{verifyJsApiList:d(M.jsApiList)},function(){b._complete=function(e){k.preVerifyEndTime=l(),x.state=1,x.res=e},b.success=function(){V.isPreVerifyOk=0},b.fail=function(e){b._fail?b._fail(e):x.state=-1};var e=b._completes;return e.push(function(){M.debug||p()}),b.complete=function(n){for(var i=0,o=e.length;o>i;++i)e[i](n);b._completes=[]},b}()),k.preVerifyStartTime=l()}),M.beta&&m()},ready:function(e){0!=x.state?e():(b._completes.push(e),!I&&M.debug&&e())},error:function(e){"6.0.2">v||(-1==x.state?e(x.res):b._fail=e)},checkJsApi:function(e){var n=function(e){var n,i,o=e.checkResult;for(n in o)(i=h[n])&&(o[i]=o[n],delete o[n]);return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(w){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e}())},onMenuShareTimeline:function(e){o(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareAppMessage:function(e){o(g.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl,link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips||1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2"},function(){return e._complete=function(e){if(w){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:e.isShowProgressTips||1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips||1},e)},getNetworkType:function(e){var n=function(e){var n,i,o,t=e.errMsg;if(e.errMsg="getNetworkType:ok",n=e.subtype,delete e.subtype,n)e.networkType=n;else switch(i=t.indexOf(":"),o=t.substring(i+1)){case"fail":case"permission denied":case"localparameters":e.errMsg="getNetworkType:fail";break;default:e.networkType=o}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){i(g.getLocation,r(e,"jsapi_location"),e)},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{immediate_close:e&&e.immediateClose||0},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{desc:e.desc,needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},e)},openProductSpecificView:function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0},e)},addCard:function(e){var n,o,t,r,c=e.cardList,s=[];for(n=0,o=c.length;o>n;++n)t=c[n],r={card_id:t.cardId,card_ext:t.cardExt},s.push(r);i(g.addCard,{card_list:s},function(){return e._complete=function(e){var n,i,o,t=e.card_list;if(t){for(t=JSON.parse(t),n=0,i=t.length;i>n;++n)o=t[n],o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ;e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var n,o,t,r,c=e.cardList,s=[];for(n=0,o=c.length;o>n;++n)t=c[n],r={card_id:t.cardId,code:t.code},s.push(r);i(g.openCard,{card_list:s},e)},chooseWXPay:function(e){i(g.chooseWXPay,c(e),e)}},n&&(e.wx=e.jWeixin=P),P)});