<template>
  <el-card class="message">
    <div class="avatar">
      <el-avatar
        :size="200"
        fit="scale-down"
        :src="src"
        @error="errorHandler"
        class="avatarImg"
      >
        <img :src="require('../assets/src.png')" />
      </el-avatar>
    </div>

    <h1>{{ name ? name : "Mr Li" }}</h1>

    <el-breadcrumb separator="|" class="breadcrumb">
      <el-breadcrumb-item v-for="item in message" :key="item">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="icons">
      <i class="el-icon-mobile-phone" :title="'手机：' + mobileNo"></i>
      <i class="el-icon-message" :title="'邮箱：' + mailbox"></i>
      <i class="el-icon-chat-dot-square" :title="'微信：' + wechatNo"></i>
    </div>

    <div class="print">
      <el-button round>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&amp;uin=913563848&amp;site=qq&amp;menu=yes"
        >
          <i class="el-icon-s-promotion"></i> 点击进行QQ交谈
        </a>
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Message extends Vue {
  @State("avatar") src!: string;
  @State("name") name!: string;
  @State("message") message!: string[];
  @State("mobileNo") mobileNo!: string;
  @State("mailbox") mailbox!: string;
  @State("wechatNo") wechatNo!: string;

  errorHandler() {
    return true;
  }
}
</script>

<style lang="less" scope>
.message {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
  .avatarImg {
    box-shadow: 0px 0px 1px grey;
  }
  h1 {
    height: 70px;
    line-height: 70px;
  }
  .breadcrumb {
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .icons {
    font-size: 28px;
    line-height: 70px;
    i {
      margin: 0 10px;
    }
  }
  .print {
    margin-top: 30px;
    a {
      text-decoration: none;
      color: #606266;
    }
  }
}
</style>
