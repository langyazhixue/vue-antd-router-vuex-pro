<template>
  <div class="hello">
    <div>
      <slot name='header'></slot>
    </div>
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <!-- 我们为每个 todo 准备了一个插槽，-->
        <!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
        <slot v-bind:todo="todo" v-bind:item="items">
          <!-- 回退的内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 100
    }
  },
  props: ['items', 'todos'],
  methods: {
  },
  created () {

    //console.log('todos', this.$props.todos)
  },
  mounted(){
   console.log(this.$slots)
   console.log(this.$scopedSlots)
  }
}
</script>
