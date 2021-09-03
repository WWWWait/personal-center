<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getList");
  },
};
</script>

<style lang="less"></style>
