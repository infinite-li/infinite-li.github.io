<template>
  <div class="work">
    <el-timeline>
      <el-timeline-item
        timestamp="2018/4 - 2018/6"
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
              <template slot="title" style="">{{
                item.content | contentFilter
              }}</template>
              <p class="content" v-html="item.content.substring(count)"></p>
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

let count: number;

@Component({
  filters: {
    contentFilter: (val: string) => {
      let newVal = val.substring(0, 60);
      if (newVal.indexOf("<br/>") != -1 || newVal.indexOf("<br />") != -1) {
        // 找到
        count =
          newVal.indexOf("<br/>") === -1
            ? newVal.indexOf("<br />") + 6
            : newVal.indexOf("<br/>") + 5;

        return val.substring(
          0,
          newVal.indexOf("<br/>") === -1
            ? newVal.indexOf("<br />")
            : newVal.indexOf("<br/>")
        );
      }
      // 未找到
      return val.substring(0, 60);
    },
  },
})
export default class Work extends Vue {
  @State("works") works!: object[];

  public get count(): number {
    return count;
  }
}
</script>

<style lang="less" scope>
.work {
  padding: 0 50px;
  .work-card {
    p {
      line-height: 40px;
    }
    .content {
      padding-right: 60px;
    }
  }
}
</style>
