/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

/**
 * 价格变动重置红包
 * @params {object} totalPrice {string} 总价
 * @return void
 */
export default function resetTotalPrice(params, callback){
    var uuid = getUUID();
    var redpacketparams = {
        callId: uuid,
        params: {
            totalPrice:params.totalPrice
        }
    }
    registerCallback(uuid, callback);
    window.PaymentPlugin.resetTotalPrice(JSON.stringify(redpacketparams)); 
}


