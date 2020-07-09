<template>
  <div style="text-align: center;">
    <h2>
      报告人基本情况
      <el-tooltip
        class="item"
        effect="dark"
        content="说明：①工作单位应填写全称或规范简称，同时担任多个职务的，请逐个分行填写。②身份证号码应填写18位公民身份号码。③领导岗位填分管工作，非领导岗位填从事的主要工作。"
      >
        <i class="el-icon-question" />
      </el-tooltip>
    </h2>
    <div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-row :gutter="0">
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-select
                v-model="form.gender"
                clearable
                filterable
                placeholder="请选择"
              >
                <el-option
                  v-for="(item,i) in $utils.gender"
                  :key="item"
                  :label="item"
                  :value="i"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="民族">
              <el-select
                v-model="form.nation"
                clearable
                filterable
                placeholder="请选择"
              >
                <el-option
                  v-for="item in $utils.nation"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="政治面貌">
              <el-select
                v-model="form.politicsStatus"
                clearable
                filterable
                placeholder="请选择"
              >
                <el-option
                  v-for="(item,i) in $utils.politicsStatus"
                  :key="item"
                  :label="item"
                  :value="i"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="在职状态">
              <el-select
                v-model="form.workingStatus"
                clearable
                filterable
                placeholder="请选择"
              >
                <el-option
                  v-for="(item,i) in $utils.workingStatus"
                  :key="item"
                  :label="item"
                  :value="i"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="工作单位">
              <el-select
                v-model="form.employer"
                style="width:100%"
                clearable
                filterable
                placeholder="请选择"
              >
                <el-option
                  v-for="item in $utils.workOrganization"
                  :key="item.key"
                  :label="item.value"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="现任职务">
              <el-input v-model="form.duty" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-col :span="12">
          <el-form-item label="联系电话">
            <el-input v-model="form.phone" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号">
            <el-input v-model="form.idCard" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="从事或分管工作">
            <el-input v-model="form.work" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="住址">
            <el-input v-model="form.currentResidence" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input
              v-model="form.password"
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
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="确认密码"
            prop="checkPassword"
          >
            <el-input
              v-model="form.checkPassword"
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
        </el-col>

        <!-- <el-row :gutter="10">
          <el-col :span="20">
            <el-row>
              <el-col :span="12">
                <el-form-item label="工作单位">
                  <el-select
                    v-model="form.work"
                    style="width:100%"
                    placeholder="请选择"
                >
                    <el-option
                      v-for="item in $utils.workOrganization"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="现任职务">
                  <el-input v-model="form.duty" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工作部门">
                  <el-input v-model="form.department" />
                </el-form-item>
                <el-form-item label="入党时间">
                  <el-date-picker
                    v-model="form.partyTime"
                    type="month"
                    style="width:100%"
                    value-format="timestamp"
                    placeholder="选择年月"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="人员身份">
              <el-checkbox-group v-model="form.identity">
                <el-checkbox
                  v-for="(item,i) in $utils.identity"
                  :key="i+1"
                  :label="item"
                />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="户籍地址">
              <el-input      </el-form-item>
            <el-form-item label="现居住地">
              <el-input v-model="form.currentResidence" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
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
                fit="fit"
                @click="$refs.input.click()"
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
          </el-col>
        </el-row>
        <el-form-item label="个人简历">
          <el-input
            v-model="form.personalResume"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6 }"
          />
        </el-form-item>-->

        <!-- <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >
            立即创建
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>-->
      </el-form>
    </div>
    <!-- <work /> -->
  </div>
</template>

<script>
// import work from './work'
import db from './../db.js'
var JSZip = require('jszip')
const fs = require('fs')
export default {
  // components: { work },
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
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      passType: true,
      checkPassType: true,
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPassword: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  computed: {
    form () {
      return this.$store.getters.getUser
    }
  },
  mounted () {
    // 监听与主进程的通信
    this.$ipc.on('action', (event, arg) => {
      switch (arg) {
        case 'open': // 打开文件
          console.log('open')
          this.loadAsyncZip()
          break
        case 'about': // 关于
          console.log('about')
          this.openDialogByRemote()
          break
        case 'save': // 保存
          this.downloadZip()
          break
        case 'new': // 新建
          this.openNew()
          console.log('new')
          break
      }
    })
  },
  methods: {
    openDialogByRemote () {
      this.$dialog.showMessageBox({
        title: '廉情档案补采录入',
        message: '欢迎使用廉情档案补采录入',
        detail: '0.0.3',
        type: 'info'
      })
    },
    openDialogByIpc () {
      this.$ipc.send('showDialog', `<${this.$t('a message')}>`)
    },
    openNew () {
      this.$store.dispatch('updateUser', db)
    },
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('submit!', this.form)
        } else {
          this.$message({
            type: 'error',
            message: '请检查输入是否有误'
          })
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
      const self = this
      // 初始化一个zip打包对象
      var zip = new JSZip()
      // 创建一个被用来打包的文件
      zip.file('user.json', JSON.stringify(this.form))
      if (this.form.password) {
        zip.file('password', this.form.password)
      }
      // 创建一个名为images的新的文件目录
      // var img = zip.folder('images')
      // 这个images文件目录中创建一个base64数据为imgData的图像，图像名是smile.gif
      // img.file('smile.gif', imgData, { base64: true })
      // 把打包内容异步转成blob二进制格式
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        var filename = self.form.name + self.form.idCard + '.wt'
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
        const jsonData = JSON.parse(text)
        console.log(jsonData)
        this.$store.dispatch('updateUser', jsonData)
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
  height: 260px;
  line-height: 260px;
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
  display: block;
}
</style>
