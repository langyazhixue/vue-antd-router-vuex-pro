<template>
  <Form 
    ref="myForm" 
    :label-width="80"
    :rules="myFormRule" 
  >
    <FormItem prop="userName" label="用户名">
      <Input 
        type="text" 
        v-model="formData.userName" 
        placeholder="请输入用户名"
      >
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="passWord" label="密码">
      <Input 
        type="password" 
        v-model="formData.password" 
        placeholder="请输入密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handlerSubmit('myForm')">登陆</Button>
    </FormItem>
    </Form>
</template>
<script>
export default {
  name:'LoginView',
  data(){
    return {
      formData:{
        userName:'',
        passWord:''
      },
      myFormRule:{
        userName:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  handlerSubmit(name){
    this.$refs[name].validate((valid) => {
      if (valid) {
        this.$Message.success('Success!');
      } else {
        this.$Message.error('Fail!');
      }
    })
  }
}
</script>
