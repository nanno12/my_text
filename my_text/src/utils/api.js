const http = 'http://172.16.6.152:20060'

// const jinghong = 'http://172.16.75.114:20060'
 
const api = {
  // 用户列表

  user_list: http + 'api/v1/billing_strategy/charging_item/search/by_key_word',

  // queryChargeItemsList: http + 'api/v1/billing_strategy/charging_item/search/by_key_word',
  // 数据列表
  queryChargeItemsList: {url: http + 'api/v1/billing_strategy/charging_item/search/by_key_word', method: 'post'}
}
 
export default api