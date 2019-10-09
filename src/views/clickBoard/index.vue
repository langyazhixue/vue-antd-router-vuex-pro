<template>
  <div>
    <h2> clcikBoard 复制插件</h2>
    <div style="width:400px">
      <h2> 案例1 </h2>
      <el-input
        id="foo"
        v-model="text"
      />
      <button
        class="btn"
        data-clipboard-action="cut"
        data-clipboard-target="#foo"
        @click="copy"
      >
        复制
      </button>
    </div>

    <el-input
      v-model="textarea"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
    />
  </div>
</template>
<script>
// import Clipboard from 'clipboard'
import handlerClipboard from '@/util/clipboard'
import getParam from '@/util/url'
// 通过target，text的function复印内容
export default {
  name: 'ClcikBoard',
  data: function() {
    return {
      text: '',
      textarea: ''
    }
  },
  mounted() {
    this.getParams()
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    },
    clipboardError() {
      this.$message({
        message: 'Copy failed',
        type: 'error',
        duration: 1500
      })
    },
    copy(e) {
      // 通过target复制内容
      handlerClipboard(this.text, e)
    },
    // 通过target,text的function复印内容
    copy1() {
      // var clipboard = new Clipboard('.btn', {
      //   // 通过target指定要复印的节点
      //   target: function () {
      //     return document.querySelector('div')
      //   }
      // })
    },
    // 通过text 的function 复印内容
    // text的function指定的复印内容，
    copy2() {
      // var clipboard = new Clipboard('.btn', {
      //   // 通过target指定要复印的节点
      //   text: () => 'to be or not to be'
      // })
    },
    getParams() {
      const r = getParam('http://qqq.com?word=1&type=new')
      console.log(r)
    }
  }
}
</script>
