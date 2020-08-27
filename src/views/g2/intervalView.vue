<template>
  <div>
    <h2>分组双y周柱状图</h2>
    <div id="intervalChart" style="width:600px" />
  </div>
</template>

<script>
import G2 from '@antv/g2'
var Shape = G2.Shape
var Util = G2.Util
var Global = G2.Global
// import { DataSet, DataView } from '@antv/data-set'
export default {
  name: 'IntervalView',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      function getRectRange(points, step) {
        console.log(points)
        console.log(step)
        var xValues = []
        var yValues = []
        for (var i = 0, len = points.length; i < len; i++) {
          var point = points[i]
          xValues.push(point.x - step)
          yValues.push(point.y)
        }
        var xMin = Math.min.apply(null, xValues)
        var yMin = Math.min.apply(null, yValues)
        var xMax = Math.max.apply(null, xValues)
        var yMax = Math.max.apply(null, yValues)

        return {
          x: xMin,
          y: yMin,
          width: xMax - xMin,
          height: yMax - yMin
        }
      }

      // 左侧柱子
      Shape.registerShape('interval', 'left', {
        draw: function draw(cfg, container) {
          var points = this.parsePoints(cfg.points)
          var style = Util.mix({
            fill: cfg.color
          }, Global.shape.interval, cfg.style)

          var rectCfg = getRectRange(points, cfg.size) // cfg.size 对应 .size(25)

          return container.addShape('rect', {
            className: 'interval',
            attrs: Util.mix(rectCfg, style)
          })
        }
      })
      // 右侧柱子
      Shape.registerShape('interval', 'right', {
        draw: function draw(cfg, container) {
          var points = this.parsePoints(cfg.points)
          var style = Util.mix({
            fill: cfg.color
          }, Global.shape.interval, cfg.style)
          var rectCfg = getRectRange(points, -cfg.size / 2) // cfg.size 对应 .size(25

          return container.addShape('rect', {
            className: 'interval',
            attrs: Util.mix(rectCfg, style)
          })
        }
      })

      // ------ 开始绘制 chart ------
      var data = [{
        genre: 'ant 牌黄油',
        domestic: 460000,
        international: 25000
      }, {
        genre: 'ant 牌芝士',
        domestic: 425000,
        international: 30000
      }, {
        genre: 'ant 牌牛奶',
        domestic: 310000,
        international: 15000
      }, {
        genre: 'ant 牌奶昔',
        domestic: 270000,
        international: 40000
      }]

      var chart = new G2.Chart({
        id: 'intervalChart',
        forceFit: true,
        padding: ['auto', 'auto', 'auto', 'auto'],
        height: 500
      })

      chart.source(data, {
        genre: {
          alias: '商品名称' // 列定义，定义该属性显示的别名
        },
        domestic: {
          alias: '内销额'
        },
        international: {
          alias: '出口额'
        }
      })

      chart.axis('international', {
        grid: null
      })

      chart.interval().position('genre*domestic').shape('left').size(15).adjust([{
        type: 'dodge',
        marginRatio: 10 // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
      }])
      chart.interval().position('genre*international').color('#36B3C3').shape('right').size(15).adjust([{
        type: 'dodge',
        marginRatio: 10 // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
      }])

      chart.coord().reflect('xy').transpose()
      chart.render()
    }
  }
}
</script>

<style>

</style>
