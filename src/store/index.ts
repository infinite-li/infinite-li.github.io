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
        score: 9, // 分值(十分制)
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
        score: 8,
      },
      {
        type: "Node.js",
        score: 4,
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
        "学习专业的计算机基础知识，在校期间学过C语言、H5、Python、Java、Linux系统、SqlServer数据库、PHP等众多编程基础知识，拥有扎实的编程能力。", // 说明
    }, // 学校情况
    works: [
      {
        time: "2021/3 - 2021/x",
        name: "前端开发工程师", // 工作名称
        company: "上海老虎玫瑰信息科技有限公司", // 公司名称
        site: "上海", // 公司地区
        title: "使用技术为vue,element ui,ABP前端框架等等", // 内容标题行(折叠行第一行)
        content:
          "负责公司项目中的前端功能模块的开发和页面数据的渲染；<br />配合后端其他人员完成项目的测试和一些功能的完善；<br />配合产品对项目进行优化。", // 工作内容(换行请使用<br />)
      },
      {
        time: "2019/6 - 2021/2",
        name: "前端开发工程师",
        company: "杭州平航科技有限公司",
        site: "杭州",
        title: "使用技术为Vue, React, 微信小程序等等",
        content:
          "负责网站和手机端网页设计、专题页设计和网页制作工作；<br />配合 ui 对页面进行美化满足客户需求；<br />配合测试完成公司项目的测试、bug 修复、用户体验优化等工作；<br />根据现有的开发代码并按照客户的需求进行二次开发；<br />使用第三方框架(antd,vant,element 等)对网页进行快速开发。",
      },
    ], // 工作经历
    productions: [
      {
        src: "", //图片链接 默认仓库背景
        title: "仓库管理系统", // 标题
        content:
          "主要管理货物的出入库,对货物的出入库明细进行录入展示,其中加入了审批功能,可以更直观快速的管理仓库。", // 说明
      },
      {
        src: "", // 默认小程序背景
        title: "商场排队系统",
        content:
          "基于微信小程序开发的商场自动排队系统,主要用于商场游乐设施和一些店铺的线上自动排队,可以随时在手机上查看当前排队进度。",
      },
      {
        src: "", // 默认花瓶背景
        title: "博艺书画官网",
        content:
          "博艺书画教育是一个培训书画技巧的教育机构，该项目主要展示培训班介绍，方便用户查看课程，了解教师队伍。",
      },
    ], // 个人作品(只支持三个)
  },
});
