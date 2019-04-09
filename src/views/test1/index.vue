<template>
  <div id="app">
    <!-- <RenderTest msg="Render Test" :level="3" :items="items">
      <div class="header">default header</div>
      <p slot="header">slot header</p>
    </RenderTest> -->
    <span v-pre>{{ this will not be compiled }}</span>
    <el-button @click='send'>
      发送名字
    </el-button>

    <el-upload
      class="upload-demo"
      action="/server/upload"
      :on-success='handlerSuccess'
      :on-error='handlerError'
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>

  </div>
</template>
<script>
import RenderTest from './renderTest.vue'
import Cookies from 'js-cookie'
export default {
  name: 'TestOne',
  components: {
    RenderTest
  },
  data() {
    return {
      fileList:[],
      headers:{
        'Content-Type': 'multipart/form-data'
      },
      items: [
        {
          name: 'hello'
        },
        {
          name: 'vue'
        },
        {
          name: 'js'
        }
      ]
    }
  },
  methods:{
    send(){
      Cookies.set('name', 'value')
      this.$http.post('/server/sendName',{
        name:'teess'
      })
    },
    handleChange(file,fileList) {

    },
    handlerSuccess(response,file,fileList) {
      console.log(response)
    },
    handlerError(response,file,fileList) {
      console.log(response)
    }
  }
}
</script>

