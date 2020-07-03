<template>
  <div style="text-align: center;">
    <div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
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
        <el-form-item label="照片上传">
          <input
            ref="input"
            type="file"
            accept="image/*"
            style="display:none"
            @change="handleAvatarSuccess"
          >
          <div class="avatar-uploader">
            <el-image
              v-if="form.imageUrl"
              :src="form.imageUrl"
              class="avatar"
              :fit="fit"
            >
              <div
                slot="error"
                class="image-slot"
              >
                <i class="el-icon-picture-outline" />
              </div>
            </el-image>
            <i
              v-else
              class="el-icon-plus"
              @click="$refs.input.click()"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
        >
          <el-input
            v-model="form.pass"
            :type="passType?'password':'text'"
            autocomplete="off"
          >
            <el-button
              slot="append"
              icon="el-icon-view"
              @click="passType=!passType"
            />
          </el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="checkPass"
        >
          <el-input
            v-model="form.checkPass"
            :type="checkPassType?'password':'text'"
            autocomplete="off"
          >
            <el-button
              slot="append"
              icon="el-icon-view"
              @click="checkPassType=!checkPassType"
            />
          </el-input>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback()
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
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
        pass: '',
        checkPass: ''
      },
      passType: true,
      checkPassType: true,
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
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
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('submit!', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 图片上传
    handleAvatarSuccess (e) {
      var file = e.target.files[0] // 获取图片资源
      const self = this
      // 只选择图片文件
      if (!file.type.match('image.*')) {
        return false
      }

      var reader = new FileReader()

      reader.readAsDataURL(file) // 读取文件

      // 渲染文件
      reader.onload = function (arg) {
        console.log(arg.target.result)
        self.form.imageUrl = arg.target.result
      }
    },
    downloadZip () {
      // 初始化一个zip打包对象
      var zip = new JSZip()
      // 创建一个被用来打包的文件
      zip.file('user.json', JSON.stringify(this.form))
      if (this.form.pass) {
        zip.file('password', this.form.pass)
      }
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
                          message: '密码正确'
                        })
                        zip.files['user.json'].async('text').then(res => {
                          self.getJson(res)
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
                  self.getJson(res)
                })
              }
            })
          })
        })
      }
    },
    getJson (text) {
      if (text) {
        console.log('🐛:: loadAsyncZip -> text', text)
        const jsonData = JSON.parse(text)
        console.log(jsonData)
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
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
