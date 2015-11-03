/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

 /**
 * 打开红包列表并选择红包
 * @params {object} couponCode {string} 红包ID
 * @params {object} batchType {string} 红包批次类型
 * @params {object} batchTypeName {string} 红包批次名称
 * @params {object} projectType {string} 红包最小消费价格
 * @params {object} projectTypeName {string} ================待完善==================
 * @params {object} minOrderAmount {string} 红包最小消费价格
 * @params {object} couponAmount {string} 红包面值
 * @params {object} overdueDate {string} 红包过期时间
 * @params {object} startDate {string} 红包发放时间
 * @params {object} isActive {string} 是否有效
 * @params {object} isConfirmRule {string} 是否满足规则
 * @params {object} ruleNo {string}  规则类型 0：总价约束 1：单价约束
 * return void
 */
export default function chooseRedPacket(params, callback){
    params = params || {};
    var uuid = getUUID();
    var redpacketparams = {
        callId: uuid,
        params: {
            "chosenRedPacket": {
                "couponCode": params.couponCode || "",
                "batchType": params.batchType || "",
                "batchTypeName": params.batchTypeName || "",
                "projectType": params.projectType || "",
                "projectTypeName": params.projectTypeName || "",
                "minOrderAmount": params.minOrderAmount || "",
                "couponAmount": params.couponAmount || "",
                "overdueDate": params.overdueDate || "",
                "startDate": params.startDate || "",
                "isActive": params.isActive || "",
                "isConfirmRule ": params.isConfirmRule || "",
                "ruleNo": params.ruleNo || ""
            }
        }
    }
    if(!params.couponAmount && !params.couponCode){
        redpacketparams.params = {};
    }
    registerCallback(uuid, callback);
    window.PaymentPlugin.chooseRedPacket(JSON.stringify(redpacketparams));   
}


