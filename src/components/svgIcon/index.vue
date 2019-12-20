<template>
  <!-- use元素在SVG文档内取得目标节点，并在别的地方复制它们 -->
  <svg :class="svgClass" aria-hidden="true" v-on="$listerers">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width:1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right:10px;
}
</style>
