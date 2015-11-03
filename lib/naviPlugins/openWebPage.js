/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

/**
 * 打开新的webview，新的webview没有plugin
 * @params {object} {
        "webPageUrl": "",  //{string} ----页面地址
        "shareConfig"{
            "title": "",       //{string} ----分享标题
            "imagePath": "",   //{string} ----分享图片地址
            "shareUrl": "",    //{string} ----分享地址
            "eventId":"",      //{string} ----统计事件ID
            "eventParams":""   //{string} ----统计事件参数
        }
    }
 * @return void
 */
export default function openWebPage(params){
    var newparams = {
        params: {
            "webPageUrl": params.webPageUrl,
            "shareConfig": {}         
        }
    }
    if(params.shareConfig){
        var shareConfig = params.shareConfig;
        newparams.params.shareConfig= {
            "title": shareConfig.title,
            "imagePath": shareConfig.imagePath || " ",
            "shareUrl": shareConfig.shareUrl || " ",
            "eventId":shareConfig.eventId || "",
            "eventParams":shareConfig.eventParams || ""
        } 
    }


    window.NaviPlugin.openWebPage(JSON.stringify(newparams));
}