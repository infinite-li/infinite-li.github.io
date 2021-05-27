<template>
  <div class="home">
    <div class="home-left">
      <Message />
    </div>
    <div class="home-center">
      <Main />
    </div>
    <div class="home-right"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Message from "@/components/Message.vue";
import Main from "@/components/Main.vue";
@Component({
  components: {
    Message,
    Main,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.home {
  width: 99.9%;
  position: relative;
  .home-left {
    width: 290px;
    height: 520px;
    position: fixed;
    left: 10px;
  }
  .home-center {
    width: 900px;
    margin: 30px auto;
    border: 1px solid red;
  }
}
</style>
