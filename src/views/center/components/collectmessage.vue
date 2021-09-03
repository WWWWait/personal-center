<template>
  <div class="collect-content" style="height:100%;padding-left:20px" >
    <div class="collect-header">
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >收藏信息</span
      >
      <span>查看更多</span>
    </div>

    <!-- 主体 -->
    <table cellpadding="0" cellspacing="0">
      <thead class="collect-nav">
        <tr>
          <th style="width:280px;">职位名称</th>
          <th style="width:290px">公司名称</th>
          <th style="width:150px">区域</th>
          <th style="width:230px">收藏时间</th>
          <th style="width:72px">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="collect-main" v-for="(item, index) in tableData">
          <td>{{ tableData[index].post }}</td>
          <td>{{ tableData[index].company }}</td>
          <td>{{ tableData[index].location }}</td>
          <td>{{ tableData[index].times }}</td>
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
            {{ tableData[index].collect ? "收藏" : "取消收藏" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CollentMessage",
  data() {
    return {
      tableData: [
        {
          post: "行政经理/主管",
          company: "滁州市聚诚房地产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
          throw: true,
          collect: true,
        },
        {
          post: "房产经纪人",
          company: "安徽众博新材料有限公司",
          location: "苏滁园区",
          times: "2019-07-05 11:26:27",
          throw: true,
          collect: true,
        },
        {
          post: "中小学数理化教师",
          company: "滁州市鸿嘉塑料",
          location: "全椒",
          times: "2019-07-05 11:26:27",
          throw: false,
          collect: false,
        },
        {
          post: "园林绿化养护员工",
          company: "安徽利家供应链",
          location: "合肥",
          times: "2019-07-05 11:26:27",
          throw: true,
          collect: true,
        },
      ],
    };
  },
  methods: {
    throwClick(index) {
      this.tableData[index].throw = !this.tableData[index].throw;
    },
    collectClick(index) {
      this.tableData[index].collect = !this.tableData[index].collect;
    },
  },
};
</script>

<style>
.collect-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 20px;
}

.collect-header span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #999999;
}

.collect-nav {
  height: 50px;
}

.collect-nav tr {
  background: #f8f9fb;
}
.collect-nav tr th {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  text-align: left;
  color: #999999;
}

.collect-main {
  height: 50px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
}

.throwActive {
  color: #4a88f7;
}
</style>
