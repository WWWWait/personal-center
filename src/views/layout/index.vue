<template>
  <!-- 外层组件 -->
  <div class="layout-container">
    <!-- 头部 -->
    <div class="header">
      <div class="nav-top">
        <div class="person-resume">
          <span @click="headerClick">{{ textHeader }}</span>
        </div>
        <div class="nav-details">
          <span>访问网站</span>
          <span @click="inviteClick">面试邀请</span>
          <span @click="resumeClick">我的简历</span>
          <span>陈长生</span>
        </div>
      </div>
    </div>

    <!-- 主体 -->
    <div class="main">
      <!-- 主体子路由入口 -->
      <router-view></router-view>
    </div>

    <!-- 侧边栏 -->
    <app-aside @itemclick="childClick" />
  </div>
</template>

<script>
import local from "@/assets/local.js";
// 引入navaside组件
import AppAside from "@/views/layout/components/aside.vue";
// import { getUserProfile } from "@/api/user.js";

export default {
  name: "LayoutIndex",
  data() {
    return {
      textHeader: "个人中心",
      routHeader: "",
    };
  },
  components: {
    AppAside,
  },
  created() {
    if (local.get("Aside")) {
      this.textHeader = local.get("Aside") || 0;
    }
  },
  methods: {
    inviteClick() {
      this.$router.push("/invite");
    },
    resumeClick() {
      this.$router.push("/resume");
    },
    headerClick() {
      this.$router.push("/" + this.routHeader);
    },
    childClick(itme, rout) {
      this.textHeader = itme;
      this.routHeader = rout;
    },
  },
};
</script>

<style>
.header {
  position: relative;
  left: 0;
  top: 0;
  width: 1440px;
  height: 56px;
  background-color: #fff;
}

.header .recuit {
  position: absolute;
  left: 0;
  top: 0;
  width: 160px;
  height: 56px;
  text-align: center;
  background-color: #3374e9;
  cursor: pointer;
}

.recuit span {
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #adc7f6;
  line-height: 56px;
  background-color: #3374e9;
}

.nav-top {
  position: absolute;
  left: 160px;
  top: 0;
  display: inline-block;
  width: 1280px;
  height: 56px;
  box-shadow: 0px 2px 4px 0px rgba(204, 204, 204, 0.2);
}

.person-resume {
  position: absolute;
  left: 50px;
  top: 18px;
}

.person-resume span {
  display: inline-block;
  width: 56px;
  height: 24px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  cursor: pointer;
  line-height: 24px;
}
.nav-details {
  position: absolute;
  right: 50px;
  top: 16px;
}

.nav-details span {
  display: inline-block;
  width: 57px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  margin-left: 29px;
  cursor: pointer;
}

.main {
  position: relative;
  left: 210px;
  top: 16px;
  width: 1180px;
  height: 200px;
}
</style>
