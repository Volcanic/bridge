/**
 * Created by wq07973 on 2015/12/14.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 * @description 客户端时间日期组件
 */
'use strict'


import pickDate from './pickDate';
import pickTime from './pickTime';
import pickDateTime from './pickDateTime';



const DATETIME_PLUGINS = {
	pickDate,
	pickTime,
	pickDateTime
}

export default DATETIME_PLUGINS;




