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
      tableLength: 0 // 1 table的列数
    }
  },
  mounted() {
  },
  methods: {
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
      var sheetNames = workbook.SheetNames // 工作表名称集合
      var worksheet = workbook.Sheets[sheetNames[0]] // 这里我们只读取第一张sheet
      console.log(worksheet)
      const excelInfoKey = '!ref'
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
            this.tableHeaders = this.gengerateTableHeaders(res[0])
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
