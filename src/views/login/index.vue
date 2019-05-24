<template>
  <div class="login--container">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <h2 class="login--container--title">
        系统登陆
      </h2>
      <!-- 用户名 -->
      <a-form-item
        label="用户名"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'name',
            { rules: [{ required: true, message: '请输入用户名' }],
              initialValue:initialFormData.name
            }
          ]"
        />
      </a-form-item>
      <!-- 密码 -->
      <a-form-item
        label="用户名"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码' }],
              initialValue:initialFormData.password
            }
          ]"
          type="password"
        />
      </a-form-item>

      <!-- 按钮 -->
      <a-form-item
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button
          type="primary"
          html-type="submit"
        >
          登陆
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20, offset: 4 }
}
export default {
  name: 'LoginView',
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout,
      formTailLayout,
      initialFormData: {
        name: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
        this.$http.post(this.$api.login, values)
          .then(res => {

          })
          .catch(_ => {
            console.log(_)
          })
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
  .ant-form {
    width: 400px;
    padding-top:100px;
    margin: 0 auto;
    color:#fff;
    .login--container--title{
      width: 100%;
      text-align: center;
      color:#fff;
      margin-bottom: 40px;
      letter-spacing: 5px;
    }
  }
}
</style>

<style lang="less">
.login--container {
  .ant-form {
    .ant-form-item  {
      .ant-form-item-label label {
        color:#fff;
      }
    }
    // .login--container--footer {
    //   float: right;
    //   width:100%;
    //   .ant-form-item-content{
    //     width: 400px - 80px;
    //     display: table;
    //     border-collapse: separate;
    //     .ivu-btn-primary {
    //       width:400px - 80px;
    //     }
    //   }
    // }
  }
}
</style>

