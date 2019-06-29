
export default {
  'finance': {
    path: {
      // (二)临床服务与计费策略对应关系
      financenuo: API_PREFIX + 'cs_x_billing_strategy/query/by_hospital_soids', // 获取临床服务与计费策略对应关系列表
      add: API_PREFIX + 'cs_x_billing_strategy/add', // 新增临床服务与计费策略对应关系
      getbyCsId: API_PREFIX + 'cs_x_billing_strategy/get/by_cs_id', // 获取某个临床服务的计费策略对应关系
      delete: API_PREFIX + 'cs_x_billing_strategy/delete/by_cs_x_billing_strategy_id', // 删除临床服务与计费策略对应关系
      
      // 本服务计费服务
      serveAll: 'api/v1/billing_strategy/billing_strategy_clinical_bs_self/query/all', // 本服务计费策略-查询临床服务与收费项目的关联关系列表
      serveAdd: 'api/v1/billing_strategy/billing_strategy_clinical_bs_self/add', // 本服务计费策略-新增某个医疗机构的临床服务与收费项目的关联关系
      serveDisable: 'api/v1/billing_strategy/billing_strategy_clinical_bs_self/disable/by_bs_self_id', // 本服务计费策略-停用临床服务与收费项目的关联关系
      serveEnable: 'api/v1/billing_strategy/billing_strategy_clinical_bs_self/enable/by_bs_self_id', // 本服务计费策略-启用临床服务与收费项目的关联关系
      serveDeed: 'api/v1/billing_strategy/billing_strategy_clinical_bs_self/query/by_cs_id', // 本服务计费策略-查询单条临床服务与收费项目的关联关系
      serveName: 'api/v1/billing_strategy/clinical_service/query/by_soid', // 获取临床服务列表检索
      // 检查项目个数区间-不累计计费
      examineNoAdd: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_none_sum/add', // 检查项目个数区间不累计计费-新增临床服务与计费设置关联关系
      examineNoAddDisable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_none_sum/disable/by_bs_exam_item_range_none_sum_id', // 检查项目个数区间不累计计费-停用临床服务与计费设置关联关系
      examineNoAddEnable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_none_sum/enable/by_bs_exam_item_range_none_sum_id', // 检查项目个数区间不累计计费-启用临床服务与计费设置关联关系
      examineNoAddQuery: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_none_sum/query/all', // 检查项目个数区间不累计计费-查询临床服务与计费设置关联关系列表
      examineNoAddByCsId: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_none_sum/query/by_cs_id', // 检查项目个数区间不累计计费-获取某个临床服务与计费设置关联关系
      // 检查项目个数区间加收计费
      examineNumberAdd: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_extra_fee/add', // 新增检查区间个数加收计费策略对应关系
      examineNumberDisable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_extra_fee/disable/by_bs_exam_item_rng_extra_fee_id', // 停用检查区间个数加收计费策略对应关系
      examineNumberEnable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_extra_fee/enable/by_bs_exam_item_rng_extra_fee_id', // 启用检查区间个数加收计费策略对应关系
      examineNumberAll: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_extra_fee/query/all', // 获取检查区间个数加收计费策略对应关系列表
      examineNumberByCsId: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_exam_item_range_extra_fee/query/by_cs_id', // 获取某个检检查区间个数加收计费策略对应关系
      
      labtestNumberAll: '/api/v1/billing_strategy/billing_strategy_charging_item_bs_labtest_idx_range_ex_fee/query/all', // 查询检验指标个数区间加收计费列表
      labtestNumberByCsId: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_labtest_idx_range_ex_fee/query/by_cs_id', // 查询单检验指标个数区间加收计费关系
      labtestNumberAdd: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_test_index_range_extra_fee/add', // 新增检验指标个数区间加收计费关系
      labtestNumberDisable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_test_index_range_extra_fee/disable/by_bs_test_index_range_extra_fee_id', // 停用检验指标个数区间加收计费关系
      labtestNumberEnable: 'api/v1/billing_strategy/billing_strategy_charging_item_bs_test_index_range_extra_fee/enable/by_bs_test_index_range_extra_fee_id', // 启用检验指标个数区间加收计费关系
      // 医疗保险
      insuranceAdd: 'api/v1/med_insti_medical_insurance/add', // 新增医院的医疗保险
      insuranceDisable: '/api/v1/med_insti_medical_insurance/disable/by_med_insti_insur_id', // 停用医院的医疗保险
      insuranceEnable: 'api/v1/med_insti_medical_insurance/enable/by_med_insti_insur_id', // 启用医院的医疗保险
      insuranceByCsId: '/api/v1/med_insti_medical_insurance/get/by_ med_insti_insur_id', // 查询医院单条医疗保险
      insuranceQueryAll: 'api/v1/med_insti_medical_insurance/query/all', // 查询医院的医疗保险列表
      insuranceUpdate: 'api/v1/med_insti_medical_insurance/update/by_med_insti_insur_id', // 修改医院的医疗保险
      medicalInsuranceAll: '/api/v1/medical_insurance/query/all', // 获取医疗保险术语列表

      // (三)公共
      queryChargeItemsList: 'api/v1/billing_strategy/charging_item/search/by_key_word', // 收费项目的关联关系列表
      queryHospitalList: 'api/v1/billing_strategy/hospital/query/by_employee_id', // 根据员工标识查询组织跟医院的信息
      queryServeTime: 'api/v1/billing_strategy/timer/get', // 获取当前时间
    }

  }
}
