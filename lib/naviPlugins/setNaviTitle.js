/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'



/*
 * 设置页面标题，包含返回键事件，菜单配置
 * @params {object} {
        "params": {
            "title": "",    //{string} ----导航标题
            "showTab": 1/0,   //{number} ----是否显示底部Tab 1显示、0不显示 default 0     
            "refreshable": 1/0,    //{number} ----是否刷新页面 1刷新、0不刷新 default 0
            "rightMenuConfig": {     //{object} ----导航右侧导航参数配置
                "type": "menuConfig/shareConfig/customerServiceConfig",     //{string} ----菜单类型 3选一
                "eventId": "",      //{string} ----导航右侧菜单点击事件id                        
                "eventParams": "",  //{string} ----导航右侧菜单点击事件参数                                                 
                "menuConfig": {     //{object} ----自定义右侧导航菜单配置               ########################################## 
                    "text": "",     //{string} ----菜单文本                             ##########################################
                    "icon": "",     //{string} ----菜单icon                             ##########################################
                    "callback": "js function"   //{string} ----右菜单点击js回调函数名   ##########################################
                },                                                                      ##########################################
                "shareConfig": {        //{object} ----分享菜单                         ##########################################
                    "title": "",        //{string} ----分享出去的题目                   ############只需要配置一个config##########
                    "imagePath": "",    //{string} ----分享图片地址                     ##########################################
                    "shareUrl": ""      //{string} ----分享链接                         ##########################################
                },                                                                      ##########################################
                "customerServiceConfig": {      //{object} ----在线客服菜单             ##########################################
                    "webPageUrl": ""            //{string} ----web url                  ##########################################
                }                                                           
            }
        }
    }
 */
export default function setNaviTitle (params) {
    var navbarParams = {
        params: {
            "backKeyCallback": params.backKeyCallback ||  "window.onBackKeyDown()",
            "title": params.title,
            "showTab": params.showTab || 0,
            "refreshable" : params.refreshable || 0
        }
    };

    //是否有配置菜单
    if(params.rightMenuConfig){
        var rightMenu = params.rightMenuConfig,
            menuType = rightMenu.type;
        navbarParams.params[menuType] = {};
        switch(menuType){
            case "menuConfig":
                var menuConfig = rightMenu.menuConfig;
                navbarParams.params.menuConfig={
                    "text": menuConfig.text || " ",
                    "icon": menuConfig.icon || " ",
                    "callback": menuConfig.callback || "javascript:void(0)"
                };
                break;
            case "shareConfig":
                var shareConfig = rightMenu.shareConfig; 
                navbarParams.params.shareConfig = {
                    "title": shareConfig.title || " ",
                    "imagePath": shareConfig.imagePath || " ",
                    "shareUrl": shareConfig.shareUrl || " "
                };
                break;
            case "customerServiceConfig":
                var customerServiceConfig = rightMenu.customerServiceConfig;
                navbarParams.params.customerServiceConfig = {
                    "webPageUrl": customerServiceConfig.webPageUrl || " "
                };
                break;
        }
        navbarParams.params[menuType]["eventId"] = rightMenu.eventId || "";
        navbarParams.params[menuType]["eventParams"] = rightMenu.eventParams || "";
    }
    window.NaviPlugin.setNaviTitle(JSON.stringify(navbarParams));  
}