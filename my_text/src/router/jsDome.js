const routes = [
  {
    path: '/deReordering',
    name: 'DeReordering',
    component: () => import(/* webpackChunkName: "DeReordering" */ '../views/jsDome/DeReordering.vue'),
    meta: { title: '数组去重排序', requireAuth: true },
    children: []
  },
]
export default routes