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

    <div> <el-button @click="getData">获取json</el-button></div>

     <div> <el-button @click="addData">addjson</el-button></div>

     <div> <el-button @click="getUser">getUser</el-button></div>
     <div> <el-button @click="deleteUser">deleteUser</el-button></div>
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
    },
    getData(){
      this.$http.get('/server/listUsers',{
        params:{
          name:'tet'
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(_ => {
          
        })
    },
    addData(){
      this.$http.post('/server/addUser',{
        "name" : "tet",
        "password" : "password4",
        "profession" : "librarian44",
        "id": 4
      })
        .then(res => {
          console.log(res)
        })
        .catch(_ => {
          
        })
    },
    getUser(){
      this.$http.get('/server/getUser/1')
        .then(res => {
          console.log(res)
        })
        .catch(_ => {
          
        })
    },
    deleteUser(){
      this.$http.delete('/server/deleteUser/1')
        .then(res => {
          console.log(res)
        })
        .catch(_ => {
          
        })
    }
  }
}
</script>

