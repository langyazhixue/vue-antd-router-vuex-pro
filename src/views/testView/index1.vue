<template>
  <div class='parent'>
    <header>父组件</header>
    <test-child :items='items' :todos='todos'>
      <template slot-scope="slotProps">
      <span>{{slotProps.todo.text}}</span>
    </template>
    </test-child>
    <div>
      <router-link
        :to="{
          name:'news',
          params:{
            newsId:'1',
            newsTitle:'my'
          }
        }"
      >
        跳到新闻页面
      </router-link>
    </div>
  </div>
</template>
<script>
import TestChild from './components/child'
export default {
  name:'AdminLogin',
  data(){
    return {
      items: [
        { text: '文字1', cname: 'tom', addr: 'usa' },
        { text: '文字2', cname: 'wangwu', addr: 'uk' },
        { text: '文字3', cname: 'zhangsan', addr: 'un' }
      ],
      todos: [
        { text: '文字1', isComplete: false, id: 1 },
        { text: '文字2', isComplete: true, id: 2 }
      ]
    }
  },
  components:{
    TestChild
  },
  // created(){
  //   console.log(this.$options)
  // },
  mounted(){
    console.log(this)
  }
}
</script>
