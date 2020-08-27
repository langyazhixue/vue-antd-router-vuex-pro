import AppLayout from '@/layout/index'
const componentsRouter = {
  path: '/g2',
  component: AppLayout,
  name: 'g2',
  meta: {
    title: 'g2',
    icon: 'iconshiyongwendang'
  },
  redirect: '/g2/interval',
  children: [
    {
      path: '/g2/interval',
      component: () => import('@/views/g2/intervalView'),
      name: 'communicate',
      meta: {
        title: '柱状图',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
}
export default componentsRouter
