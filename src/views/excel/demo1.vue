<template>
  <div>
    <div>
      <el-button type="primary" @click="selectFile">
        上传本地文件
      </el-button>
    </div>
    <input
      id="file"
      ref="file"
      type="file"
      style="display:none;"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      @change="change"
    >
    <div>
      <h1>table</h1>
      <el-table
        :data="tableData"
        :span-method="arraySpanMethod"
        style="width: 100%"
        border
        size="small"
      >
        <el-table-column
          v-for="(headers,$index) in tableHeaders"
          :key="$index"
          show-overflow-tooltip
          :prop="headers"
          align="center"
          :label="headers"
          min-width="100"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
// import csv1 from './demo1.csv'
import _ from 'lodash'
export default {
  name: 'ExcelDemo',
  data() {
    return {
      excelHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      tableHeaders: [],
      tableData: [],
      tableLength: 0, // 1 table的列数
      numberTitle: '行号',
      spanInfo: [] // 表格返回的合并单元格的信息
    }
  },
  mounted() {
  },
  methods: {
    parseSpanInfo(spanInfo) {
      const res = []
      spanInfo.map(item => {
        const s = item.s
        const e = item.e
        const sc = s.c // clolumn
        const sr = s.r // row
        const ec = e.c
        const er = e.r
        res.push({
          conditionRow: sr,
          conditionColumn: sc + 1,
          colspan: ec - sc + 1,
          rowspan: er - sr + 1
        })

        // if ((ec - sc) === 0) {
        //   // 同一列，不同的行，属于行合并单元格
        //   res.push({
        //     conditionColumn: sc + 1, // 条件是列
        //     conditionRow: sr,
        //     colspan: 1,
        //     rowspan: er - sr + 1
        //   })
        // } else if ((ec - sc) > 0) {
        //   // 当行不一样的时候，分2中情况
        //   // 1. 属于一列
        //   // 2. 不属于同一列
        //   if ((er - sr) === 0) {
        //     // // 1. 属于一行
        //     res.push({
        //       conditionRow: sr,
        //       conditionColumn: sc + 1,
        //       colspan: ec - sc + 1,
        //       rowspan: 1
        //     })
        //   } else if ((er - sr) > 0) {
        //     // 2. 不属于同一行
        //     // 应该是先合并列，再合并行
        //     // const lenR = er - sr
        //     res.push({
        //       conditionRow: sr,
        //       conditionColumn: sc + 1,
        //       colspan: ec - sc + 1,
        //       rowspan: er - sr + 1
        //     })
        //   }
        // }
      })
      return res
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
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
    initTableHeasers() {
      const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      const arrCopy = _.clone(arr)
      arrCopy.map(i => {
        arrCopy.map(j => {
          arr.push(`${i}${j}`)
        })
      })
      this.excelHeaders = arr
      return arr
    },
    selectFile() {
      this.$refs.file.click()
      console.log(this.$refs.file)
    },
    change(ev) {
      var files = ev.target.files
      if (files.length === 0) return
      var f = files[0]
      if (!/\.xlsx$/g.test(f.name)) {
        this.$message.error('仅支持读取xlsx格式！')
        return
      }
      this.readWorkbookFromLocalFile(f, (workbook) => {
        this.tableHeaders = []
        this.tableData = []
        this.readWorkbook(workbook)
      })
    },
    readWorkbookFromLocalFile(file, callback) {
      var reader = new FileReader()
      reader.onload = function(e) {
        console.log(e)
        var data = e.target.result
        var workbook = XLSX.read(data, { type: 'binary' })
        if (callback) callback(workbook)
      }
      reader.readAsBinaryString(file)
    },
    splitExcelTitle(t) {
      // A1 =>[A,1]
      // AA1 =>[AA,1]
      //
      // 写一个数字正则
      const reg = /[1-9]\d*$/
      const match = t.match(reg)
      if (match) {
        if (match.index) {
          return [t.slice(0, match.index), t.slice(match.index)]
        }
      } else {
        return []
      }
    },
    gengerateTableData(worksheet) {
      const res = []
      const tableLength = this.tableLength
      const tableHeaders = this.tableHeaders
      for (let i = 0; i < tableLength; i++) {
        const obj = {}
        tableHeaders.map(headers => {
          obj[headers] = ''

          if (headers === this.numberTitle) {
            obj[headers] = i + 1
          }
          const worksheetKey = String(headers + (i + 1))
          if (worksheet[worksheetKey]) {
            obj[headers] = worksheet[worksheetKey].v
          }
        })
        res.push(obj)
      }
      this.tableData = res
      return res
    },
    gengerateTableHeaders(t) {
      const index = this.excelHeaders.indexOf(t)
      const arr = this.excelHeaders.slice(0, index + 1)
      return arr
    },
    readWorkbook(workbook) {
      console.log(workbook)
      this.tableHeaders = []
      this.tableData = []
      this.spanInfo = []
      var sheetNames = workbook.SheetNames // 工作表名称集合
      var worksheet = workbook.Sheets[sheetNames[0]] // 这里我们只读取第一张sheet
      console.log(worksheet)
      const excelInfoKey = '!ref'
      const excelMerges = '!merges'

      if (worksheet[excelInfoKey]) {
        this.spanInfo = worksheet[excelMerges] || []
        const excelInfo = worksheet[excelInfoKey].split(':')
        let excelInfoInfo = ''
        if (typeof (excelInfo) === 'string') {
          excelInfoInfo = excelInfo
        } else {
          if (excelInfo.length === 2) {
            excelInfoInfo = excelInfo[1]
          } else if (excelInfo.length === 1) {
            excelInfoInfo = excelInfo[0]
          }
        }
        if (excelInfoInfo) {
          const res = this.splitExcelTitle(excelInfoInfo)
          if (res.length > 0) {
            const tableHeaders = this.gengerateTableHeaders(res[0])
            tableHeaders.unshift(this.numberTitle)
            this.tableHeaders = tableHeaders // 在表格前面加一列，显示 1，2，3，4
            this.tableLength = res[1]
            this.gengerateTableData(worksheet)
          }
        }
        console.log(excelInfoInfo)
        console.log(this.tableHeaders)
        console.log(this.tableData)
      } else {
        console.log('是一张空表格')
      }
    }
  }
}
</script>

<style>

</style>
