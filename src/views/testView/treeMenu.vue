<template>
  <li>
    <span v-if="hasChild"><a-icon type="file-text" /></span>
    <span>{{ model.menuName }}</span>
    <ul v-if="hasChild" style="margin-left:20px">
      <tree-menu
        v-for="(item,$index) in model.children"
        :key="$index"
        style="margin-left:20px"
        :model="item"
      />
    </ul>
  </li>
</template>
<script>
export default {
  name: 'TreeMenu',
  props: {
    model: {
      required: true,
      type: Object
    }
  },
  computed: {
    hasChild() {
      return this.model.children && this.model.children.length
    }
  }
}
</script>
