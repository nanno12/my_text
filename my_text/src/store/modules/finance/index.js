import getUrl from '@/api'
import { post } from '@/service/request'

const actions = {
  async getFinanceList (commit, params) { // 获取临床服务与计费策略对应关系列表
    const url = getUrl('finance', 'financenuo')
    return post(url, params)
  },
  async getAdd (commit, params) { // 新增临床服务与计费策略对应关系
    const url = getUrl('finance', 'add')
    return post(url, params)
  },
  async getDelete (commit, params) { // 删除临床服务与计费策略对应关系
    const url = getUrl('finance', 'delete')
    return post(url, params)
  },
  async getByCsId (commit, params) { // 获取某个临床服务的计费策略对应关系
    const url = getUrl('finance', 'getbyCsId')
    return post(url, params)
  },

  // (三)本服务计费
  async getServeAdd (commit, params) { // 本服务计费策略-新增某个医疗机构的临床服务与收费项目的关联关系
    const url = getUrl('finance', 'serveAdd')
    return post(url, params)
  },
  async getServeDisable (commit, params) { // 本服务计费策略-停用临床服务与收费项目的关联关系
    const url = getUrl('finance', 'serveDisable')
    return post(url, params)
  },
  async getServeEnable (commit, params) { // 本服务计费策略-启用临床服务与收费项目的关联关系
    const url = getUrl('finance', 'serveEnable')
    return post(url, params)
  },
  async getServeDeed (commit, params) { // 本服务计费策略-查询单条临床服务与收费项目的关联关系
    const url = getUrl('finance', 'serveDeed')
    return post(url, params)
  },
  async getServeName (commit, params) { // 本服务计费策略-获取临床服务列表检索
    const url = getUrl('finance', 'serveName')
    return post(url, params)
  },
  async getServeAll (commit, params) { // 本服务计费策略-查询临床服务与收费项目的关联关系列表
    const url = getUrl('finance', 'serveAll')
    return post(url, params)
  },

  // 医疗保险
  async getInsuranceAdd (commit, params) { // 新增医院的医疗保险
    const url = getUrl('finance', 'insuranceAdd')
    return post(url, params)
  },
  async getInsuranceDisable (commit, params) { // 停用医院的医疗保险
    const url = getUrl('finance', 'insuranceDisable')
    return post(url, params)
  },
  async getInsuranceEnable (commit, params) { // 启用医院的医疗保险
    const url = getUrl('finance', 'insuranceEnable')
    return post(url, params)
  },
  async getInsuranceByCsId (commit, params) { // 查询医院单条医疗保险
    const url = getUrl('finance', 'insuranceByCsId')
    return post(url, params)
  },
  async getInsuranceQueryAll (commit, params) { // 查询医院的医疗保险列表
    const url = getUrl('finance', 'insuranceQueryAll')
    return post(url, params)
  },
  async getInsuranceUpdate (commit, params) { // 修改医院的医疗保险
    const url = getUrl('finance', 'insuranceUpdate')
    return post(url, params)
  },
  async getMedicalInsuranceAll (commit, params) { // 获取医疗保险术语列表
    const url = getUrl('finance', 'medicalInsuranceAll')
    return post(url, params)
  },
  // 检查项目个数区间-不累计计费
  async getExamineNoAdd (commit, params) { // 新增检查项目个数区间-不累计计费关联关系
    const url = getUrl('finance', 'examineNoAdd')
    return post(url, params)
  },
  async getExamineNoAddDisable (commit, params) { // 停用检查项目个数区间-不累计计费关联关系
    const url = getUrl('finance', 'examineNoAddDisable')
    return post(url, params)
  },
  async getExamineNoAddEnable (commit, params) { // 启用检查项目个数区间-不累计计费关联关系
    const url = getUrl('finance', 'examineNoAddEnable')
    return post(url, params)
  },
  async getExamineNoAddQuery (commit, params) { // 查询检查项目个数区间-不累计计费关系列表
    const url = getUrl('finance', 'examineNoAddQuery')
    return post(url, params)
  },
  async getExamineNoAddByCsId (commit, params) { // 获取某个检查项目个数区间-不累计计费关联关系
    const url = getUrl('finance', 'examineNoAddByCsId')
    return post(url, params)
  },
  // 检查项目个数区间-个数加收
  async getExamineNumberAdd (commit, params) { // 新增检查区间个数加收计费策略对应关系
    const url = getUrl('finance', 'examineNumberAdd')
    return post(url, params)
  },
  async getExamineNumberDisable (commit, params) { // 停用检查区间个数加收计费策略对应关系
    const url = getUrl('finance', 'examineNumberDisable')
    return post(url, params)
  },
  async getExamineNumberEnable (commit, params) { // 启用检查区间个数加收计费策略对应关系
    const url = getUrl('finance', 'examineNumberEnable')
    return post(url, params)
  },
  async getExamineNumberAll (commit, params) { // 获取检查区间个数加收计费策略对应关系列表
    const url = getUrl('finance', 'examineNumberAll')
    return post(url, params)
  },
  async getExamineNumberByCsId (commit, params) { // 获取某个检检查区间个数加收计费策略对应关系
    const url = getUrl('finance', 'examineNumberByCsId')
    return post(url, params)
  },
  // 检验指标个数区间加收计费
  async getLabtestNumberAll (commit, params) { // 查询临床服务与收费项目关联关系列表
    const url = getUrl('finance', 'labtestNumberAll')
    return post(url, params)
  },
  async getLabtestNumberByCsId (commit, params) { // //查询单条临检验指标个数区间加收计费关系
    const url = getUrl('finance', 'labtestNumberByCsId')
    return post(url, params)
  },
  async getLabtestNumberAdd (commit, params) { // //新增检验指标个数区间加收计费关系
    const url = getUrl('finance', 'labtestNumberAdd')
    return post(url, params)
  },
  async getLabtestNumberDisable (commit, params) { // //停用检验指标个数区间加收计费关系
    const url = getUrl('finance', 'labtestNumberDisable')
    return post(url, params)
  },
  async getLabtestNumberEnable (commit, params) { // //启用检验指标个数区间加收计费关系
    const url = getUrl('finance', 'labtestNumberEnable')
    return post(url, params)
  },
  // 圆，计费策略
  async queryBillingStrategyList (commit, params) { // 查询计费策略列表
    const url = getUrl('finance', 'queryBillingStrategyList')
    return post(url, params)
  },
  async queryBillingStrategy (commit, params) { // 查询单条计费策略
    const url = getUrl('finance', 'queryBillingStrategy')
    return post(url, params)
  },
  async queryBillingStrategyTermList (commit, params) { // 据术语值域标识获取术语列表
    const url = getUrl('finance', 'queryBillingStrategyTermList')
    return post(url, params)
  },
  async updateBillingStrategy (commit, params) { // 修改单条医疗机构的计费策略类信息
    const url = getUrl('finance', 'updateBillingStrategy')
    return post(url, params)
  },
  async stopBillingStrategy (commit, params) { // 停用计费策略
    const url = getUrl('finance', 'stopBillingStrategy')
    return post(url, params)
  },
  async startBillingStrategy (commit, params) { // 停用计费策略
    const url = getUrl('finance', 'startBillingStrategy')
    return post(url, params)
  },
  // 组合计费策略
  async queryGroupBillingStrategyList (commit, params) { // 查询临床服务与收费项目关联关系列表
    const url = getUrl('finance', 'queryGroupBillingStrategyList')
    return post(url, params)
  },
  async queryGroupBillingStrategy (commit, params) { // 查询单条临床服务与收费项目关联关系
    const url = getUrl('finance', 'queryGroupBillingStrategy')
    return post(url, params)
  },
  async addGroupBillingStrategy (commit, params) { // 添加临床服务与收费项目关联关系
    const url = getUrl('finance', 'addGroupBillingStrategy')
    return post(url, params)
  },
  async disableGroupBillingStrategy (commit, params) { // 停用临床服务与收费项目关联关系
    const url = getUrl('finance', 'disableGroupBillingStrategy')
    return post(url, params)
  },
  async enableGroupBillingStrategy (commit, params) { // 启用临床服务与收费项目关联关系
    const url = getUrl('finance', 'enableGroupBillingStrategy')
    return post(url, params)
  },
  // 公共
  async queryChargeItemsList (commit, params) { // 查询临床服务与收费项目的关联关系列表
    const url = getUrl('finance', 'queryChargeItemsList')
    return post(url, params)
  },
  async queryHospitalList (commit, params) { // 查询临床服务与收费项目的关联关系列表
    const url = getUrl('finance', 'queryHospitalList')
    return post(url, params)
  },
  async queryServeTime (commit, params) { // 获取服务器当前时间
    const url = getUrl('finance', 'queryServeTime')
    return post(url, params)
  },

  // 圆，检验按指标明细合计
  async queryInspectionItemList (commit, params) { // 查询检验指标与收费项目列表
    const url = getUrl('finance', 'queryInspectionItemList')
    return post(url, params)
  },
  async queryInspectionItem (commit, params) { // 查询单条检验指标与收费项目
    const url = getUrl('finance', 'queryInspectionItem')
    return post(url, params)
  },
  async addInspectionItem (commit, params) { // 新增检验指标与收费项目
    const url = getUrl('finance', 'addInspectionItem')
    return post(url, params)
  },
  async disableInspectionItem (commit, params) { // 停用检验指标与收费项目
    const url = getUrl('finance', 'disableInspectionItem')
    return post(url, params)
  },
  async enableInspectionItem (commit, params) { // 停用检验指标与收费项目
    const url = getUrl('finance', 'enableInspectionItem')
    return post(url, params)
  },
  // 圆，检验服务按指标个数区间-不累计计费策略
  async queryLabTestNoAddList (commit, params) { // 查询临床服务与收费项目列表
    const url = getUrl('finance', 'queryLabTestNoAddList')
    return post(url, params)
  },
  async addLabTestNoAdd (commit, params) { // 新增临床服务与计费策略对应关系列表
    const url = getUrl('finance', 'addLabTestNoAdd')
    return post(url, params)
  },
  async disableLabTestNoAdd (commit, params) { // 启用临床服务与计费策略对应关系列表
    const url = getUrl('finance', 'disableLabTestNoAdd')
    return post(url, params)
  },
  async enableLabTestNoAdd (commit, params) { // 停用临床服务与计费策略对应关系列表
    const url = getUrl('finance', 'enableLabTestNoAdd')
    return post(url, params)
  },
  async queryLabTestNoAdd (commit, params) { // 查询单个临床服务与收费项目
    const url = getUrl('finance', 'queryLabTestNoAdd')
    return post(url, params)
  },
  // 圆，检验服务按指标个数区间-累计计费策略
  async queryLabTestAddList (commit, params) { // 查询列表
    const url = getUrl('finance', 'queryLabTestAddList')
    return post(url, params)
  },
  async addLabTestAdd (commit, params) { // 新增
    const url = getUrl('finance', 'addLabTestAdd')
    return post(url, params)
  },
  async disableLabTestAdd (commit, params) { // 启用
    const url = getUrl('finance', 'disableLabTestAdd')
    return post(url, params)
  },
  async enableLabTestAdd (commit, params) { // 停用
    const url = getUrl('finance', 'enableLabTestAdd')
    return post(url, params)
  },
  async queryLabTestAdd (commit, params) { // 查询单个
    const url = getUrl('finance', 'queryLabTestAdd')
    return post(url, params)
  },
  // 圆，检查项目个数区间-累计
  async queryExamineAddList (commit, params) { // 查询列表
    const url = getUrl('finance', 'queryExamineAddList')
    return post(url, params)
  },
  async addExamineAdd (commit, params) { // 新增
    const url = getUrl('finance', 'addExamineAdd')
    return post(url, params)
  },
  async disableExamineAdd (commit, params) { // 启用
    const url = getUrl('finance', 'disableExamineAdd')
    return post(url, params)
  },
  async enableExamineAdd (commit, params) { // 停用
    const url = getUrl('finance', 'enableExamineAdd')
    return post(url, params)
  },
  async queryExamineAdd (commit, params) { // 查询单个
    const url = getUrl('finance', 'queryExamineAdd')
    return post(url, params)
  }
}

export default {
  namespaced: true,
  actions
}
