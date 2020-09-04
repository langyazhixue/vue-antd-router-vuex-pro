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
          min-width="140"
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
  created() {
    this.initTableHeasers()
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
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(rowIndex)
      // console.log(columnIndex)
      if (this.spanInfo.length === 0) {
        return [1, 1]
      } else {
        let res = [1, 1]
        const parseSpanInfoArray = this.parseSpanInfo(this.spanInfo)
        for (let i = 0; i < parseSpanInfoArray.length; i++) {
          const item = parseSpanInfoArray[i]
          if (rowIndex === item.conditionRow) {
            if (columnIndex === item.conditionColumn) {
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
            // tableHeaders.unshift(this.numberTitle)
            this.tableHeaders = tableHeaders // 在表格前面加一列，显示 1，2，3，4
            this.tableLength = res[1]
            this.gengerateTableData(worksheet)
          }
        }
        console.log(excelInfoInfo)
        console.log(this.tableHeaders)
        console.log(this.tableData)
        this.$nextTick(() => {
          setTimeout(() => {
            this.spanInfo = worksheet[excelMerges] || []
          }, 200)
        })
      } else {
        console.log('是一张空表格')
      }
    }
  }
}
</script>

<style>

</style>
