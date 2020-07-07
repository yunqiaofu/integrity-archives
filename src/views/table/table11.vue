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
      label="称谓"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.title"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.name"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="被追究时间"
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
      label="被追究刑事责任原因"
      width="180"
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
      label="处理阶段"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.status"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="处理结果"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.result"
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
      return this.$store.getters.getCriminal
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
        title: '', // 称谓
        name: '', // 姓名
        time: '', // 被追究时间
        reasons: '', // 被追究责任原因
        status: '', // 处理阶段
        result: '' // 处理结果
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
