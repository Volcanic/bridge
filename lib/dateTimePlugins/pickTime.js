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
 *		"pickedTime": "12:45", //{string} -- 选定的时间
 *		"fromTime": "24:00",	//{string} -- 起始时间
 *		"toTime": "06:00"		//{string} -- 结束时间
 * }
 * @callback {function} //回调函数
 * @return void
 */
export default function pickTime(params,callback){
	var uuid = getUUID();
    var pickTimeParams = {
        "callId": uuid,
        "params": params
    };
    registerCallback(uuid,callback);
    window.DateTimePlugin.pickTime(JSON.stringify(pickTimeParams));
}


