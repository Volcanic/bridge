/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

/*
* 调用客户端HTTP请求
* @params {object} {
*    "serviceURL": "",   {string} ----接口请求路径
*    "serviceName": "",  {string} ----接口服务名称
*    "withLoadingDialog": 0/1, {number} ----是否显示loading框 1显示、0不显示 defulat 0
*    "cancelable": 0/1,    {number} ----loading是否可关闭 1显示、0不显示 default 0
*    "loadingTitle": "奋力加载中",    {string} ----加载框文案
*    "bodyParams": {      {object}----请求参数
*        "key1": "value1",   
*        "key2": "value2",  
*        "key3": "value3"
*    }
* }
* @uuid {string} 回调标识id
* @return 
*/
export default function startRequest (params,callback) {
    var uuid = getUUID();
    var requestParams = {
        "callId": uuid,
        "params": {
            "serviceURL": params.serviceURL,
            "serviceName": params.serviceName,
            "withLoadingDialog": params.withLoadingDialog || 0,
            "cancelable": params.cancelable || 0,
            "loadingTitle": params.loadingTitle || "奋力加载中",
            "bodyParams": params.bodyParams
        }
    };
    registerCallback(uuid,callback);
    window.HttpPlugin.startRequest(JSON.stringify(requestParams));
}