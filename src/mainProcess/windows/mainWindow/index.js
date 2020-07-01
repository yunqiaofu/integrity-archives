import { app, BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

class MainWindow {
  constructor (win) {
    // win代表electron窗口实例
    // win is this electron window instance
    this.win = win
  }

  initBrowserPage () {
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      this.win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
      if (!process.env.IS_TEST) {
        // 开发环境下自启动开发者工具
        // start developer tools in the development environment
        this.win.webContents.openDevTools({ mode: 'right' })
      }
    } else {
      createProtocol('app')
      this.win.loadURL('app://./index.html')
    }

    this.win.on('closed', () => {
      this.win = null
    })
  }

  createWindow () {
    if (!this.win) {
      this.win = new BrowserWindow({
        width: 1100,
        height: 770,
        minWidth: 1100,
        minHeight: 770,
        webPreferences: {
          // 设为false允许跨域
          webSecurity: false,
          nodeIntegration: true
          // eslint-disable-next-line no-undef
          // preload: './preload.js'
        },
        // eslint-disable-next-line no-undef
        // icon: `${__static}/app.ico`,
        frame: true
      })

      // 初始化浏览器页面
      this.initBrowserPage()

      // 设置窗口菜单
      this.setWindowMenu()
    }
  }

  setWindowMenu () {
    if (process.platform === 'darwin') {
      const template = [
        {
          label: app.getName(),
          submenu: [
            { label: `关于${app.getName()}`, role: 'about', accelerator: 'Command+I' },
            { label: '隐藏', role: 'hide' },
            { type: 'separator' },
            { label: '退出', role: 'quit', accelerator: 'Command+Q' }
          ]
        }
      ]
      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)
    } else {
      Menu.setApplicationMenu(null)
    }
  }
}

export default MainWindow
