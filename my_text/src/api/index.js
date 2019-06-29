import page from './api-config/page'
import finance from './api-config/finance'
import config from '@/config'

const commonDomainArray = [page,finance]
let urlObj = {}
for (let item of commonDomainArray) {
  item[Object.keys(item)[0]].domain = config.baseUrl
  // 全部整合到一个空对象里面
  Object.assign(urlObj, item)
}
const apiConfig = Object.assign(urlObj)

export default function getUrl (type, path) {
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
  return (`${apiConfig[type].domain[env]}/${apiConfig[type].path[path]}`)
}
