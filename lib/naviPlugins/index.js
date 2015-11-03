/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'


import closePage from './closePage';
import setNaviTitle from './setNaviTitle';
import requestLogin from './requestLogin';
import openWebPage from './openWebPage';
import openProject from './openProject';
import openOrderList from './openOrderList';

const NAVI_PLUGINS = {
	closePage,
	setNaviTitle,
	requestLogin,
	openWebPage,
	openProject,
	openOrderList
}

export default NAVI_PLUGINS;
