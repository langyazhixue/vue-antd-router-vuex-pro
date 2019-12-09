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
      path: '/study/communicate',
      component: () => import('@/views/study/communicate/index'),
      name: 'communicate',
      meta: { title: 'vue组件之间通信', icon: 'iconshiyongwendang' }
    },
    {
      path: '/study/kform',
      component: () => import('@/views/study/kform/index'),
      name: 'kform',
      meta: { title: '自己实现一个表单组件', icon: 'iconshiyongwendang' }
    },
    {
      path: '/study/functional',
      component: () => import('@/views/study/functional/index'),
      name: 'functional',
      meta: { title: 'vue函数式组件', icon: 'iconshiyongwendang' }
    },
    {
      path: '/study/render',
      component: () => import('@/views/study/render/index'),
      name: 'render',
      meta: { title: 'vue之render', icon: 'iconshiyongwendang' }
    },
    {
      path: '/study/transition',
      component: () => import('@/views/study/transition/index'),
      name: 'transition',
      meta: { title: 'vue之transition', icon: 'iconshiyongwendang' }
    },
    {
      path: '/study/tree',
      component: () => import('@/views/study/tree/index'),
      name: 'tree',
      meta: { title: '实现一个树形组件', icon: 'iconshiyongwendang' }
    }
  ]
}
export default componentsRouter