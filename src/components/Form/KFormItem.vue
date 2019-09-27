<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot />
    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'], // 注入form
  props: {
    label: {
      type: String,
      default: ''
    },
    // 字段名 type: String,
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  mounted() { // 监听校验事件
    this.$on('validate', () => { this.validate() })
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const descriptor = {
        [this.prop]: rules
      }
      const schema = new Schema(descriptor)
      // console.log(this.$slots.default[0])
      // console.log(this.$slots.default[0].model)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
