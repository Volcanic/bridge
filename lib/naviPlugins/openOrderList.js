/**
 * Created by wq07973 on 2015/7/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'


/**
 * 打开订单列表
 * @projectType {number} ----0:全部 1:汽车票 2:用车 3:定制巴士 default:0
 * return void
 */
export default function openOrderList (projectType) {
    var openOrderListParams = {
        params: {
            "projectType": projectType || 0
        }
    }
    window.NaviPlugin.openOrderList(JSON.stringify(openOrderListParams));
}

