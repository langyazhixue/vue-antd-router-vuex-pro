<template>
  <div>
    sdfdsf
    <a-pagination :default-current="1" :total="50" show-size-changer />
    <a-date-picker @change="onChange" />
  </div>
</template>
<script>
export default {
  name: 'DocumentView',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
