<template>
  <div class="work">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time"
        v-for="(item, i) in works"
        :key="i"
        placement="top"
        size="large"
      >
        <el-card shadow="never" class="work-card">
          <h3>{{ item.name }}</h3>
          <p>{{ item.site }} | {{ item.company }}</p>
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <p class="work-card-title">{{ item.title }}</p>
              </template>
              <p class="work-card-content" v-html="item.content"></p>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Work extends Vue {
  @State("works") works!: object[];
}
</script>

<style lang="less" scope>
.work {
  padding: 0 50px;
  .work-card {
    .work-card-title {
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      line-height: 40px;
    }
  }
}
</style>
