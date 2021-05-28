<template>
  <div class="home">
    <div class="home-left">
      <Message />
    </div>
    <div class="home-center">
      <Main />
      <div class="copyright">
        Copyright © 2021 All Rights Reserved of
        <a href="https://913563848.github.io/" target="_blank">MengLong</a>
      </div>
      <div class="sidebar">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Message from "@/components/Message.vue";
import Main from "@/components/Main.vue";
import Sidebar from "@/components/Sidebar.vue";
@Component({
  components: {
    Message,
    Main,
    Sidebar,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.home {
  width: 99.9%;
  padding: 30px 10px;
  .home-left {
    width: 290px;
    height: 520px;
    position: fixed;
  }
  .home-center {
    background-color: #fff;
    color: #303133;
    width: 900px;
    margin: 0 auto;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    position: relative;
    .copyright {
      background-color: #e1ffff;
      padding-top: 20px;
      text-align: center;
      > a {
        color: #303133;
        text-decoration: none;
      }
    }
    .sidebar {
      width: 54px;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      top: 0;
      right: -30px;
    }
  }
}
</style>
