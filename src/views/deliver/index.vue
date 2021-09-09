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

    <!-- 主体 -->
    <table cellpadding="0" cellspacing="0">
      <thead class="deliver-header">
        <tr>
          <th style="width:280px;padding-left: 20px;">投递职位</th>
          <th style="width:460px">公司名称</th>
          <th style="width:230px">投递时间</th>
          <th style="width:80px">操作</th>
          <th style="width:110px"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="deliver-main" v-for="(item, index) in deliverData">
          <td style="padding-left: 20px;">{{ deliverData[index].post }}</td>
          <td>{{ deliverData[index].company }}</td>
          <td>{{ deliverData[index].times }}</td>
          <td
            @click="lookClick(index)"
            :style="{
              color: item.throw ? '#999' : '#4A88F7',
              cursor: 'pointer',
            }"
          >
            {{ item.throw ? "已查看" : "未查看" }}
          </td>
          <td
            @click="delClick(index)"
            :style="{
              color: '#999',
              cursor: 'pointer',
            }"
          >
            {{ deliverData[index].del }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="footer">
      <!-- <el-pagination background layout="prev, pager, next" :total="1000"> -->
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:currentPage="currentPage3"
          :page-size="100"
          layout="prev, pager, next,jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
      <!-- </el-pagination> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliverIndex",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      deliverData: [
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: false,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: false,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: false,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: false,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
        {
          post: "行政主管",
          company: "滁州聚诚房产有限公司",
          times: "2019-07-05 11:26:27",
          throw: true,
          del: "删除",
        },
      ],
      throw: true,
    };
  },
  methods: {
    lookClick(index) {
      this.deliverData[index].throw = !this.deliverData[index].throw;
    },
    delClick(index) {},
  },
};
</script>

<style lang="less">
.deliver-container {
  position: relative;
  left: 0;
  top: 0;
  width: 1180px;
  height: 790px;
  overflow: hidden;
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

.deliver-header {
  height: 50px;
}

.deliver-header tr {
  background-color: #f8f9fb;
}

.deliver-header tr th {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 600;
  text-align: left;
  color: #999999;
}

.deliver-main {
  height: 50px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
}

.deliver-main tr {
  height: 50px;
}

.footer {
  height: 80px;
  padding-top: 26px;
}
</style>
