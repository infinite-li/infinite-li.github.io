<template>
  <div class="production">
    <div class="box-left">
      <div class="img_div">
        <img
          :src="
            productions[0].src
              ? productions[0].src
              : require('../../assets/cangku.png')
          "
        />
        <div class="mask">
          <p>
            <span>{{ productions[0].title }}</span
            ><br />
            {{ productions[0].content }}
          </p>
        </div>
      </div>
      <div class="img_div">
        <img
          :src="
            productions[0].src
              ? productions[0].src
              : require('../../assets/xiaochengxu.png')
          "
        />
        <div class="mask">
          <p>
            <span>{{ productions[1].title }}</span
            ><br />
            {{ productions[1].content }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="img_div">
        <img
          :src="
            productions[0].src
              ? productions[0].src
              : require('../../assets/guanwang.png')
          "
        />
        <div class="mask">
          <p>
            <span>{{ productions[2].title }}</span
            ><br />
            {{ productions[2].content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Production extends Vue {
  @State("productions") productions!: object[];
}
</script>

<style lang="less" scope>
.production {
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    overflow: hidden;
    width: 49.5%;
    .img_div {
      position: relative;
      width: 100%;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(101, 101, 101, 0.7);
        color: #ffffff;
        opacity: 0;
        transition: opacity 0.6s;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          text-align: center;
          span {
            display: inline-block;
            transform: translateY(-16px);
            line-height: 40px;
            font-weight: bolder;
            transition: all 0.7s;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
      &:hover .mask {
        opacity: 1;
      }
      &:hover .mask span {
        transform: translateY(0px);
      }
    }
  }
  .box-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      height: 49.5%;
    }
    img {
      object-fit: cover !important;
    }
  }
}
</style>
