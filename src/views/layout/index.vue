<template>
  <!-- 外层组件 -->
  <div class="layout-container">
    <div class="header">
      <div class="recuit">
        <span>招聘个人中心</span>
      </div>
      <div class="nav-top">
        <div class="person-resume">
          <a href="">我的简历</a>
        </div>
        <div class="nav-details">
          <a href="">访问网站</a>
          <a href="">面试邀请</a>
          <a href="">我的简历</a>
          <a href="">陈长生</a>
        </div>
      </div>
    </div>
<div class="main">卧槽</div>
    <!-- 子路由出口 -->
    <!-- <router-view></router-view> -->
    <nav-aside/>
  </div>
</template>

<script>
// 引入navaside组件
import NavAside from '@/views/layout/components/navaside.vue'

export default {
  name: "LayoutIndex",
  data() {
    return{

    }
    
  },
  components:{
    NavAside
  }
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
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(204, 204, 204, 0.2);
}

.person-resume {
  position: absolute;
  left: 50px;
  top: 18px;
}

.person-resume a {
  display: inline-block;
  width: 56px;
  height: 24px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  background-color: #fff;
}
.nav-details {
  position: absolute;
  right: 50px;
  top: 16px;
  background-color: #fff;
}

.nav-details a {
  display: inline-block;
  width: 57px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  margin-left: 29px;
  background-color: #fff;
}

.main {
  position: absolute;
  left: 210px;
  top: 72px;
  width: 1180px;
  height: 200px;
  background-color: red;
}
</style>
