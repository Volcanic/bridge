/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'


import payment from './payment';
import checkRedPacket from './checkRedPacket';
import chooseRedPacket from './chooseRedPacket';
import resetTotalPrice from './resetTotalPrice';

const PAYMENT_PLUGINS = {
	payment,
	checkRedPacket,
	chooseRedPacket,
	resetTotalPrice
}

export default PAYMENT_PLUGINS;
