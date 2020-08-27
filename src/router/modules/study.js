import AppLayout from '@/layout/index'
const componentsRouter = {
  path: '/study',
  component: AppLayout,
  name: 'study',
  meta: {
    title: '学习',
    icon: 'iconshiyongwendang'
  },
  redirect: '/study/communicate',
  children: [
    {
      path: '/study/communicate',
      component: () => import('@/views/study/communicate/index'),
      name: 'communicate',
      meta: {
        title: 'vue组件之间通信',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/kform',
      component: () => import('@/views/study/kform/index'),
      name: 'kform',
      meta: {
        title: '自己实现一个表单组件',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/functional',
      component: () => import('@/views/study/functional/index'),
      name: 'functional',
      meta: {
        title: 'vue函数式组件',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/render',
      component: () => import('@/views/study/render/index'),
      name: 'render',
      meta: {
        title: 'vue之render',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/transition',
      component: () => import('@/views/study/transition/index'),
      name: 'transition',
      meta: {
        title: 'vue之transition',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/tree',
      component: () => import('@/views/study/tree/index'),
      name: 'tree',
      meta: {
        title: '实现一个树形组件',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },

    {
      path: '/study/svg',
      component: () => import('@/views/study/svgIcons/index'),
      name: 'svg',
      meta: {
        title: 'svg-sprite-loader应用',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/svg-inline',
      component: () => import('@/views/study/svgIconsInline/index'),
      name: 'svg-inline',
      meta: {
        title: 'svg-inline-loader应用',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/directive',
      component: () => import('@/views/study/directiveTest/index'),
      name: 'directive',
      meta: {
        title: 'directive 学习',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    },
    {
      path: '/study/provideAndinject',
      component: () => import('@/views/study/provideAndinject/index'),
      name: 'provide',
      meta: {
        title: 'provide-inject学习',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
}
export default componentsRouter
