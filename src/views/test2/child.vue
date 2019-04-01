<template>
  <div class="hello">
    <div>
      <slot name='header'></slot>
    </div>
    <ul>
      <li
        v-for="todo in items"
        :key="todo.addr"
      >{{todo.text }}
      </li>
    </ul>
    <button @click='add'>add</button>
  </div>
</template>
<script>
export default {
  name:'MyChild',
  data () {
    return {
      num: 100
    }
  },
  props: ['items'],
  methods: {
    add() {
      this.$emit('updateItems',{
        text: '文字33', cname: 'hangzhou', addr: 'hangzhou'
      })
    }
  }
}
</script>
