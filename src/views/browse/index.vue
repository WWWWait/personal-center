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

    <div class="browse-all">
      <el-table
      :header-cell-style="{background:'#f8f9fb'}"
        :data="
          tableData.slice(
            (queryInfo.pagenum - 1) * queryInfo.pagesize,
            queryInfo.pagenum * queryInfo.pagesize
          )
        "
        style="width: 100%"
        class="customer-table"
      >
        <el-table-column prop="company" label="企业名称" width="525">
        </el-table-column>
        <el-table-column prop="location" label="在招职位" width="380">
        </el-table-column>
        <el-table-column prop="times" label="关注时间"> </el-table-column>
      </el-table>
    </div>

    <!-- <table cellpadding="0" cellspacing="0">
        <thead class="browse-nav">
          <tr>
            <th style="width:525px;">企业名称</th>
            <th style="width:380px">在招职位</th>
            <th style="width:218px">关注时间</th>
          </tr>
        </thead>

        <tbody>
          
          <tr class="browse-main" v-for="(item, index) in tableData">
            <td>{{ tableData[index].company }}</td>
            <td>{{ tableData[index].location }}</td>
            <td>{{ tableData[index].times }}</td>
          </tr>
        </tbody>
      </table> -->

    <!-- <el-pagination background layout="prev, pager, next" :total="1000"> -->
    <div class="footer">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        v-model:currentPage="queryInfo.pagenum"
        :page-size="queryInfo.pagesize"
        layout="prev,pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterBrowse",
  data() {
    return {
      isActive: true,
      queryInfo: {
        // 当前页码
        pagenum: 1,
        // 当前每页显示条数
        pagesize: 12,
      },
      tableData: [
        {
          company: "滁州祥声房地产代理公司",
          location: "3个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州祥声房地产代理公司",
          location: "3个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州祥声房地产代理公司",
          location: "3个在招职位",
          times: "2019-07-05 11:26:27",
        },
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
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
        {
          company: "滁州百纳节能科技有限公司",
          location: "2个在招职位",
          times: "2019-07-05 11:26:27",
        },
      ],
      //总条数
      total: 0,
    };
  },
  created() {
    this.getMessageList();
  },
  methods: {
    getMessageList() {
      this.queryInfo.pagenum = this.queryInfo.pagenum;
      // Math.ceil(this.tableData.length / 12);
      this.queryInfo.pagesize = 12;
      this.total = this.tableData.length;
    },
    // 监听页码值改变
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getMessageList();
    },

    browseClick1() {
      this.isActive = true;
    },
    browseClick2() {
      this.isActive = false;
    },
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
  width: 240px;
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
