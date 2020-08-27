import AppLayout from '@/layout/index'
const componentsRouter = {
  path: '/f2',
  component: AppLayout,
  name: 'f2',
  meta: {
    title: 'f2',
    icon: 'iconshiyongwendang'
  },
  redirect: '/f2/line',
  children: [
    {
      path: 'line',
      name: 'g2-line',
      component: () => import('@/views/f2/line/index.vue'),
      meta: {
        title: '折线图',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: 'aera',
      name: 'g2-aera',
      component: () => import('@/views/f2/area/index.vue'),
      meta: {
        title: '面积图',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
}
export default componentsRouter
