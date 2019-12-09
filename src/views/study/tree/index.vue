<template>
  <div id="domAppend--container" class="main--class ">
    <ul
      v-for="(modelItem, $index) in data"
      :key="$index"
    >
      <tree-menu :model="modelItem" />
    </ul>
  </div>
</template>
<script>
import TreeMenu from './treeMenu.vue'
// import Vue from 'vue'
var demoData = [
  {
    'id': '1',
    'menuName': '基础管理',
    'menuCode': '10',
    'children': [
      {
        'menuName': '用户管理',
        'menuCode': '11'
      },
      {
        'menuName': '角色管理',
        'menuCode': '12',
        'children': [
          {
            'menuName': '管理员',
            'menuCode': '121',
            'children': [
              {
                'menuName': '角色管理11',
                'menuCode': '124'
              },
              {
                'menuName': '角色管理22',
                'menuCode': '125'
              }
            ]
          },
          {
            'menuName': 'CEO',
            'menuCode': '122'
          },
          {
            'menuName': 'CFO',
            'menuCode': '123'
          },
          {
            'menuName': 'COO',
            'menuCode': '124'
          },
          {
            'menuName': '普通人',
            'menuCode': '124'
          }
        ]
      },
      {
        'menuName': '权限管理',
        'menuCode': '13'
      }
    ]
  },
  {
    'id': '2',
    'menuName': '商品管理',
    'menuCode': ''
  },
  {
    'id': '3',
    'menuName': '订单管理',
    'menuCode': '30',
    'children': [
      {
        'menuName': '订单列表',
        'menuCode': '31'
      },
      {
        'menuName': '退货列表',
        'menuCode': '32',
        'children': []
      }
    ]
  },
  {
    'id': '4',
    'menuName': '商家管理',
    'menuCode': '',
    'children': []
  }
]
export default {
  name: 'Demo',
  components: {
    TreeMenu
  },
  data() {
    return {
      data: demoData
    }
  }
}
</script>
