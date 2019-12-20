<template>
  <svg
    xmlns:xlink="http://www.w3.org/1999/xlink"
    height="100%"
    version="1.1"
    :viewBox="svg.viewBox"
    width="100%"
    class="svg-icon"
  >
    <path class="aplayer-fill" :d="svg.d" />
  </svg>
</template>

<script>
const requireAssets = require.context('./svg', false, /\.svg$/)
const SVGs = {}
console.log(requireAssets.keys())
requireAssets.keys().map(path => {
  // path === ./loading.svg
  const inlineSvg = requireAssets(path)
  const [raw, viewBox, d] = inlineSvg.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)
  SVGs[path.match(/^.*\/(.+?)\.svg$/)[1]] = {
    raw,
    viewBox,
    d
  }
})
console.log(SVGs)
export default {
  name: 'SvgIconInline',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    svg() {
      const iconClass = this.iconClass
      return SVGs[iconClass] || {}
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
