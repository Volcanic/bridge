/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

 /**
 * 点亮屏幕
 * @enable {string} 是否开启 1、开启 0、关闭
 * @return void
 */
export default function highlightScreen(enable){
	var params = {
		params: {
			enable: enable || 0
		}
	}
	window.UtilsPlugin.highlightScreen(JSON.stringify(params));
}


