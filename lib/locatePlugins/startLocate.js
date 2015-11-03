/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import {getUUID, registerCallback} from '../../utils'


/*
 * 请求定位
 * @params {object} @cache {string} '1':使用缓存定位信息 '0':重新定位
 * @callback {function} 定位成功/失败回调
 * @return void
 */	
export default function startLocate (params, callback) {
    var uuid = getUUID();
    params = params || {};
    var locateParams = {
        callId: uuid,
        params: {
            useCache: params.cache || '0'
        }
    };
    registerCallback(uuid, callback);
    window.LocatePlugin.startLocate(JSON.stringify(locateParams));	
}