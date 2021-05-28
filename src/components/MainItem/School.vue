<template>
  <div class="education">
    <div class="badge">
      <el-avatar :size="60" :src="badge" @error="errorHandler">
        <img :src="require('../../assets/badge.png')" />
      </el-avatar>
    </div>
    <div class="details">
      <div>
        <b>{{ school.name }}</b>
        <p>{{ school.year }} | {{ school.department }}</p>
      </div>
      <p>
        {{ school.content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class School extends Vue {
  @State("schoolBadge") badge!: string;
  @State("school") school!: object;

  errorHandler() {
    return true;
  }
}
</script>

<style lang="less" scope>
.education {
  display: flex;
  .badge {
    margin-right: 20px;
  }
  .details {
    line-height: 25px;
    > p {
      margin: 20px 0;
      line-height: 30px;
    }
  }
}
</style>
