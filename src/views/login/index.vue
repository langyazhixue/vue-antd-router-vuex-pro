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
            'username',
            { rules: [{ required: true, message: '请输入用户名' }],
              initialValue:initialFormData.username
            }
          ]"
        />
      </a-form-item>
      <!-- 密码 -->
      <a-form-item
        label="密码"
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
        <span>用户名填写admin,密码填写123456</span>
      </a-form-item>
    </a-form>
    <a-button
      type="primary"
      @click="mock"
    >
      测试mock 接口
    </a-button>
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
// import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout,
      formTailLayout,
      initialFormData: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    // ...mapActions({
    //   login: 'user/login'
    // }),
    mock() {
      this.$http({
        url: '/api/test',
        method: 'post'
      })
        .then(res => {
          console.log(res)
        })
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
        this.$store.dispatch('user/login', {
          userInfo: values
        })
          .then(() => {
            this.$router.push({
              // 从路由那边带过来
              path: this.$route.query.redirect || '/'
            })
          })
        // 用户登陆
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

