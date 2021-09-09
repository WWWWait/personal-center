<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  // created() {

  //   // 判断是否存在本地数据
  //   if (JSON.parse(localStorage.getItem("personData"))) {

  //     // 存在，则对this.obj赋值
  //     this.obj = JSON.parse(localStorage.getItem("personData"))||{};

  //     // 引入切面切换的缓存数据
  //     JSON.parse(localStorage.getItem("mountedEle"));

  //   }

  // },
};
</script>

<style lang="less"></style>
