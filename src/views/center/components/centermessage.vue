<template>
  <div class="centerCollenctAll">
    <div class="centerCollenct-header" >
      <span
        style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
        >收藏信息</span
      >
      <span @click="collectAllData">查看更多</span>
    </div>

<collect-main></collect-main>
    <!-- 主体 -->
    <!-- <div>
      <table cellpadding="0" cellspacing="0">
        <thead class="centerCollenctTh">
          <tr>
            <th style="width:280px;padding-left:20px">职位名称</th>
            <th style="width:290px">公司名称</th>
            <th style="width:150px">区域</th>
            <th style="width:230px">收藏时间</th>
            <th style="width:90px">操作</th>
            <th style="width:140px"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="centerCollenctTT" v-for="(item, index) in tableData">
            <td style="padding-left:20px">{{ tableData[index].post }}</td>
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
              @click="centerCollenctClick(index)"
              :style="{
                color: item.centerCollenct ? 'black' : '#999',
                cursor: 'pointer',
              }"
            >
              {{ tableData[index].centerCollenct ? "收藏" : "取消收藏" }}
            </td>
          </tr>
        </tbody>
      </table> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import local from '@/assets/local.js'
import CollectMain from "@/views/collect/collectmain.vue"

export default {
  name: "CollentMessage",
  components:{
CollectMain
  },
  data() {
    return {
      tableData: [
        {
          post: "行政经理/主管",
          company: "滁州市聚诚房地产有限公司",
          location: "不限",
          times: "2019-07-05 11:26:27",
          throw: true,
          centerCollenct: true,
        },
        {
          post: "房产经纪人",
          company: "安徽众博新材料有限公司",
          location: "苏滁园区",
          times: "2019-07-05 11:26:27",
          throw: true,
          centerCollenct: true,
        },
        {
          post: "中小学数理化教师",
          company: "滁州市鸿嘉塑料",
          location: "全椒",
          times: "2019-07-05 11:26:27",
          throw: false,
          centerCollenct: false,
        },
        {
          post: "园林绿化养护员工",
          company: "安徽利家供应链",
          location: "合肥",
          times: "2019-07-05 11:26:27",
          throw: true,
          centerCollenct: true,
        },
      ],
    };
  },
  methods: {
    throwClick(index) {
      this.tableData[index].throw = false;
    },
    centerCollenctClick(index) {
      this.tableData[index].centerCollenct = !this.tableData[index].centerCollenct;
    },
    collectAllData(){
      this.$router.push('/collect')
    }
  },
};
</script>

<style>
.centerCollenctAll{
  position: relative;
  left: 0;
  top: 0px;
}

.centerCollenct-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding:0 20px;
}

.centerCollenct-header span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #999999;
}

.centerCollenctTh {
  width: 1180px;
  height: 50px;
  background-color: #f8f9fb;
}

.centerCollenctTh tr th {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  text-align: left;
  color: #999999;
}

.centerCollenctTT {
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
