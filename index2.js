/**
 * Created by wq07973 on 2015/10/29.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict';



import HTTP_PLUGINS  from './lib/httpPlugins';


import NAVI_PLUGINS from './lib/naviPlugins';


import USERINFO_PLUGINS from './lib/userInfoPlugins';


import UTILS_PLUGINS from './lib/utilsPlugins';


import LOCATE_PLUGINS from './lib/locatePlugins';


import PAYMENT_PLUGINS from './lib/paymentPlugins';


window.bridge = {
	HTTP_PLUGINS,
	NAVI_PLUGINS,
	USERINFO_PLUGINS,
	UTILS_PLUGINS,
	LOCATE_PLUGINS,
	PAYMENT_PLUGINS
}