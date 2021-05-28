<template>
  <el-card class="sidebar">
    <el-avatar
      :size="50"
      fit="scale-down"
      :src="src"
      @error="errorHandler"
      class="avatarImg"
    >
      <img :src="require('../assets/src.png')" />
    </el-avatar>
    <a href="#basic">
      <i class="el-icon-user" title="基本信息"></i>
    </a>
    <a href="#skill">
      <i class="el-icon-brush" title="职业技能"></i>
    </a>
    <a href="#education">
      <i class="el-icon-school" title="教育经历"></i>
    </a>
    <a href="#work">
      <i class="el-icon-suitcase" title="工作经历"></i>
    </a>
    <a href="#production">
      <i class="el-icon-trophy" title="个人作品"></i>
    </a>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Sidebar extends Vue {
  @State("avatar") src!: string;
  errorHandler() {
    return true;
  }
}
</script>

<style lang="less" scope>
.sidebar {
  width: 100%;
  height: 520px;
  > div {
    height: 100%;
    padding: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > a {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 30px;
      color: #999;
      &:hover {
        color: #000;
      }
    }
    .avatarImg {
      box-shadow: 0px 0px 1px grey;
    }
  }
}
</style>
