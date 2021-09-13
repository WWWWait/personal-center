<template>
  <div class="browse-content">
    <div class="browse-header">
      <span @click="browseClick1" :class="{ active: isActive }"
        >浏览我的企业
      </span>
      <span @click="browseClick2" :class="{ active: !isActive }"
        >我浏览的信息
      </span>
    </div>

    <!-- 主体 -->
    <browse-main></browse-main>
  </div>
</template>

<script>
import BrowseMain from "./browsemain.vue";

export default {
  name: "CenterBrowse",
  components: {
    BrowseMain,
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="less">
.el-table .cell {
  padding: 0 0 0 20px;
}

.has-gutter tr {
  height: 50px;
  border: 0;
  background-color: red;
}

.el-table__row {
  height: 50px;
}

.el-table {
  --el-table-border: none;
}

.el-table--border::after,
.el-table--group::after,
.el-table::before {
  content: none;
}

.browse-content {
  position: relative;
  left: 0;
  top: 0;
  width: 1180px;
  height: 790px;
  overflow: hidden;
  background-color: #f1f2f6;
}

.browse-header {
  position: relative;
  left: 0;
  top: 0;
  width: 250px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  span {
    display: inline-block;
    width: 120px;
    height: 34px;
    text-align: center;
    background-color: #f9f9fb;
    cursor: pointer;
  }
  .active {
    color: #4a88f7;
    background: #fff;
  }
}

.browse-all {
  position: relative;
  left: 0;
  top: 16px;
  height: 650px;
  background-color: #fff;
}

// .browse-nav {
//   width: 1180px;
//   height: 50px;
//   background: #f9f9fb;
// }

// .browse-nav tr th {
//   font-size: 14px;
//   font-family: PingFang-SC-Regular, PingFang-SC;
//   font-weight: 400;
//   text-align: left;
//   padding-left: 20px;
//   color: #999999;
// }

// .browse-main {
//   height: 50px;
//   font-size: 14px;
//   font-family: PingFang-SC-Regular, PingFang-SC;
//   font-weight: 400;
//   color: #333333;
//   background-color: #fff;
// }

// .browse-main td {
//   padding-left: 20px;
// }

.footer {
  position: relative;
  left: 0;
  top: 15px;
  height: 80px;
  padding-left: 20px;
  padding-top: 30px;
  background-color: #fff;
}
</style>
