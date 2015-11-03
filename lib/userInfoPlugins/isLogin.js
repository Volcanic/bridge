/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

/**
 * 判断用户是否登录
 * @return {object} {
 *   "params": {		{object}
 *       " isLogin": "1/0"		{number} ---- 1、已经登录 0、未登录    
 *    }
 * } 
 */
export default function isLogin(){
    var isLogin = window.UserInfoPlugin.isLogin();
    return JSON.parse(isLogin).params.isLogin;
}


