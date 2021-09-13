<template>
  <div class="browse-all">
    <el-table
      :header-cell-style="{ background: '#f8f9fb' }"
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
</template>

<script>
export default {
  name: "BrowseMain",
  data() {
    return {
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

<style></style>
