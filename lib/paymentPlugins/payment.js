/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

import { getUUID, registerCallback } from '../../utils'

/**
 * 调用客户端收银台
 * @params {object} projectType {string} 项目类型 '0':不区分 '1':汽车票 '2':用车 '3':定制巴士 
 * @params {object} totalPrice {string}
 * @params {object} serverDt {string} 当前服务器时间
 * @params {object} expiryDt {string} 订单过期时间
 * @params {object} orderId {string} 订单ID
 * @params {object} orderSerialId {string} 订单流水号
 * @params {object} orderInfos {string} 支付显示信息
 * @params {object} backToOrderList {string} 0、关闭收银台 1、跳转到对应项目的订单列表 default 0
 * @params {object} eventId {string}
 * @params {object} unitPrice {string}
 * @callback {function} 支付成功/失败回调
 * @return void
 */
export default function payment(params, callback){
	var uuid = getUUID();
	var paymentParams = {
	    callId: uuid,
	    params: {
	        projectType: params.projectType,
	        totalPrice: params.totalPrice,
	        serverDt: params.serverDt,
	        expiryDt: params.expiryDt,
	        orderId: params.orderId,
	        orderSerialId: params.orderSerialId,
	        orderInfos: params.orderInfos,
	        backToOrderList: params.backToOrderList || 0,
	        eventId: params.eventId,
	        unitPrice:params.unitPrice
	    }
	};
	registerCallback(uuid, callback);
	window.PaymentPlugin.payment(JSON.stringify(paymentParams));
}


