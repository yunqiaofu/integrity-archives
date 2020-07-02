<template>
  <div style="text-align: center;">
    <div>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            />
          </el-col>
          <el-col
            class="line"
            :span="2"
          >
            -
          </el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="form.date2"
              placeholder="选择时间"
              style="width: 100%;"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox
              label="美食/餐厅线上活动"
              name="type"
            />
            <el-checkbox
              label="地推活动"
              name="type"
            />
            <el-checkbox
              label="线下主题活动"
              name="type"
            />
            <el-checkbox
              label="单纯品牌曝光"
              name="type"
            />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input
            v-model="form.desc"
            type="textarea"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >
            立即创建
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-upload
      class="avatar-uploader"
      action="http://xxx.com"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img
        v-if="form.imageUrl"
        :src="form.imageUrl"
        class="avatar"
      >
      <i
        v-else
        class="el-icon-plus avatar-uploader-icon"
      />
    </el-upload>
    <div
      class="home-button app-action-button"
      @click="loadAsyncZip"
    >
      读取文件
    </div>
    <div
      class="home-button app-action-button"
      @click="downloadZip"
    >
      下载
    </div>
    <!-- <div style="display: flex; justify-content: center;">
      <div
        class="home-button app-action-button"
        @click="openDialogByRemote"
      >
        {{ $t("Click Me!") }}
      </div>
      <div
        class="home-button app-action-button"
        @click="openDialogByIpc"
      >
        Click Me!!!
      </div>
    </div>-->
  </div>
</template>

<script>
var JSZip = require('jszip')
const fs = require('fs')
export default {
  data () {
    return {
      form: {
        name: '',
        imageUrl: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    openDialogByRemote () {
      this.$dialog.showMessageBox({
        title: '你好',
        message: '来自主进程的消息：',
        detail: '我是来自主进程的dialog，使用remote过来的！',
        type: 'info'
      })
    },
    openDialogByIpc () {
      this.$ipc.send('showDialog', `<${this.$t('a message')}>`)
    },
    onSubmit () {
      console.log('submit!', this.form)
    },
    // 图片上传
    handleAvatarSuccess (res, file) {
      console.log('🐛:: handleAvatarSuccess -> file', file.raw)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    downloadZip () {
      // 初始化一个zip打包对象
      var zip = new JSZip()
      // 创建一个被用来打包的名为Hello.txt的文件
      zip.file('user.json', '{"a":"1","b":[{"c":2,"d":"3"}]}')
      zip.file('password', '123456')
      // 创建一个名为images的新的文件目录
      // var img = zip.folder('images')
      // 这个images文件目录中创建一个base64数据为imgData的图像，图像名是smile.gif
      // img.file('smile.gif', imgData, { base64: true })
      // 把打包内容异步转成blob二进制格式
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        var filename = new Date() + '.wt'
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a')
        eleLink.download = filename
        eleLink.style.display = 'none'
        // 下载内容转变成blob地址
        eleLink.href = URL.createObjectURL(content)
        // 触发点击
        document.body.appendChild(eleLink)
        eleLink.click()
        // 然后移除
        document.body.removeChild(eleLink)
      })
    },
    loadAsyncZip (defaultpath, callback) {
      const self = this
      const files = this.$dialog.showOpenDialog({
        filters: [{ name: 'WT', extensions: ['wt'] }],
        properties: ['openFile']
      })
      let text = ''
      if (files) {
        files.then(res => {
          // const buf = Buffer.alloc(1024)
          const path = res.filePaths[0]
          fs.readFile(path, function (err, data) {
            if (err) throw err
            JSZip.loadAsync(data).then(function (zip) {
              console.log('🐛:: loadAsyncZip -> zip', zip, zip.files)
              if (zip.files && zip.files.password) {
                zip.files.password.async('text').then(pwd => {
                  self
                    .$prompt('请输入文件密码', '密码输入', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消'
                    })
                    .then(({ value }) => {
                      if (String(value) === String(pwd)) {
                        self.$message({
                          type: 'success',
                          message: '密码正确: ' + value
                        })
                        zip.files['user.json'].async('text').then(res => {
                          text = res
                        })
                      } else {
                        self.$message({
                          type: 'error',
                          message: '密码错误'
                        })
                      }
                    })
                    .catch(() => {
                      self.$message({
                        type: 'info',
                        message: '取消输入'
                      })
                    })
                })
              } else {
                zip.files['user.json'].async('text').then(res => {
                  text = res
                })
              }
              if (text) {
                console.log('🐛:: loadAsyncZip -> text', text)
                const jsonData = JSON.parse(res)
                console.log(jsonData)
              }
            })
          })
        })
      }
    }
  }
}
</script>

<style>
.home-button {
  background-color: #263238;
  opacity: 1;
  border-radius: 4px;
  cursor: pointer;
  height: 45px;
  width: 150px;
  margin: 10px 10px;
  text-align: center;
  line-height: 45px;
}
</style>
