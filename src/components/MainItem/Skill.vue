<template>
  <div class="skill">
    <div class="skill-item" v-for="item in skills" :key="item.type">
      <p>{{ item.type }}</p>
      <el-rate
        :value="item.score"
        disabled
        :max="10"
        show-score
        text-color="#1F2D3D"
      >
      </el-rate>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Skill extends Vue {
  @State("skills") skills!: object[];
}
</script>

<style lang="less" scope>
.skill {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .skill-item {
    height: 80px;
    width: 50%;
    p {
      margin: 10px 0;
      font-weight: bolder;
    }
  }
}
</style>
