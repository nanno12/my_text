
import req from './http.js'
export const ARTICLE = params =>req('post','/api/v1/billing_strategy/timer/get',params)
//这里使用了箭头函数，转换一下写法：
//export const ARTICLE=function(req){
//    return req('post','/api/blog/article',params)
//}

export const COMMENT = params =>req('post','/api/v1/billing_strategy/charging_item/search/by_key_word',params)
