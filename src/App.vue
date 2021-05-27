<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-card {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
