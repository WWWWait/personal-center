<template>
  <div class="aside-nav">
      <div class="aside-header">
    <span>招聘个人中心</span>
  
    <div class="aside-details">
      <ul>
        <li
          v-for="(i, index) in Aside"
          :class="{ Active: isActive == index }"
          @click="AsideClick(index)"
        >
          {{ i }}
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAside",
  data() {
    return {
      Aside: [
        "个人中心",
        "我的简历",
        "投递记录",
        "面试邀请",
        "收藏信息",
        "浏览记录",
        "我的订阅",
        "账号设置",
        "发布招聘",
      ],
      ditails: [
        "center",
        "resume",
        "deliver",
        "invite",
        "collect",
        "browse",
        "subscribe",
        "setup",
        "release",
      ],
      isActive: 0,
      index: ''
    };
  },
  methods: {
    AsideClick(index) {
      this.isActive = index;
      let msg = this.ditails;
      this.$emit("itemclick",index);
      // 侧边导航栏路由跳转
      this.$router.push("/" + msg[index]);
    },
  },
};
</script>

<style>
.aside-nav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 160px;
  min-height: 100px;
  background: #b1c0d1;
}

.aside-header {
  width: 160px;
  height: 56px;
  text-align: center;
  background-color: #3374e9;
}
.aside-header span {
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #adc7f6;
  line-height: 56px;
}

.aside-nav li {
  width: 160px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 15px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #666666;
  background-color: #b1c0d1;
  cursor: pointer;
}

.aside-nav ul .Active {
  background-color: #fff;
}
</style>
