<template>
  <div>
    {{data.name}}
  </div>
</template>
<script>
export default {
  name:'testtest',
  props:{
    data:{
      type:Object,
      required:true
    }
  }
}
</script>
