<template>
  <el-card class="main">
    <div class="main-item">
      <h2>&emsp;基本信息</h2>
      <Basic />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="skill">
      <h2>&emsp;职业技能</h2>
      <Skill />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="education">
      <h2>&emsp;教育经历</h2>
      <Education />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="work">
      <h2>&emsp;工作经历</h2>
      <Work />
    </div>
    <el-divider></el-divider>
    <div class="main-item" id="production">
      <h2>&emsp;个人作品</h2>
      <Production />
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Basic from "./MainItem/Basic.vue";
import Education from "./MainItem/Education.vue";
import Skill from "./MainItem/Skill.vue";
import Work from "./MainItem/Work.vue";
import Production from "./MainItem/Production.vue";

@Component({
  components: {
    Basic,
    Education,
    Skill,
    Work,
    Production,
  },
})
export default class Main extends Vue {}
</script>

<style lang="less" scope>
.main {
  width: 100%;
  background-color: #fff;
  padding: 20px 25px;
  .main-item {
    width: 100%;
    > h2 {
      color: #505050;
      margin-bottom: 33px;
    }
  }
}
</style>
