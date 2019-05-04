/** When your routing table is too long, you can split it into small modules**/

import AppLayout from '@/layout/index'

const nestedRouter = {
  path: '/nested',
  component: AppLayout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: 'nested',
    icon: 'iconshiyongwendang'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'menu1', icon: 'iconshiyongwendang' }
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: 'menu2', icon: 'iconshiyongwendang' }
    }
  ]
}

export default nestedRouter
