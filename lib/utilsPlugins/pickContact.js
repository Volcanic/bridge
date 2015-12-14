/**
 * Created by wq07973 on 2015/12/14.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

 /**
 * 调用客户端分享组件
 * @callback {function} //回调函数
 * @return void
 */
export default function pickContact(callback){
	var uuid = getUUID();
    var pickContactParams = {
        callId: uuid,
        params: {}
    };
    registerCallback(uuid,callback);
    window.UtilsPlugin.pickContact(JSON.stringify(pickContactParams));
}


