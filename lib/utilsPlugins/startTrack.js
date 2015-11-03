/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

/**
 * 添加统计事件
 * @eventId 	{string} ----事件Id
 * @eventParams	{string} ----统计参数		
 * }
 */
export default function startTrack(eventId, eventParams){
    var trackParams = {
        params: {
            eventId: eventId || "",
            params: eventParams || ""
        }
    };
    window.UtilsPlugin.startTrack(JSON.stringify(trackParams));
}


