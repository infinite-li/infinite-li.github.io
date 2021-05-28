import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: "", // 头像链接
    name: "", // 名字
    message: ["上海", "前端开发工程师"], // 个人信息
    mobileNo: "13849141247", // 手机号
    wechatNo: "l13849141247", // 微信号
    mailbox: "913563848@qq.com", // 邮箱
    sex: "男", // 性别
    birthday: "1998 / 09 / 14", // 生日
    skills: [
      {
        type: "JavaScript", // 名称
        score: 10, // 分值(十分制)
      },
      {
        type: "Html",
        score: 10,
      },
      {
        type: "Css",
        score: 10,
      },
      {
        type: "Vue",
        score: 10,
      },
      {
        type: "小程序",
        score: 7,
      },
      {
        type: "React",
        score: 7,
      },
      {
        type: "Node.js",
        score: 5,
      },
      {
        type: "Jquery",
        score: 10,
      },
    ], //个人技能
    schoolBadge: "", // 校徽链接
    school: {
      name: "郑州理工职业学院", // 学校名称
      year: "2017 - 2020", // 在校年月
      department: "信息工程系 | 计算机网络", // 院系
      content:
        "计算机网络专业,拥有专业的计算机基础知识,学习过C、Java、Python、SQL Server、Php等编程基础知识。", // 说明
    }, // 学校情况
    works: [
      {
        time: "2018/4 - 2018/6",
        name: "前端开发工程师", // 工作名称
        company: "公司名称", // 公司名称
        site: "上海", // 公司地区
        title: "使用技术为struts, hibernate, spring等等", // 内容标题行(折叠行第一行)
        content:
          "使用技术为struts, hibernate, spring等等<br />负责项目中服务开发参与部分需求调研<br />,与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br />在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<br />", // 工作内容(换行请使用<br />)
      },
      {
        time: "2018/4 - 2018/6",
        name: "前端开发工程师",
        company: "公司名称",
        site: "上海",
        title: "使用技术为struts, hibernate, spring等等",
        content:
          "使用技术为struts, hibernate, spring等等<br />负责项目中服务开发参与部分需求调研<br />与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br />在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<br />",
      },
    ], // 工作经历
    productions: [
      {
        src: "", //图片链接
        title: "智能楼宇管理系统", // 标题
        content:
          "基于数据采集模型的智能楼宇管理系统，支持SNMP,Modbus,电总,OPC等协议。", // 说明
      },
      {
        src: "",
        title: "智能楼宇管理系统",
        content:
          "基于数据采集模型的智能楼宇管理系统，支持SNMP,Modbus,电总,OPC等协议。",
      },
      {
        src: "",
        title: "智能楼宇管理系统",
        content:
          "基于数据采集模型的智能楼宇管理系统，支持SNMP,Modbus,电总,OPC等协议。",
      },
    ], // 个人作品(只支持三个)
  },
});
