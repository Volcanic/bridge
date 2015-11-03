/**
 * Created by wq07973 on 2015/10/28.
 * @author 王乾
 * @e-mail wq07973@ly.com 
 */
'use strict'

/*
 * 获取客户端已经定位好的信息
 * @return {
 *    "params": {	{object}
 *        "locationInfo": {		{object} ----定位信息
 *            "latitude": "4343242",	{string} ----经度
 *            "longitude": "434234242",	{string} ----纬度
 *            "city": "苏州",	{string} ----城市名
 *            "district": "工业园区",	{string} ----区/县
 *            "province": "江苏省",	{string} ----省份
 *            "street": "星湖街",	{string} ----街道
 *            "address": "江苏省苏州市工业园区星湖街328号"	{string} ----详细地址
 *        }
 *    }
 * }
 */
export default function getCachedLocation () {
	var cacheLocation = window.LocatePlugin.getCachedLocation();
    return JSON.parse(cacheLocation);
}