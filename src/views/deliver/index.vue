<template>
  <div class="deliver-container">
    <div class="deliver-nav">
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >我的投递记录</span
      >
    </div>
    <el-table
      :header-cell-style="{ background: '#f8f9fb' }"
      :data="
        deliverData.slice(
          (this.pagenum - 1) * this.pageage,
          this.pagenum * this.pageage
        )
      "
      style="width: 100%"
    >
      <el-table-column prop="post" label="投递职位" width="280">
      </el-table-column>
      <el-table-column prop="company" label="公司名称" width="460">
      </el-table-column>
      <el-table-column prop="times" label="投递时间" width="250">
      </el-table-column>
      <el-table-column label="操作" width="190">
        <template v-slot="change">
          <el-button type="text" style="color: #999999">已查看</el-button>
          <el-button
            type="text"
            @click="deleteDeliver(change.$index)"
            style="color: #999999"
            >删除</el-button
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
  name: "DeliverIndex",
  data() {
    return {
      total: 0,
      pagenum: 1,
      pageage: 12,
      ageData: [],
      deliverData: [
        {
          post: "活动策划",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "营销推广",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
        },
      ],
    };
  },

  mounted() {
    console.log(this.deliverData);
    if (local.get("deliverRemoveData")) {
      this.deliverData = local.get("deliverRemoveData") || [];
    }
    this.getCollectList();
  },
  methods: {
    getCollectList() {
      this.pagenum = 1;
      this.pageage = 12;
      this.total = this.deliverData.length;
    },
    deleteDeliver(value) {
      this.getCollectList();

      // 删除
      function remove(array, index) {
        if (index <= array.length - 1) {
          for (var i = index; i < array.length; i++) {
            array[i] = array[i + 1];
          }
        } else {
          throw new Error("超出最大索引！");
        }

        array.length = array.length - 1;

        return array;
      }
      // remove(this.deliverData, value);

      local.set("deliverRemoveData", remove(this.deliverData, value));
    },
  },
};
</script>

<style lang="less">
.deliver-container {
  position: relative;
  left: 0;
  top: 0;
  height: 710px;
  background-color: #fff;
}

.deliver-nav {
  position: relative;
  top: 0;
  height: 60px;
  padding-left: 20px;
}

.deliver-nav span {
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 700;
  color: #333333;
  line-height: 60px;
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
  margin-right: 20px;
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
