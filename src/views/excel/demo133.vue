
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
      />
      <el-table-column
        prop="amount1"
        label="数值 1（元）"
      />
      <el-table-column
        prop="amount2"
        label="数值 2（元）"
      />
      <el-table-column
        prop="amount3"
        label="数值 3（元）"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanInfo: [
        // {
        //   s: {
        //     c: 0,
        //     r: 0
        //   },
        //   e: {
        //     c: 0,
        //     r: 1
        //   }
        // },
        // {
        //   s: {
        //     c: 1,
        //     r: 2
        //   },
        //   e: {
        //     c: 2,
        //     r: 2
        //   }
        // }
        // {
        //   s: {
        //     c: 0,
        //     r: 3
        //   },
        //   e: {
        //     c: 1,
        //     r: 4
        //   }
        // },
        // {
        //   s: {
        //     c: 1,
        //     r: 1
        //   },
        //   e: {
        //     c: 3,
        //     r: 2
        //   }
        // }
      ],
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    parseSpanInfo(spanInfo) {
      const res = []
      spanInfo.map(item => {
        const s = item.s
        const e = item.e
        const sc = s.c // clolumn
        const sr = s.r // row
        const ec = e.c
        const er = e.r
        // 放在这里处理单元格合并逻辑
        // 分为 3种逻辑，
        // 1. 同一列，合并行
        // 2. 同一行，合并列
        // 3. 不同行，不同列合并

        // 同一行，合并列
        const rIndex = er - sr // 0 er =0 sr =0
        const cIndex = ec - sc // 1  ec =2 sc =1
        if (rIndex === 0 && cIndex > 0) {
          // 同一行，合并列
          for (let i = 0; i <= cIndex; i++) {
            if (i === 0) {
              res.push({
                conditionRow: sr,
                conditionColumn: sc,
                colspan: cIndex + 1,
                rowspan: 1
              })
            } else {
              res.push({
                conditionRow: sr,
                conditionColumn: sc + i,
                colspan: 0,
                rowspan: 1
              })
            }
          }
        } else if (rIndex > 0 && cIndex === 0) {
          // 同一列，合并行
          for (let j = 0; j <= rIndex; j++) {
            if (j === 0) {
              res.push({
                conditionRow: sr,
                conditionColumn: sc,
                colspan: 1,
                rowspan: rIndex + 1
              })
            } else {
              res.push({
                conditionRow: sr + j,
                conditionColumn: sc,
                colspan: 1,
                rowspan: 0
              })
            }
          }
        } else if (rIndex > 0 && rIndex > 0) {
          // 不同行，不同列
          for (let i = 0; i <= rIndex; i++) {
            for (let j = 0; j <= cIndex; j++) {
              if (i === 0 && j === 0) {
                res.push({
                  conditionRow: sr + i,
                  conditionColumn: sc + j,
                  colspan: ec - sc + 1,
                  rowspan: er - sr + 1
                })
              } else {
                res.push({
                  conditionRow: sr + i,
                  conditionColumn: sc + j,
                  colspan: 0,
                  rowspan: 1
                })
              }
            }
          }
        }
      })
      return res
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (this.spanInfo.length === 0) {
        return [1, 1]
      } else {
        let res = [1, 1]
        const parseSpanInfoArray = this.parseSpanInfo(this.spanInfo)
        for (let i = 0; i < parseSpanInfoArray.length; i++) {
          const item = parseSpanInfoArray[i]
          if (columnIndex === item.conditionColumn) {
            if (rowIndex === item.conditionRow) {
              res = [item.rowspan, item.colspan]
            }
          }
        }
        return res
      }
    },
    objectSpanMethod1({ row, column, rowIndex, columnIndex }) {
      // if (columnIndex === 0) {
      //   if (rowIndex === 0) {
      //     return {
      //       rowspan: 2,
      //       colspan: 1
      //     }
      //   } else {
      //     return {
      //       rowspan: 1,
      //       colspan: 1
      //     }
      //   }
      // }
      // return [1, 1]
      // if (columnIndex === 1) {
      //   if (rowIndex === 0) {
      //     return {
      //       rowspan: 1,
      //       colspan: 2
      //     }
      //   } else if() {

      //   }
      // 同一行，合并列
      // 合并第一行，第2，3列
      // if (rowIndex === 0) {
      //   if (columnIndex === 1) {
      //     return {
      //       rowspan: 1,
      //       colspan: 2
      //     }
      //   } else if (columnIndex === 2) {
      //     return {
      //       rowspan: 1,
      //       colspan: 0
      //     }
      //   }
      // }
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 2,
            colspan: 2
          }
        } else if (rowIndex === 1) {
          return {
            rowspan: 0,
            colspan: 1
          }
        }
      } else if (columnIndex === 1) {
        if (rowIndex === 0) {
          return {
            rowspan: 0,
            colspan: 1
          }
        } else if (rowIndex === 1) {
          return {
            rowspan: 0,
            colspan: 1
          }
        }
      }

      // 同一列，合并行
      // if (columnIndex === 0) {
      //   if (rowIndex === 0) {
      //     return {
      //       rowspan: 3,
      //       colspan: 1
      //     }
      //   } else if (rowIndex === 1) {
      //     return {
      //       rowspan: 0, // 0 是指删除那一行
      //       colspan: 0
      //     }
      //   } else if (rowIndex === 2) {
      //     return {
      //       rowspan: 0, // 0 是指删除那一行
      //       colspan: 0
      //     }
      //   } else {
      //     return {
      //       rowspan: 1, // 0 是指删除那一行
      //       colspan: 1
      //     }
      //   }
      // } else {
      //   return {
      //     rowspan: 1, // 1 是什么都不做
      //     colspan: 1
      //   }
      // }
    }
  }
}
</script>
