import AppLayout from '@/views/layout/index'
const componentsRouter = {
  path: '/components',
  component: AppLayout,
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'iconshiyongwendang'
  },
  key:'ComponentDemo',
  children: [
    {
      path: 'upload',
      component: () => import('@/views/components-demo/upload'),
      name: 'Upload',
      key:'Upload',
      meta: { title: '文件上传' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'Sticky',
      key:'Sticky',
      meta: { title: 'sticky' }
    }
  ]
}
export default componentsRouter