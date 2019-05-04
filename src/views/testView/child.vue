<template>
  <div>
    <header>测试作用域插槽</header>
    <ul>
      <li
        v-for="(todo,$index) in todos"
        :key="$index"
      >
        <slot :todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TestChild',
  props: {
    items: {
      required: true,
      type: Array
    },
    todos: {
      required: true,
      type: Array
    }
  }
}
</script>
