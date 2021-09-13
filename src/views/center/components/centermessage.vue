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
   
  </div>
</template>

<script>
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
  /* height: 420px;
  overflow: hidden; */
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
