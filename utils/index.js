/**
 * Created by wq07973 on 2015/10/29.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict';


window.callbackFuncs = new Array();


/**
* 获取唯一识别id
* @return string 
*/
export function getUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

/**
 * 注册回调函数
 * @return void
 */
export function registerCallback(id, callback) {
    typeof callback === 'function' && window.callbackFuncs.push({id: id, callback: callback});
}

/**
 * 回调完成后移除回调
 * @return void
 */
function callbackCompletedRemove(uuid) {
    if (window.callbackFuncs && window.callbackFuncs.length > 0) {
        for (var i = 0, clength = window.callbackFuncs.length; i < clength; i++) {
            if (window.callbackFuncs[i].id == uuid) {
                window.callbackFuncs.splice(i, 1);
                break;
            }
        }
    }
}

/*
 * 客户端回调js
 * @response {string}  ----具体请看混合开发文档
 * @return void
 */
window.nativeToJsCallback = function (response) {
    if (window.callbackFuncs && window.callbackFuncs.length > 0) {
            response = JSON.parse(decodeURIComponent(response));
            var callId = response.callId,
                params = response.params;
            for (var i = 0, clength = window.callbackFuncs.length; i < clength; i++) {
                if (window.callbackFuncs[i].id == callId) {
                    typeof window.callbackFuncs[i].callback === 'function' && window.callbackFuncs[i].callback(params.response || params, params.errorType, params.canceled, params.extrainfo);
                    callbackCompletedRemove(window.callbackFuncs[i].id);
                    break;
            }
        }
    }
};

/**
 * 客户端主动告诉前端网络状态变化
 */
window.networkStateChanged = function(networkType){

    return JSON.parse(decodeURIComponent(networkType));

}