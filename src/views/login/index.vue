<template>
  <div class='login--container'>
    <Form 
      ref="myForm" 
      :label-width="80"
      :rules="myFormRule" 
      :model="formData"
    >
      <h2 class='login--container--title'>系统登陆</h2>
      <FormItem prop="name" label="用户名">
        <Input 
          type="text" 
          v-model.trim="formData.name" 
          placeholder="请输入用户名"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password" label="密码">
        <Input 
          type="password" 
          v-model.trim="formData.password" 
          placeholder="请输入密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class='login--container--footer'>
        <Button type="primary" @click="handlerSubmit('myForm')">登陆</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name:'LoginView',
  data(){
    return {
      formData:{
        name:'admin',
        password:'12345'
      },
      myFormRule:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handlerSubmit(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$http.post(this.$api.login,this.formData)
            .then(res => {
              this.$Message.success(res.message);
            })
            .catch(err =>{
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.login--container {
  min-height: 100%;
  width: 100%;
  background-color:@primary--login--bg;
  overflow: hidden;
  .ivu-form {
    width: 400px;
    padding-top:100px;
    margin: 0 auto;
    color:#fff;
    .login--container--title{
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      letter-spacing: 5px;
    }
  }
}
</style>

<style lang="less">
.login--container {
  .ivu-form  {
    .ivu-form-item  {
      .ivu-form-item-label {
        color:#fff;
      }
    }
    .login--container--footer {
      float: right;
      width:100%;
      .ivu-form-item-content{
        width: 400px - 80px;
        display: table;
        border-collapse: separate;
        .ivu-btn-primary {
          width:400px - 80px;
        }
      }
    }
  }
}
</style>


