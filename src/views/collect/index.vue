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
            <el-button size="mini" style="margin-right:20px" type="primary" icon="el-icon-edit" ></el-button>
            <el-button
            size="mini"
              type="warning"
              icon="el-icon-star-off"
            ></el-button>
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
  </div>
</template>

<script>
export default {
  name: "collectIndex",
  data() {
    return {
      remuse: true,
      collect: true,
      isActive: true,
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
      ],
    };
  },
  created() {
    this.getCollectList();
  },
  methods: {
    getCollectList() {
      this.pagenum = 1;
      this.pageage = 12;
      this.total = this.collectData.length;
    },
    throwClick(index) {
      this.remuse[index] = false;
    },
    collectClick(index) {
      this.collectData[index].collect = !this.collectData[index].collect;
    },
  },
};
</script>

<style lang="less">
.collecColor {
  color: #999;
}
.collect-container {
  position: relative;
  left: 0;
  top: 0;
  width: 1180px;
  height: 790px;
  overflow: hidden;
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

.collect-all {
  position: relative;
  left: 0;
  top: 0;
  height: 650px;
  background-color: #fff;
}

.el-table .cell {
  padding: 0 0 0 20px;
}

.el-table .el-table__cell {
  padding: 0;
}

.has-gutter tr {
  height: 50px;
  border: 0;
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

.juli {
  margin-right: 20px;
}

.footer {
  position: relative;
  left: 0;
  top: 0;
  height: 80px;
  padding-left: 20px;
  padding-top: 30px;
  background-color: #fff;
}
</style>

<!-- 主体
    <table cellpadding="0" cellspacing="0" class="maxHight">
      <thead class="collect-header">
        <tr>
          <th class="th1" style="width:280px;">职位名称</th>
          <th style="width:310px">公司名称</th>
          <th style="width:150px">区域</th>
          <th style="width:230px">投递时间</th>
          <th style="width:80px">操作</th>
          <th style="width:110px"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="collect-main" v-for="(item, index) in collectData">
          <td class="td1">{{ collectData[index].post }}</td>
          <td>{{ collectData[index].company }}</td>
          <td>{{ collectData[index].location }}</td>
          <td>{{ collectData[index].times }}</td>
          <td
            @click="throwClick(index)"
            :style="{
              color: item.throw ? 'red' : 'green',
              cursor: 'pointer',
            }"
          >
            {{ item.throw ? "投递简历" : "已投递" }}
          </td>
          <td
            @click="collectClick(index)"
            :style="{
              color: item.collect ? 'black' : '#999',
              cursor: 'pointer',
            }"
          >
            {{ collectData[index].collect ? "收藏" : "取消收藏" }}
          </td>
        </tr>
      </tbody>
    </table> -->
