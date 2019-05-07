<template>
  <div>
    <span>{{name}}</span>
    <a-button @click='change'>改变</a-button>
  </div>
</template>
<script>
const extend = {
  created() {
    console.log('extends created')
  },
  watch:{
    name(newVal,oldVal){
      console.log('extends')
    }
  }
}

const mixin1 = {
  created() {
    console.log('mixin1 created')
  },
  watch:{
    name(newVal,oldVal){
      console.log('mixin1')
    }
  }
}

const mixin2 = {
  created() {
    console.log('mixin2 created')
  },
  watch:{
    name(newVal,oldVal){
      console.log('mixin2')
    }
  }
}

export default {
  name: 'testView',
  extends: extend,
  mixins: [mixin1,mixin2],
  data(){
    return {
      name:'前面'
    }
  },
  watch:{
    name(newVal,oldVal){
      console.log('mySelf')
    }
  },
  methods:{
    change(){
      this.name = '后面'
    }
  }
}
</script>