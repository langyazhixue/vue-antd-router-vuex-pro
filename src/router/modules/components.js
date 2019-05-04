import AppLayout from '@/layout/index'
const componentsRouter = {
  path: '/components',
  component: AppLayout,
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'iconshiyongwendang'
  },
  children: [
    {
      path: 'upload',
      component: () => import('@/views/components-demo/upload'),
      name: 'Upload',
      meta: { title: 'upload' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'Sticky',
      meta: { title: 'sticky' }
    }
  ]
}
export default componentsRouter
