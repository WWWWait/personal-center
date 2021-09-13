<template>
  <div class="centerbrowse-content">
    <div class="centerbrowse-header">
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >浏览我的企业
      </span>
      <span>查看更多</span>
    </div>

    <browse-main></browse-main>
  </div>
</template>

<script>
import BrowseMain from "@/views/browse/browsemain.vue";

export default {
  name: "Centerbrowse",
  components: {
    BrowseMain,
  },
  data() {
    return {
      tableData: [
        {
          company: "滁州祥声房地产代理公司",
          location: "3个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "安徽百仁建筑工程有限公司",
          location: "18个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
      ],
    };
  },
};
</script>

<style>
.centerbrowse-content {
  position: relative;
  left: 0px;
  top: 0px;
  height: 420px;
}

.centerbrowse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}

.centerbrowse-header span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #999999;
}
</style>
