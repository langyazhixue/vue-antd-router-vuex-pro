<template>
  <div>
    <h2>基础折线图</h2>
    <canvas id="F2BasicLineOne" />
  </div>
</template>

<script>
import $ from 'jquery'
import insertCss from 'insert-css'
const data = [{
  date: '2017-06-05',
  value: 116
}, {
  date: '2017-06-06',
  value: 129
}, {
  date: '2017-06-07',
  value: 135
}, {
  date: '2017-06-08',
  value: 86
}, {
  date: '2017-06-09',
  value: 73
}, {
  date: '2017-06-10',
  value: 85
}, {
  date: '2017-06-11',
  value: 73
}, {
  date: '2017-06-12',
  value: 68
}, {
  date: '2017-06-13',
  value: 92
}, {
  date: '2017-06-14',
  value: 130
}, {
  date: '2017-06-15',
  value: 245
}, {
  date: '2017-06-16',
  value: 139
}, {
  date: '2017-06-17',
  value: 115
}, {
  date: '2017-06-18',
  value: 111
}, {
  date: '2017-06-19',
  value: 309
}, {
  date: '2017-06-20',
  value: 206
}, {
  date: '2017-06-21',
  value: 137
}, {
  date: '2017-06-22',
  value: 128
}, {
  date: '2017-06-23',
  value: 85
}, {
  date: '2017-06-24',
  value: 94
}, {
  date: '2017-06-25',
  value: 71
}, {
  date: '2017-06-26',
  value: 106
}, {
  date: '2017-06-27',
  value: 84
}, {
  date: '2017-06-28',
  value: 93
}, {
  date: '2017-06-29',
  value: 85
}, {
  date: '2017-06-30',
  value: 73
}, {
  date: '2017-07-01',
  value: 83
}, {
  date: '2017-07-02',
  value: 125
}, {
  date: '2017-07-03',
  value: 107
}, {
  date: '2017-07-04',
  value: 82
}, {
  date: '2017-07-05',
  value: 44
}, {
  date: '2017-07-06',
  value: 72
}, {
  date: '2017-07-07',
  value: 106
}, {
  date: '2017-07-08',
  value: 107
}, {
  date: '2017-07-09',
  value: 66
}, {
  date: '2017-07-10',
  value: 91
}, {
  date: '2017-07-11',
  value: 92
}, {
  date: '2017-07-12',
  value: 113
}, {
  date: '2017-07-13',
  value: 107
}, {
  date: '2017-07-14',
  value: 131
}, {
  date: '2017-07-15',
  value: 111
}, {
  date: '2017-07-16',
  value: 64
}, {
  date: '2017-07-17',
  value: 69
}, {
  date: '2017-07-18',
  value: 88
}, {
  date: '2017-07-19',
  value: 77
}, {
  date: '2017-07-20',
  value: 83
}, {
  date: '2017-07-21',
  value: 111
}, {
  date: '2017-07-22',
  value: 57
}, {
  date: '2017-07-23',
  value: 55
}, {
  date: '2017-07-24',
  value: 60
}]

import F2 from '@antv/f2'
export default {
  name: 'F2BasicLineOne',
  data() {
    return {
      data,
      chart: null
    }
  },
  mounted() {
    this.cssInSert()
    this.render()
  },
  methods: {
    cssInSert() {
      insertCss(`
        .chart-wrapper {
          position: relative;
        }
        .f2-tooltip {
          -moz-box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.3);
          -webkit-box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.3);
          box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.3);
          position: absolute;
          z-index: 99;
          background-color: #1890ff;
          padding: 5px;
          border-radius: 3px;
          text-align: center;
          width: 120px;
          opacity: 0;
        }
        .f2-tooltip:after {
          content: " ";
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #1890ff;
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -8px;
        }
        .f2-tooltip span {
          display: block;
          color: #fff;
        }
        .f2-tooltip span:nth-child(1) {
          font-size: 11px !important;
        }
        .f2-tooltip span:nth-child(2) {
          font-size: 13px !important;
        }
      `)
      $('\n  <div class="f2-tooltip">\n    <span> </span>\n    <span> </span>\n  </div>\n').insertBefore('#F2BasicLineOne')
    },
    render() {
      const chart = new F2.Chart({
        el: document.getElementById('F2BasicLineOne'),
        width: 320,
        pixelRatio: window.devicePixelRatio
      })
      this.chart = chart
      chart.source(this.data, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      })
      chart.tooltip({
        custom: true,
        // showXTip: true,
        // showYTip: true,
        // xTip(val) {
        //   return val
        // },
        // yTip(val) {
        //   return val
        // },
        // snap: true, // 是否将辅助线准确定位至数据点
        // crosshairsType: 'xy',
        // crosshairsStyle: {
        //   lineCap: 'round',
        //   lineWidth: 1,
        //   lineJoin: 'round',
        //   lineDash: [2]
        // },
        showCrosshairs: true,
        onChange: function onChange(ev) {
          const canvasOffsetTop = $('#F2BasicLineOne').position().top
          const canvasOffsetLeft = $('#F2BasicLineOne').position().left
          const currentData = ev.items[0]
          const title = currentData.title
          const value = currentData.value
          const tooltipEl = $('.f2-tooltip')
          // console.log(currentData)
          // console.log(tooltipEl)
          tooltipEl.html(['<span>' + title + '</span>', '<span>Web Visits: <b>' + value + '</b></span>'].join(''))
          tooltipEl.css({
            opacity: 1,
            left: canvasOffsetLeft + currentData.x - tooltipEl.outerWidth() / 2 + 'px',
            top: canvasOffsetTop + currentData.y - tooltipEl.outerHeight() - 15 + 'px'
          })
        },
        onHide: function onHide() {
          const tooltipEl = $('.f2-tooltip')
          tooltipEl.css({
            opacity: 0
          })
        }
      })
      chart.axis('date', {
        position: 'bottom',
        line: {
          top: true,
          // fill: 'blue',
          // fillOpacity: 0.5,
          stroke: '#000',
          strokeOpacity: 0.5
        },
        // grid: {
        //   top: true,
        //   // fill: '#000',
        //   // fillOpacity: 0.5,
        //   stroke: '#000',
        //   strokeOpacity: 1,
        //   lineDash: [2]
        // },
        tickLine: {
          top: true,
          // fill: '#000',
          // fillOpacity: 0.5,
          stroke: 'red',
          strokeOpacity: 0.5
        },
        label: function(text, index, total) {
          console.log(text, index, total)
          const textCfg = {
            fill: 'red'
          }
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
      chart
        .line()
        .position('date*value')
        .color('value', ['red'])
        .style({
          stroke: 'purple',
          lineWidth: 1
        })
      chart.render()
    }
  }
}
</script>

<style>

</style>
