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
      label="产权人"
      width="180"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.people"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="与本人关系"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.relationship"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="organization"
      label="房产来源(去向)"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.source"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="具体地址"
      width="180"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.address"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="建筑面积(m²)"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.area"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="产权性质"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.propertyNature"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="交易时间"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.transactionTime"
          size="small"
          placeholder="请输入内容"
        />
      </template>
    </el-table-column>
    <el-table-column
      label="交易价格(万)"
    >
      <template scope="scope">
        <el-input
          v-model="scope.row.transactionPrice"
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
      return this.$store.getters.getRecommendation
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
        people: '', // 产权人
        relationship: '', // 与本人关系
        source: '', // 房产来源
        address: '', // 具体地址
        area: '', // 建筑面积
        propertyNature: '', // 产权性质
        transactionTime: '', // 交易时间
        transactionPrice: '' // 交易价格
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
