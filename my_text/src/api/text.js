
import req from './http.js'
export const ARTICLE = params =>req('post','api/v2/billing_strategy/cs_x_billing_strategy/query/by_example',params)
//这里使用了箭头函数，转换一下写法：
//export const ARTICLE=function(req){
//    return req('post','/api/blog/article',params)
//}
// api/v1/billing_strategy/charging_item/search/by_key_word

// export const COMMENT = params =>req('post','/api/v1/billing_strategy/charging_item/search/by_key_word',params)
export const COMMENT = params =>req('post','api/v1/billing_strategy/cs_x_billing_strategy/query/by_hospital_soids',params)
