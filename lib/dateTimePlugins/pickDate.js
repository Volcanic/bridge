/**
 * Created by wq07973 on 2015/12/14.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

 /**
 * 调用客户端分享组件
 * @params {object} {
 *		"pickedDate": "2012-05-23", //{string} -- 选定的日期
 *		"fromDate": "1970-01-01",	//{string} -- 起始日期
 *		"toDate": "9999-12-31"		//{string} -- 终止日期
 * }
 * @callback {function} //回调函数
 * @return void
 */
export default function pickDate(params,callback){
	var uuid = getUUID();
    var pickDateParams = {
        callId: uuid,
        params: params
    };
    registerCallback(uuid,callback);
    window.DateTimePlugin.pickDate(JSON.stringify(pickDateParams));
}


