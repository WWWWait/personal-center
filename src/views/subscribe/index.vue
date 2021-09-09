<template>
  <div class="sub-container">
    <div class="sub-header">
      <div class="follow">
        <img src="./img/微信.png" alt="" />
        <span>关注微信公众号，接受订阅的最新职位消息</span>
        <span class="followThis" @click="spanClick">点击关注</span>
      </div>
      <div class="dayPush">
        <span>职位订阅</span>
        <span>每日推送订阅的最新职位</span>
        <span>编辑</span>
      </div>
      <div class="tagEdit">
        <span>销售经理</span>
        <span>新闻媒介策划</span>
      </div>
    </div>
    <div class="companySub">
      <span>公司订阅</span>
    </div>
    <div class="subMain">
      <table cellpadding="0" cellspacing="0">
        <thead class="sub-nav">
          <tr>
            <th style="width:525px;">企业名称</th>
            <th style="width:380px">订阅时间</th>
            <th style="width:218px">操作</th>
          </tr>
        </thead>

        <tbody class="sub-main">
          <tr v-for="(item, index) in tableData">
            <td>{{ tableData[index].company }}</td>
            <td>{{ tableData[index].times }}</td>
            <td
              style="width: 28px;
                font-family: PingFang-SC-Regular, PingFang-SC;
                font-weight: 400;
                color: #4A88F7;
                cursor: pointer"
            >
              {{ tableData[index].other }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="one" v-if="isShow">
    <div class="oneEle">
      <div class="oneEleheader">
        <span @click="XClick">X</span>
      </div>
      <div class="oneElemain">
        <img src="./img/位图.png" alt="" />
        <p class="firstP">扫描二维码 关注服务号</p>
        <p>接受订阅的最新职位消息</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscribeIndex",
  data() {
    return {
      isShow: false,
      tableData: [
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
        {
          company: "中旭建设集团有限公司",
          times: "2019-07-05 11:26:27",
          other: "取消",
        },
      ],
    };
  },
  methods: {
    spanClick() {
      this.isShow = !this.isShow;
    },
    XClick() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="less">
.sub-container {
  position: relative;
  left: 0;
  top: 0;
}

.sub-header {
  position: relative;
  left: 0;
  top: 0;
  height: 172px;
  padding-top: 20px;
  background-color: #fff;
}

.follow {
  width: 1124px;
  height: 40px;
  margin-left: 20px;
  padding-left: 16px;
  border-radius: 4px;
  background-color: #f0f9ea;
  line-height: 40px;
  img {
    position: relative;
    left: 0;
    top: 2px;
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 12px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    color: #666666;
    vertical-align: top;
    margin: 0 12px;
  }
}

.follow .followThis {
  font-size: 12px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 700;
  color: #2ba63c;
  cursor: pointer;
}

.one {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.one .oneEle {
  position: relative;
  left: calc(50% - 160px);
  top: calc(50% - 160px);
  width: 320px;
  height: 320px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 2;
}

.oneEleheader {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dotted #888;
}

.oneEleheader span {
  float: right;
  margin-right: 20px;
  color: #d9d9d9;
  cursor: pointer;
}

.oneElemain img {
  margin: 10px 100px;
}

.oneElemain p {
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
.oneElemain .firstP {
  font-size: 14px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 700;
  color: #333333;
  margin-top: 30px;
  margin-bottom: 10px;
}

.dayPush {
  height: 18px;
  padding: 22px 20px;
  line-height: 18px;
}

.dayPush span:first-child {
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 600;
  color: #333333;
  margin-right: 10px;
}

.dayPush span:nth-child(2) {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
}

.dayPush span:nth-child(3) {
  float: right;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #4a88f7;
}

.tagEdit {
  padding-left: 20px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;

  span {
    display: inline-block;
    padding: 0 15px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    background: #f7f7f7;
    border-radius: 4px;
  }
}

.companySub {
  position: relative;
  left: 0;
  top: 16px;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 600;
  color: #333333;
  background-color: #fff;
}

.subMain {
  position: relative;
  left: 0;
  top: 32px;
  min-height: 622px;
  background-color: #fff;
}

.sub-nav {
  height: 60px;
  background-color: #f8f9fb;
}

.sub-nav tr th {
  text-align: left;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  padding-left: 20px;
}

.sub-main {
  background-color: #fff;
  tr {
    height: 50px;
  }
}

.sub-main tr td {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
  padding-left: 20px;
}
</style>
