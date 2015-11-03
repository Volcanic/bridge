/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

/*
 * 请求客户端登陆
 * @callback {function} 客户端登录回调
 */
export default function requestLogin (callback) {
	var uuid = getUUID();
    var params = {
        callId: uuid,
        params: {}
    };
    registerCallback(uuid, callback);
    window.NaviPlugin.requestLogin(JSON.stringify(params));    
}