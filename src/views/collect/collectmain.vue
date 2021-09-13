<template>
  <div class="collect-all">
    <el-table
      :header-cell-style="{ background: '#f8f9fb' }"
      :data="
        collectData.slice(
          (this.pagenum - 1) * this.pageage,
          this.pagenum * this.pageage
        )
      "
      style="width: 100%"
    >
      <el-table-column prop="post" label="职位名称" width="260">
      </el-table-column>
      <el-table-column prop="company" label="公司名称" width="290">
      </el-table-column>
      <el-table-column prop="location" label="区域" width="130">
      </el-table-column>
      <el-table-column prop="times" label="投递时间" width="210">
      </el-table-column>
      <el-table-column label="操作" width="290">
        <template v-slot="change">
          <el-button
            type="text"
            @click="
              btnClick1(change.$index + (this.pagenum - 1) * this.pageage)
            "
            :class="{
              btnResume:
                isActive[change.$index + (this.pagenum - 1) * this.pageage],
            }"
            >{{
              isActive[change.$index + (this.pagenum - 1) * this.pageage]
                ? "已投递"
                : "投递简历"
            }}</el-button
          >
          <el-button
            type="text"
            @click="
              btnClick2(change.$index + (this.pagenum - 1) * this.pageage)
            "
            :class="{
              btnCollect:
                isCollect[change.$index + (this.pagenum - 1) * this.pageage],
            }"
            >{{
              isCollect[change.$index + (this.pagenum - 1) * this.pageage]
                ? "取消收藏"
                : "收藏"
            }}</el-button
          > 
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="footer">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="pagenum"
      :page-size="pageage"
      layout="prev, pager, next,jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import local from "@/assets/local.js";

export default {
  name: "collectIndex",
  data() {
    return {
      isActive: [],
      isCollect: [],
      pagenum: 1,
      pageage: 12,
      total: 0,
      collectData: [
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
        },
      ],
    };
  },
  created() {
    this.getCollectList();
    if (local.get("isResume").length != 0) {
      // 投递简历
      this.isActive = local.get("isResume");
    }
    if (local.get("isCollect").length != 0) {
      // 收藏
      this.isCollect = local.get("isCollect");
    }
  },
  methods: {
    getCollectList() {
      // 第一页
      this.pagenum = 1;
      this.pageage = 12;
      this.total = this.collectData.length;
    },

    // 投递简历
    btnClick1(value) {
      console.log(value);
      this.isActive[value] = true;
      console.log(this.isActive);
      local.set("isResume", this.isActive);
    },

    // 收藏
    btnClick2(value) {
      this.isCollect[value] = !this.isCollect[value];
      local.set("isCollect", this.isCollect);
      console.log(this.isCollect[value]);
    },
  },
};
</script>

<style lang="less">
.collect-all {
  position: relative;
  left: 0;
  top: 0;
  height: 650px;
  background-color: #fff;
}

.has-gutter tr {
  height: 50px;
  border: 0;
}

.el-table .cell {
  padding: 0 0 0 20px;
}

.el-table .el-table__cell {
  padding: 0;
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

.el-button + .el-button {
  margin: 0;
}

.el-button {
  width: 54px;
  margin-right: 33px;
}

.juli {
  margin-right: 20px;
}

.btnResume {
  color: #2ba63c;
}

.btnCollect {
  color: #999;
}

.footer {
  position: relative;
  left: 0;
  top: 0;
  height: 60px;
  padding-left: 20px;
  padding-top: 30px;
  background-color: #fff;
}
</style>
