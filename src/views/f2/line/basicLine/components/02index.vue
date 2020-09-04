<template>
  <div>
    <h2>带点折线图</h2>
    <canvas id="F2BasicLineTwo" />
  </div>
</template>

<script>
import F2 from '@antv/f2'
const data = [{
  day: '周一',
  value: 300
}, {
  day: '周二',
  value: 400
}, {
  day: '周三',
  value: 350
}, {
  day: '周四',
  value: 500
}, {
  day: '周五',
  value: 490
}, {
  day: '周六',
  value: 600
}, {
  day: '周日',
  value: 900
}]
export default {
  name: 'F2BasicLineTwo',
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
        id: 'F2BasicLineTwo',
        //  el: document.getElementById('F2BasicLineTwo'),
        pixelRatio: window.devicePixelRatio,
        width: 320
      })
      this.chart = chart
      chart.source(data, {
        value: {
          min: 0,
          tickCount: 5
        },
        day: {
          range: [0, 1]
        }
      })
      // chart.showTooltip()
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        layout: 'vertical',
        alwaysShow: false,
        background: {
          radius: 2,
          fill: '#1890FF',
          padding: [10, 10]
        },
        crosshairsStyle: {
          lineDash: [2]
        },
        snap: false,
        crosshairsType: 'xy',
        showXTip: true,
        showYTip: true,
        yTip(val) {
          // 返回值必须是对象
          return val.toFixed(2)
        },
        onShow: function onShow(ev) {
          const items = ev.items
          // console.log(items)
          // items:[1,2] 1 line线 2 点线
          items[0].name = null
          items[0].value = '$' + items[0].value
          items[1].name = null
          items[1].value = '$' + items[1].value
        }
      })
      chart.axis('day', {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.axis('value', {
        grid: null
      })

      chart.line().position('day*value').color('value', ['red'])
      chart.point().position('day*value').style({
        stroke: 'red',
        lineWidth: 1
      })
      chart.render()
    }
  }
}
</script>

<style>

</style>
