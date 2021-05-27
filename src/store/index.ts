import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: "", // 设置头像
    name: "", // 设置名字
    message: ["郑州", "前端开发工程师"], // 个人信息
    mobileNo: "138491xxxxx", // 手机号
    wechatNo: "l138491xxxxx", // 微信号
    mailbox: "913563848@qq.com", // 邮箱
  },
  mutations: {},
  actions: {},
  modules: {},
});
