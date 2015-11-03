/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

 /**
 * 调用客户端分享组件
 * @params {object} @title {string} 分享标题
 * @params {object} @imagePath {string} 分享图片地址
 * @params {object} @shareUrl {string} 分享链接
 * @return void
 */
export default function startShare(params){
	params = params || {};
	var shareParams={
		params: {
			title: params.title || " ",
			imagePath: params.imagePath || " ",
			shareUrl: params.shareUrl || " "
		}
		
	}
	window.UtilsPlugin.startShare(JSON.stringify(shareParams));
}


