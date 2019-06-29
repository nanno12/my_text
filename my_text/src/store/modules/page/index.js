import getUrl from '@/api'
import { post } from '@/service/request'

const actions = {
  // async queryChargeItemsList (commit, params) { // 获取临床服务与计费策略对应关系列表
  //   const url = getUrl('page', 'queryChargeItemsList')
  //   return post(url, params)
  // }, // 公共
  async queryChargeItemsList (commit, params) { // 查询临床服务与收费项目的关联关系列表
    const url = getUrl('finance', 'queryChargeItemsList')
    return post(url, params)
  },
}

export default {
  namespaced: true,
  actions
}