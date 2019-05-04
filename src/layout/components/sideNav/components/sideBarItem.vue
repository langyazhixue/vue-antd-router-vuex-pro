
<script>
// import AppLink from './link'
// import { Menu } from 'ant-design-vue'
// console.log(Menu)
// export default {
//   name: 'SideBarItem',
//   components: {
//     AppLink
//   },
//   props: {
//     // route: {
//     //   type: Object
//     // },
//     // basePath: {
//     //   type: String
//     // }
//   },
//   data() {
//     return {
//       onlyOneChild: null
//     }
//   },
//   methods: {
//     // hasOneShowingChild(children, parent){
//     //   const showingChildren = children.filter(item => {
//     //     if (item.hidden) {
//     //       return false
//     //     } else {
//     //       this.onlyOneChild = item
//     //       return true
//     //     }
//     //   })
//     //   debugger
//     //   if(showingChildren.length === 1) {
//     //     return true
//     //   }
//     //   if(showingChildren.length === 0) {
//     //      this.onlyOneChild = { ... parent, path: '' }
//     //     return true
//     //   }
//     //   return false
//     // },
//     // resolvePath(routerPath){
//     //   return path.resolve(this.basePath,routerPath)
//     // }
//   },
//   render(h, { props }) {
//     let onlyOneChild = null
//     function hasOneShowingChild(children, parent) {
//       const showingChildren = children.filter(item => {
//         if (item.hidden) {
//           return false
//         } else {
//           onlyOneChild = item
//           return true
//         }
//       })
//       if (showingChildren.length === 1) {
//         return true
//       }
//       if (showingChildren.length === 0) {
//         onlyOneChild = { ... parent, path: '' }
//         return true
//       }
//       return false
//     }
//     if (hasOneShowingChild(props.route.children, props.route)) {
//       return h(
//         'a-menu-item',
//         {
//           props: {
//             key: onlyOneChild.key,
//             title: onlyOneChild.meta.title
//           }
//         },
//         [
//           h(
//             AppItem,
//             {
//               props: {
//                 title: onlyOneChild.meta.title,
//                 icon: onlyOneChild.meta.icon
//               }
//             }
//           )
//         ]
//       )
//     } else {
//       return h('span', ['test'])
//     }
//   }
// }
// </script>
// <style lang="less" scoped>
// .side--bar--item{

// }
// </style>
