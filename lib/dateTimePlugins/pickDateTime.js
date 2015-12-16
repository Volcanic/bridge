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
 *		"pickedDateTime": "2012-05-23 12:45", 	//{string} -- 选定的日期时间
 *		"fromDateTime": "1970-01-01 12:45",		//{string} -- 起始日期时间
 *		"toDateTime": "9999-12-31 12:45"		//{string} -- 结束日期时间
 * }
 * @callback {function} //回调函数
 * @return void
 */
export default function pickDateTime(params,callback){
	var uuid = getUUID();
    var pickDateTimeParams = {
        callId: uuid,
        params: params
    };
    registerCallback(uuid,callback);
    window.DateTimePlugin.pickDateTime(JSON.stringify(pickDateTimeParams));
}


