<template>
  <div>
    <a-button v-permission="['admin']">
      按钮1
    </a-button>
    <a-button v-permission="['jquery']">
      按钮2
    </a-button>
    <a-button v-permission="['admin']">
      按钮5
    </a-button>
    <a-button v-permission="['jquery']">
      按钮3
    </a-button>
    <a-button v-permission="['jquery']">
      按钮4
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'DirectiveTest'
}
</script>

<style>
</style>
