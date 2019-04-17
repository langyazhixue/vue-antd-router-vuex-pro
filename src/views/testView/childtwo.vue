<template>
  <div class='two'>
      {{demo}}
  </div>
</template>
<script>
export default {
  name:'ChildTwo',
  inject:['for'],
  data(){
    return {
      demo:this.for
    }
  }
}
</script>