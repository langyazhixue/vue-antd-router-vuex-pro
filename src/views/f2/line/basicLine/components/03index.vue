<template>
  <div>
    <h2>曲线折线图</h2>
    <canvas id="F2BasicLineThree" />
  </div>
</template>

<script>
import F2 from '@antv/f2'
// const Guide = require('@antv/f2/lib/plugin/guide')
const data = [{
  time: '2016-08-08 00:00:00',
  tem: 10
}, {
  time: '2016-08-08 00:10:00',
  tem: 22
}, {
  time: '2016-08-08 00:30:00',
  tem: 20
}, {
  time: '2016-08-09 00:35:00',
  tem: 26
}, {
  time: '2016-08-09 01:00:00',
  tem: 20
}, {
  time: '2016-08-09 01:20:00',
  tem: 26
}, {
  time: '2016-08-10 01:40:00',
  tem: 28
}, {
  time: '2016-08-10 02:00:00',
  tem: 20
}, {
  time: '2016-08-10 02:20:00',
  tem: 18
}]
export default {
  name: 'F2BasicLineThree',
  data() {
    return {
      data: data
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      const chart = new F2.Chart({
        id: 'F2BasicLineThree',
        //  el: document.getElementById('F2BasicLineTwo'),
        // pixelRatio: window.devicePixelRatio,
        pixelRatio: 2,
        width: 320
        // plugins: Guide
      })
      this.chart = chart
      const defs = {
        time: {
          type: 'timeCat',
          mask: 'MM/DD',
          range: [0, 1],
          tickCount: 3
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: '日均稳定'
        }
      }
      chart.source(this.data, defs)
      chart.axis('time', {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign === 'right'
          }
          return textCfg
        }
      })
      chart.tooltip(false)
      // chart.tooltip({
      //   showCrosshairs: true,
      //   crosshairsType: 'y',
      //   snap: true
      // })
      this.data.forEach(obj => {
        chart.guide().text({
          position: [obj.time, obj.tem],
          content: obj.tem,
          offsetY: -10,
          style: {
            textAlign: 'center',
            fill: '#888',
            opacity: 0.5,
            fontWeight: 'bold',
            fontSize: 10
          }
        })
      })
      chart.line().position('time*tem').shape('smooth')
      chart.point().position('time*tem').shape('smooth')
        .style({
          stroke: '#fff',
          lineWidth: 1
        })
      chart.render()
    }
  }
}
</script>

<style>

</style>
