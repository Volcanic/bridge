/**
 * Created by wq07973 on 2015/7/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'


/**
 * 打开其他项目
 * @params {obejct} {
        "projectType": "1",     {number} ----'1':汽车票 '2':用车 '3':定制巴士 '4':我的
        "pageIndex": "3",       {string} ----项目页面区分索引号
        "pageParams": {         {object} ----打开页面所需参数
            "key1": "value1"    {string} ----键值对
            "key2": "value2"    {string} ----键值对
            "key3": "value3"    {string} ----键值对
        }
    }
 * @return void
 */
export default function openProject (params) {
    var openParams = {
        params:{
            "projectType": params.projectType,
            "pageIndex": params.pageIndex,
            "pageParams": {}
        }
    }
    if(typeof params.pageParams === "object"){
        for(var key in params.pageParams){
            openParams.params.pageParams[key] = params.pageParams[key];
        }
    }
    window.NaviPlugin.openProject(JSON.stringify(openParams));    
}