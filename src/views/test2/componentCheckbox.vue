<template>
  <div>
    <div>
      <span>{{value}}</span>
      <input type="radio" ref="radio" :name='name' :checked="checked===value" @change="doThis" :value='value'/>
    </div>
  </div>
</template>
<script>
export default {
  name:'componentCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props:{
    checked:{
      type:String
    },
    value:{
      type:String
    },
    name:{
      type:String
    }
  },
  data(){
    return {
    }
  },
  methods:{
    doThis() {
      this.$emit('change', this.$refs.radio.value)
    }
  }
}
</script>
