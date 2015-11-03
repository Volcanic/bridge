/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'


import isLogin from './isLogin';
import getClientInfo from './getClientInfo';

const USERINFO_PLUGINS = {
	isLogin,
	getClientInfo
}

export default USERINFO_PLUGINS;
