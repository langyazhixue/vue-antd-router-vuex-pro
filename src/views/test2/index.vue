<template>
  <div class="test-container">
    <!-- <div>组件test2</div>
    <el-input v-model="name" placeholder="请输入姓名" /> -->
    <!-- <base-input /> -->
    <!-- <component-input v-model='price'/> -->
    <!-- <component-input :value="price" @input="val => {price = val}"></component-input> -->

    <!-- {{fruit}}观测数据变化 -->
    <!-- <component-checkbox v-model="fruit" value="apple" name="myFruit"></component-checkbox> -->
    <!-- 下行注释的语法糖 -->
    <!-- <mcomponent-checkbox :checked="fruit" @change="val => {fruit = val}" value="apple"></mcomponent-checkbox> -->

    <!-- <component-checkbox v-model="fruit" value="peach" name="myFruit"></component-checkbox> -->
    <!-- 下行注释的语法糖 -->
    <!-- <mcomponent-checkbox :checked="fruit" @change="val => {fruit = val}" value="peach"></mcomponent-checkbox> -->

    <!-- <test-inherit-attrs :readonly="readonly" class='test' name='11' testArrt='test'/> -->
    <!-- <slot-scope-template :items='items' :todos="todos">
      <template slot-scope="slotProps">
        <span>{{slotProps.todo.text}}</span>
      </template>
      <div slot='header'>
        <span>headerheaderheaderheader</span>
      </div>
    </slot-scope-template> -->

   <listeners-child
    :items='items'
    @updateItems='receveNewItems'
   ></listeners-child> 
  </div>
</template>
<script>
import BaseInput from './baseInput.vue'
import componentInput from './componentInput.vue'
import componentCheckbox from './componentCheckbox.vue'
import testInheritAttrs from './testInheritAttrs.vue'
import slotScopeTemplate from './slotScope.vue'
import listenersChild from './listenersChild'
export default {
  name: 'TestTwo',
  components:{
    BaseInput,
    componentInput,
    componentCheckbox,
    testInheritAttrs,
    slotScopeTemplate,
    listenersChild
  },
  data() {
    return {
      readonly:true,
      price:'20',
      fruit: 'peach',
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
  beforeCreate() {
    console.log('test2 beforeCreate')
  },
  created() {
    console.log('test2 created')
  },
  mounted() {
    console.log(this.$slots)
    console.log('test2 mounted')
  },
  activated() {
    console.log('test2 activated')
  },
  deactivated() {
    console.log('test2 deactivated')
  },
  methods:{
    receveNewItems(newItem){
      this.items.push(newItem)
    }
  }
}
</script>
