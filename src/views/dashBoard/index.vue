<template>
  <div>
    <!-- sdfdsf -->
    <!-- <a-pagination :default-current="1" :total="50" show-size-changer /> -->
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'DashBoardView',
  data() {
    return {
      d: '2020-8-15'
    }
  },
  mounted() {
    const d = moment('2020-8-15').subtract(7, 'days').format('YYYY-MM-DD')
    console.log(d)
  }
}
</script>
