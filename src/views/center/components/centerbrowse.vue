<template>
  <div class="browse-content" style="height:100%;padding-left:20px">
    <div class="browse-header">
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >浏览我的企业
      </span>
      <span>查看更多</span>
    </div>

    <!-- 主体 -->
    <table cellpadding="0" cellspacing="0">
      <thead class="browse-nav">
        <tr>
          <th style="width:590px;">企业名称</th>
          <th style="width:380px">在招职位</th>
          <th>关注时间</th>
        </tr>
      </thead>
      <tbody>
        <tr class="browse-main" v-for="(item, index) in tableData">
          <td>{{ tableData[index].company }}</td>
          <td>{{ tableData[index].location }}</td>
          <td>{{ tableData[index].times }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CenterBrowse",
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
.browse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 20px;
}

.browse-header span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #999999;
}

.browse-nav {
  height: 50px;
}

.browse-nav tr {
  background: #f8f9fb;
}
.browse-nav tr th {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  text-align: left;
  color: #999999;
}

.browse-main {
  height: 50px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
}
</style>
