/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

/**
 * 检查用所在模块是否有红包
 * @params {object} projectType {string} '0':不区分 '1':汽车票 '2':用车 '3':定制巴士 
 * @params {object} totalPrice {string} 总价
 * @params {object} unitPrice {string} 单价
 * @return void
 */
export default function checkRedPacket(params, callback){
    var uuid = getUUID();
    var redpacketparams = {
        callId: uuid,
        params: {
            projectType:params.projectType,
            totalPrice:params.totalPrice,
            unitPrice:params.unitPrice
        }
    }
    registerCallback(uuid, callback);
    window.PaymentPlugin.checkRedPacket(JSON.stringify(redpacketparams));
}


