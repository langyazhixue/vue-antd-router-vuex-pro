import AppLayout from '@/layout/index'
const componentsRouter = {
  path: '/excel',
  component: AppLayout,
  name: 'excel',
  meta: {
    title: 'excel',
    icon: 'iconshiyongwendang'
  },
  redirect: '/excel/demo1',
  children: [
    {
      path: '/excel/demo1',
      component: () => import('@/views/excel/demo1'),
      name: 'excel-demo1',
      meta: {
        title: 'demo1',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
}
export default componentsRouter
