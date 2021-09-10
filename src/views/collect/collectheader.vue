<template>
  <div class="collect-container">
    <div class="collect-nav">
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >我的收藏</span
      >
    </div>
    <collect-main></collect-main>
  </div>
</template>

<script>
import CollectMain from "./collectmain.vue";
export default {
  name: "CollectHeader",
  components: {
    CollectMain,
  },
  data() {
    return {};
  },
};
</script>

<style>
.collect-container {
  position: relative;
  left: 0;
  top: 0;
  width: 1180px;
  height: 790px;
}

.collect-nav {
  position: relative;
  top: 0;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
}

.collect-nav span {
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 700;
  color: #333333;
  line-height: 60px;
}
</style>
