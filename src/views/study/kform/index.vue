<template>
  <div>
    <div>
      <KForm ref="submitForm" :model="model" :rules="rules">
        <k-form-item
          label="名字"
          prop="name"
        >
          <k-input
            v-model="model.name"
            placeholder="请输入名字"
            type="text"
          />
        </k-form-item>

        <k-form-item
          label="密码"
          prop="password"
        >
          <k-input
            v-model="model.password"
            placeholder="请输入密码"
            type="password"
            autocomplete="off"
          />
        </k-form-item>

        <k-form-item>
          <button @click.stop="submitForm">
            提交
          </button>
        </k-form-item>
      </KForm>
    </div>
    <div>
      {{ model.name + model.password }}
    </div>
  </div>
</template>

<script>

import KInput from '@/components/Form/KInput'
import KFormItem from '@/components/Form/KFormItem'
import KForm from '@/components/Form/KForm'

import create from '@/components/Notice/create'
import Notice from '@/components/Notice/Notice'
export default {
  name: '',
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs['submitForm'].validate(valid => {
        const notice = create(Notice, {
          title: '社会你杨哥喊你来搬砖',
          message: valid ? '请求登录!' : '校验失败!', duration: 1000
        })
        notice.show()
      })
    }
  }
}
</script>

<style>

</style>
