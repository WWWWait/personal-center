// 侧边栏组件
<template>
  <div class="nav-aside">
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
</template>

<script>
export default {
  name: "NavAside",
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
        "set up",
        "release",
      ],
      isActive: 0,
    };
  },
  methods: {
    AsideClick(index) {
      this.isActive = index;
      console.log(index);
      let msg = this.ditails;
      // 侧边导航栏路由跳转
      this.$router.push("/" + msg[index]);
    },
  },
};
</script>

<style>
.nav-aside {
  position: fixed;
  left: 0;
  top: 56px;
  width: 160px;
  height: 2032px;
  background: #b1c0d1;
}

.nav-aside li {
  width: 160px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 15px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #666666;
  background-color: #b1c0d1;
}

.nav-aside ul .Active {
  background-color: #fff;
}
</style>
