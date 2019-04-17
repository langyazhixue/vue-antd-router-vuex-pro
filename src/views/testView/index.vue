<template>
  <div class="main--class">
    <div>
      {{ message }}
    </div>
    <div class="cc">
      <el-button type="primary" @click="change">
        更新父组件message
      </el-button>
    </div>
    <div v-focus="testDirective">
      <directive-child />
    </div>
    <div>
      <router-link :to="{path:'test'}">
        <el-button>去test2</el-button>
      </router-link>
    </div>
    <div>
      testProps:{{ testProps }}
    </div>
  </div>
</template>
<script>
import directiveChild from './components/directiveChild.vue'
export default {
  name: 'DirectiveParent',
  components: {
    directiveChild
  },
  props: {
    testProps: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      message: '这是父组件',
      testDirective: 'testDirective'
    }
  },
  created() {
    console.log('11')
  },
  mounted() {
    this.add()
  },
  methods: {
    change() {
      // this.$myMethod('test')
      this.message = '父组件已更新'
    },
    add() {
      const requireAssets = require.context('../vueAplayer/assets', false, /\.svg$/)
      // console.log(11)
      // console.log(requireAssets.keys())
      let res = {}
      requireAssets.keys().map(path => {
        const inlineSvg = requireAssets(path)
        console.log(inlineSvg)
        const [raw, viewBox, d] = inlineSvg.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)
        console.log(inlineSvg.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/))
        res[path.match(/^.*\/(.+?)\.svg$/)[1]] = {
          viewBox,
          d
        }
      })
      // const SVGs = requireAssets.keys().reduce((svgs, path) => {
      //   const inlineSvg = requireAssets(path)
      //   const [raw, viewBox, d] = inlineSvg.match(/^<svg.+?viewBox="(.+?)".*><path.+?d="(.+?)".*><\/path><\/svg>$/)

      //   svgs[path.match(/^.*\/(.+?)\.svg$/)[1]] = {
      //     viewBox,
      //     d
      //   }
      //   return svgs
      // }, {})
      // console.log(SVGs)
    }
  }

}
</script>
<style lang="scss" scoped>
.main--class  {
  .cc /deep/ .el-button--primary{
    color:red !important;
  }
}

</style>

