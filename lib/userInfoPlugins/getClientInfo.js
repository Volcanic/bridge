/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

/**
 * 获取客户端信息
 * @return {object} {
 *   "params": { 	{object}
 *       "clientInfo": {	{object}
 *           "osType": "android/ios", 	{string} ----操作系统类型
 *           "deviceId": "f3434234242",	{string} ----设备Id
 *           "networkType": "unreachable/wifi/4G/3G/2G/unknown",	{string} ----网路类型
 *           "appVersion": "1.0.1", 	{string} ---- 客户度版本号
 *           "refId": "434222", 	{string} ----渠道号
 *           "memberId": "434234234242"		{string} ----会员Id
 *        }
 *    }
 * }
*/
export default function getClientInfo(){
    var clientInfo = window.UserInfoPlugin.getClientInfo();
    return JSON.parse(clientInfo).params;
}


