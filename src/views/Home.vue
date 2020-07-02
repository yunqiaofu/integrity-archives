<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    size="mini"
  >
    <el-tab-pane
      v-for="(item,i) in editableTabs"
      :key="i++"
      :label="item.title"
      :name="item.name"
    >
      <component :is="item.content" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import userInfo from './userInfo'
import table1 from './table/table1'
export default {
  components: { userInfo, table1 },
  data () {
    return {
      editableTabsValue: '0',
      editableTabs: [{
        title: '基本信息',
        content: 'userInfo'
      }, {
        title: '表1',
        content: 'table1'
      }, {
        title: '表2',
        content: 'table1'
      }, {
        title: '表3',
        content: 'table1'
      }, {
        title: '表4',
        content: 'table1'
      }, {
        title: '表5',
        content: 'table1'
      }, {
        title: '表6',
        content: 'table1'
      }, {
        title: '表7',
        content: 'table1'
      }, {
        title: '表8',
        content: 'table1'
      }, {
        title: '表9',
        content: 'table1'
      }, {
        title: '表10',
        content: 'table1'
      }, {
        title: '表11',
        content: 'table1'
      }, {
        title: '表12',
        content: 'table1'
      }, {
        title: '表13',
        content: 'table1'
      }, {
        title: '表14',
        content: 'table1'
      }, {
        title: '其他事项',
        content: 'table1'
      }]
    }
  },
  mounted () {
    // 监听与主进程的通信
    this.$ipc.on('action', (event, arg) => {
      switch (arg) {
        case 'open': // 打开文件
          console.log('open')
          break
        case 'about': // 关于
          console.log('about')
          break
        case 'save': // 保存
          console.log('save')
          break
        case 'newSave': // 另存为
          console.log('newSave')
          break
      }
    })
  },
  methods: {
  }
}
</script>
