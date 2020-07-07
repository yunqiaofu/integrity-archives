<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="home-title"
  >
    <el-tab-pane
      v-for="(item,i) in editableTabs"
      :key="i++"
      :label="item.title"
      :name="item.name"
    >
      <p v-if="item.desc">
        {{ i-1 }}、{{ item.desc }}
      </p>
      <component :is="item.content" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import userInfo from './userInfo'
import table1 from './table/table1'
import table2 from './table/table2'
import table3 from './table/table3'
import table4 from './table/table4'
import table5 from './table/table5'
import table6 from './table/table6'
import table7 from './table/table7'
import table8 from './table/table8'
import table9 from './table/table9'
import table10 from './table/table10'
import table11 from './table/table11'
import table12 from './table/table12'
import table13 from './table/table13'
import table14 from './table/table14'
import table15 from './table/table15'
export default {
  components: {
    userInfo,
    table1,
    table2,
    table3,
    table4,
    table5,
    table6,
    table7,
    table8,
    table9,
    table10,
    table11,
    table12,
    table13,
    table14,
    table15
  },
  data () {
    return {
      editableTabsValue: '0',
      editableTabs: [
        {
          title: '基本信息',
          content: 'userInfo'
        },
        {
          title: '表1',
          desc: '年度考核情况',
          content: 'table1'
        },
        {
          title: '表2',
          desc: '评先评优情况',
          content: 'table2'
        },
        {
          title: '表3',
          desc: '本人受惩处情况',
          content: 'table3'
        },
        {
          title: '表4',
          desc: '本人的婚史变化情况',
          content: 'table4'
        },
        {
          title: '表5',
          desc: '本人持有因私出国(境)证件情况',
          content: 'table5'
        },
        {
          title: '表6',
          desc: '本人因私出国(境)情况',
          content: 'table6'
        },
        {
          title: '表7',
          desc: '子女与外国人、无国籍人通婚的情况',
          content: 'table7'
        },
        {
          title: '表8',
          desc: '子女与港澳以及台湾居民通婚的情况',
          content: 'table8'
        },
        {
          title: '表9',
          desc: '配偶、子女移居国(境)外的情况',
          content: 'table9'
        },
        {
          title: '表10',
          desc: '配偶、子女从业情况',
          content: 'table10'
        },
        {
          title: '表11',
          desc: '配偶、子女被司法机关追究刑事责任的情况',
          content: 'table11'
        },
        {
          title: '表12',
          desc: '本人、配偶、共同生活的子女的房产情况',
          content: 'table12'
        },
        {
          title: '表13',
          desc: '本人、配偶、共同生活的子女注册个体工商户、个人独资企业或合伙企业的情况',
          content: 'table13'
        },
        {
          title: '表14',
          desc: '本人和配偶车辆情况',
          content: 'table14'
        },
        {
          title: '其他事项',
          desc: '个人认为需要报告的其他事项',
          content: 'table15'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style >
.home-title > .is-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99;
}
.home-title > .el-tabs__content {
  margin-top: 50px;
}
</style>
