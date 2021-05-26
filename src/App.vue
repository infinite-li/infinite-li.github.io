<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}
#app {
  margin: 0 auto;
  text-align: center;
}
</style>
