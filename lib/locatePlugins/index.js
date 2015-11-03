/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 * @description 客户端HTTP组件
 */
'use strict'


import getCachedLocation from './getCachedLocation';
import startLocate from './startLocate';

const LOCATE_PLUGINS = {
	getCachedLocation,
	startLocate
}

export default LOCATE_PLUGINS;
