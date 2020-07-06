
# 🔥廉情信息报告表
⭐Using `vue-cli 3` and `Electron 9` built a modular desktop application template. Convenient packaging and program language switching,  with a custom borderless window, including `vue-router`, `vue-i18n`, `axios`, `electron-builder` and more common components, as well as some demo functions.

![npm](https://img.shields.io/npm/v/@vue/cli?color=aa&label=vue-cli)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Pure-Peace/vue-cli-electron-template?color=yellow&logo=yellow&logoColor=yellow)
[![Build Status](https://ci.appveyor.com/api/projects/status/3302543ktgu1f071?svg=true)](https://ci.appveyor.com/project/xkloveme/vue-electron-temp)
[![codebeat badge](https://codebeat.co/badges/ee804451-ff1f-4e2f-9858-b0b3e2d96a3f)](https://codebeat.co/projects/github-com-pure-peace-vue-cli-electron-template-master)
![license](https://img.shields.io/badge/license-MIT-000000.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Pure-Peace/vue-cli-electron-template?color=aa&label=Lightweight&logo=aa&logoColor=aa)
![GitHub last commit](https://img.shields.io/github/last-commit/Pure-Peace/vue-cli-electron-template)


<h2 align="center">⚡-Introduction-</h2>

🚀A lightweight, modular template. Added common plugins and demo features. You can happily use the `svg` icon in this project, use the `i18n` multi-language comfortably, switch the application language (including the native components and the browser page), make network requests more convenient.

[Document](https://github.com/Pure-Peace/vue-cli-electron-template/wiki)

## 📘These:
- 🍊Basic: `vue-cli` &` electron-builder`
- 🌕Router: `vue-router`
- 🍁Multilingual: `vue-i18n`
- 🌝Network Requester: `axios`
- 🚅Quick package: `electron-builder`
- 💚css preprocessor: `less`

## 🔍And:
- ⛅A custom window without native borders
- 🎨Modular design with object-oriented writing (mainProcess)
- 🍰Language switching for the entire program
- 🐳An svg component based on `svg-sprite-loader`
- 🏀`Electron 8`: Demo of some apis.
- 🍉`vue-i18n`: Added demonstration of language switching, including language switching effect of `electron` native menu.
- 🍩`axios`: Added request demo.
- 🌼Use `ESlint` for code style specification.
- 🌠and `vuex`, `vue-router`
- 🍖I did not use any ui library, you can add as you like.



<h2 align="center">🏆-Start-</h2>

- `&` = `or`

 1. **🍬Clone this repository**


 2. **🍮Enter the directory**
 
```bash
cd vue-cli-electron-template
```

 3. **🍙Install dependencies (yarn is recommended)**
 
```bash
yarn & npm install
```

 4. **🌽Start application**
 
```bash
yarn go & npm run go
```

 5. **🍭Packaging**
 
```bash
yarn packapp & npm run packapp
```


<h2 align="center">🍌-Structure-</h2>

**⚽files:**

- 🎰`./vue.config.js`: Contains **vue path alias**,` electron-builder`, `i18n` and other related configurations.
- ☔`src/background.js`: **Main process** entry file.
- 🐐`src/mainProcess/appManager.js`: Management of the **main process**.
- 🚧`src/main.js`: Vue entry file.
- 🏨`src/backend.js`: network request interface and` axios` configuration.

**🍀Directories:**

- 🌲`src/locales`: `i18n` language translation file directory.
- 🐓`src/mainProcess`: Main process modular file directory.
- 🙀`src/mainProcess/events`: ipc and app event manager.
- 🌴`src/mainProcess/menus`: Menu manager.
- 🐏`src/mainProcess/plugins`: Currently only translator.
- 🙉`src/mainProcess/windows`: windows and windows manager.

---
## 🌹Thanks
