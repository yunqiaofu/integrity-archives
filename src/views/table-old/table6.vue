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
      label="起止日期(起)"
      width="180"
    >
      <template scope="scope">
        <el-date-picker
          v-model="scope.row.startTime"
          style="width:150px"
          type="date"
          value-format="timestamp"
          placeholder="选择时间"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="起止日期(止)"
      width="180"
    >
      <template scope="scope">
        <el-date-picker
          v-model="scope.row.endTime"
          style="width:150px"
          type="date"
          value-format="timestamp"
          placeholder="选择时间"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="所到国家(地区)"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.country"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="出国(境)事由"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.reasons"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="审批机构"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.approvalAuthority"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="委托代办机构"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.agency"
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
      return this.$store.getters.getTravelAbroad
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
        startTime: '',
        endTime: '',
        country: '',
        reasons: '', // 出国事由
        approvalAuthority: '', // 审批机构
        agency: ''// 代办机构
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
