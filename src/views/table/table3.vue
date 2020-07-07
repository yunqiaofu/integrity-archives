<template>
  <el-table
    :data="tableData"
    class="tb-edit"
    border
    style="width: 100%"
    highlight-current-row
  >
    <el-table-column
      label="操作"
      width="50"
    >
      <template scope="scope">
        <i
          style="color:#F56C6C"
          class="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="受惩处时间"
      width="180"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.time"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="所受处分"
      width="180"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.disposition"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="organization"
      label="受处分原因"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.dispositionReasons"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="dispositionOrgans"
      label="惩处机关"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.dispositionOrgans"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="symbol"
      label="文号"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.symbol"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="agency"
      label="备注"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.desc"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <div
      slot="append"
      style="cursor: pointer;line-height: 30px;text-align:center;"
      @click="handleAddLine"
    >
      <i class="el-icon-circle-plus-outline" />
      添加一行
    </div>
  </el-table>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    tableData () {
      return this.$store.getters.getPunishment
    }
  },
  methods: {
    handleDelete (index, row) {
      if (this.tableData.length > 1) {
        this.tableData.splice(index, 1)
      } else {
        this.$message({
          type: 'info',
          message: '已经是最后一个了,不能再删了'
        })
      }
    },
    handleAddLine () {
      this.tableData.push({
        time: '',
        disposition: '', // 所受处分
        dispositionReasons: '', // 所受处分原因
        dispositionOrgans: '', // 所受处分机关
        symbol: '', // 文号
        desc: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
