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
        <el-tooltip
          class="item"
          effect="dark"
          :content="item.note"
        >
          <i class="el-icon-question" />
        </el-tooltip>
        <el-radio
          v-model="tableStatus[item.content]"
          label="1"
          style="margin-left:30px"
        >
          有此类情况
        </el-radio>
        <el-radio
          v-model="tableStatus[item.content]"
          label="2"
        >
          无此类情况
        </el-radio>
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
// import table8 from './table/table8'
// import table9 from './table/table9'
// import table10 from './table/table10'
// import table11 from './table/table11'
// import table12 from './table/table12'
// import table13 from './table/table13'
// import table14 from './table/table14'
// import table15 from './table/table15'
export default {
  components: {
    userInfo,
    table1,
    table2,
    table3,
    table4,
    table5,
    table6,
    table7
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
          desc: '本人、配偶、共同生活子女为所有权人或共有人的房屋出售情况',
          note: '说明：填报时，应先在表格上方选择 "有此类情况”或“无此类情况”，有出售情况逐项填写。房产性质和功能类型主要包括商品房、福利房、经济适用房、限价房、自建房以及有单独产权证书的车库、车位、储藏间等。厂房、商铺、酒店式公寓等房产，也需要填报。',
          content: 'table1'
        },
        {
          title: '表2',
          desc: '本人、配偶、共同生活子女为所有权人或共有人的未办证房产情况',
          note: '说明：填报时，应先在表格上方选择 "有此类情况”或“无此类情况”，有未办证房产情况逐项填写（因尚未取得不动产权证、以经备案的房屋买卖合同记载信息为准）。房产性质和功能类型主要包括商品房、福利房、经济适用房、限价房、自建房以及有单独产权证书的车库、车位、储藏间等。厂房、商铺、酒店式公寓等房产，也需要填报。',
          content: 'table2'
        },
        {
          title: '表3',
          desc: '本人、配偶、共同生活的子女为所有权人或共有人的宅基地情况',
          note: '说明：填报时，应先在表格上方选择 "有此类情况”或“无此类情况”，有此类情况的逐项填写。',
          content: 'table3'
        },
        {
          title: '表4',
          desc: '本人、配偶、共同生活的子女投资或者以其他方式持有股票的情况',
          note: '说明：填报时，应先在表格上方选择 "有此类情况”或“无此类情况”，②有此类情况的，应逐人、逐只填写持有的所有股票的名称或代码、持股数量、填报前一交易日收盘时的市值（市值=单只持股数量×收盘时股价），并合计填写填报前一交易日所有股票的总市值。③通过“港股通”购买的股票，也需要填报。开通融资融券账户购买的股票，应当在“备注”栏注明融资融券使用额度等情况。',
          content: 'table4'
        },
        {
          title: '表5',
          desc: '本人、配偶、共同生活的子女投资或者以其他方式持有基金的情况',
          note: '说明：填报时，①应先在表格上方选择 "有此类情况”或“无此类情况”；②有此类情况的，应逐人、逐只填写持有的所有基金的名称或代码、份额、填报前一交易日收盘时的净值（净值=单只基金份数×收盘时单位净值），并合计填写填报前一交易日所有基金的总净值。③通过证券公司、商业银行、互联网等各类基金销售机构购买的理财产品中属于基金的产品（含以理财形式为名的各种形式的集合资产管理计划，如股票账户资金余额自动转购的基金等），均需填报。',
          content: 'table5'
        },
        {
          title: '表6',
          desc: '本人、配偶、共同生活的子女投资或者以其他方式持有期货的情况',
          note: '说明：填报时，①应先在表格上方选择 "有此类情况”或“无此类情况”；②有此类情况的，应逐人、逐只填写持有的所有期货的名称或代码、份额、填报前一交易日收盘时的净值（净值=单只期货份数×收盘时单位净值），并合计填写填报前一交易日所有期货的总净值。',
          content: 'table6'
        },
        {
          title: '表7',
          desc: '近亲属情况',
          note: '说明：①本人、配偶、子女；②本人和配偶的父母；③本人和配偶的兄弟姐妹及配偶；④本人和配偶的兄弟姐妹的子女。',
          content: 'table7'
        }
        // {
        //   title: '表8',
        //   desc: '子女与港澳以及台湾居民通婚的情况',
        //   content: 'table8'
        // },
        // {
        //   title: '表9',
        //   desc: '配偶、子女移居国(境)外的情况',
        //   content: 'table9'
        // },
        // {
        //   title: '表10',
        //   desc: '配偶、子女从业情况',
        //   content: 'table10'
        // },
        // {
        //   title: '表11',
        //   desc: '配偶、子女被司法机关追究刑事责任的情况',
        //   content: 'table11'
        // },
        // {
        //   title: '表12',
        //   desc: '本人、配偶、共同生活的子女的房产情况',
        //   content: 'table12'
        // },
        // {
        //   title: '表13',
        //   desc: '本人、配偶、共同生活的子女注册个体工商户、个人独资企业或合伙企业的情况',
        //   content: 'table13'
        // },
        // {
        //   title: '表14',
        //   desc: '本人和配偶车辆情况',
        //   content: 'table14'
        // },
        // {
        //   title: '其他事项',
        //   desc: '个人认为需要报告的其他事项',
        //   content: 'table15'
        // }
      ]
    }
  },
  computed: {
    tableStatus () {
      return this.$store.getters.getTableStatus
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
