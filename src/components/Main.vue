<template>
  <el-card class="main">
    <div class="main-item">
      <h2>&emsp;基本信息</h2>
      <div class="basic">
        <dl>
          <dt>性别：</dt>
          <dd>{{ sex ? sex : "男" }}</dd>
          <dt>出生日期：</dt>
          <dd>{{ birthday ? birthday : "09 Jan 1991" }}</dd>
          <dt>手机：</dt>
          <dd>{{ mobileNo ? mobileNo : "xxxx" }}</dd>
          <dt>微信：</dt>
          <dd>{{ wechatNo ? wechatNo : "xxxx" }}</dd>
          <dt>E-MAIL：</dt>
          <dd>
            <span>{{ mailbox ? mailbox : "xxxx@xx.com" }}</span>
          </dd>
        </dl>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="main-item">
      <h2>&emsp;职业技能</h2>
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
    </div>
    <el-divider></el-divider>
    <div class="main-item">
      <h2>&emsp;教育经历</h2>
      <div class="education">
        <div class="badge">
          <el-avatar :size="60" :src="badge" @error="errorHandler">
            <img :src="require('../assets/badge.png')" />
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
    </div>
    <el-divider></el-divider>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Main extends Vue {
  @State("sex") sex!: string;
  @State("birthday") birthday!: string;
  @State("mobileNo") mobileNo!: string;
  @State("wechatNo") wechatNo!: string;
  @State("mailbox") mailbox!: string;
  @State("skills") skills!: object[];
  @State("schoolBadge") badge!: string;
  @State("school") school!: object;
  val: number = 10;
  errorHandler() {
    return true;
  }
}
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
      // &::before {
      //   content: " ";
      //   display: inline-block;
      //   width: 5px;
      //   height: 22px;
      //   position: relative;
      //   top: 4px;
      //   background-color: #505050;
      // }
    }
    .basic {
      dl {
        margin-bottom: 50px;
      }
      dl dt {
        font-size: 16px;
        float: left;
        font-weight: bold;
        margin: 10px 0;
        width: 150px;
      }
      dl dd {
        font-size: 16px;
        margin: 3px 0;
        padding: 10px 0;
        span {
          text-decoration: underline;
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
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
  }
}
</style>
