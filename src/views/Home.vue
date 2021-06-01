<template>
  <div class="home" id="basic">
    <div class="home-left">
      <Message />
    </div>
    <div class="home-center">
      <Main />
      <div class="copyright">
        Copyright © 2021 All Rights Reserved of
        <a href="https://913563848.github.io/" target="_blank">Github</a>
      </div>
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Message from "../components/Message.vue";
import Main from "../components/Main.vue";
import Sidebar from "../components/Sidebar.vue";
@Component({
  components: {
    Message,
    Main,
    Sidebar,
  },
})
export default class Home extends Vue {
  @State("name") name!: string;
  created() {
    document.title = this.name ? this.name : "Mr Li" + " 的简历";
  }
}
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

    .copyright {
      background-color: #e1ffff;
      padding-top: 20px;
      text-align: center;
      > a {
        color: #303133;
        text-decoration: none;
      }
    }
  }
  .sidebar {
    width: 54px;
    height: 520px;
    background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
    position: fixed;
    top: 30px;
    right: 25px;
  }
}
</style>
