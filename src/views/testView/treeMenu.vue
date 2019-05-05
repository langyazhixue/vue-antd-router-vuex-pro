<template>
  <li>
    <span v-if='hasChild'><a-icon type="file-text" /></span>
    <span>{{model.menuName}}</span>
    <ul v-if='hasChild' style='margin-left:20px'>
       <tree-menu 
        style='margin-left:20px'
        v-for="(item,$index) in model.children"  
        :model="item" 
        :key="$index">
       </tree-menu>
    </ul>
  </li>
</template>
<script>
export default {
  name:'TreeMenu',
  props: {
    model: {
      required: true,
      type: Object
    }
  },
 computed:{
   hasChild(){
     return this.model.children && this.model.children.length
    } 
 }
}
</script>