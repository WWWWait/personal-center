<template>
  <div class="center-container">
    <!-- 个人中心--信息 -->
    <div class="center-message">
      <div class="center-person">
        <!-- 绑定简历 -->

        <img src="@\views\center\img\默认头像男.png" alt="" />
        <div class="center-person-name">
          <span>{{first.pn}}</span>
          <div class="center-person-time">
            <span>最近更新：时间戳</span>
          </div>
          <div id="goodjob">
            <img src="@\views\center\img\收简历.png" alt="" />
            <span>即时接受优质岗位</span>
          </div>

          <br />

          <div class="center-person-details">
            <div class="center-person-sex">
              <span class="center-person-sex1">男 </span>
              <span>年龄</span>
            </div>
            |<span class="workyears">1年</span> |<span class="workreword"
              >6000-10000</span
            >
            |<span class="worklocation">滁州市</span> |<span class="workstatus"
              >我目前已经离职，可快速到岗</span
            >
          </div>

          <br />

          <div class="center-person-hope">
            <span>行政文员</span>
          </div>
        </div>
      </div>

      <div class="center-person2">
        <ul>
          <li @click="revise">
            <img src="@\views\center\img\编辑简历.png" alt="" />
            <p>编辑简历</p>
          </li>
          <li>
            <img src="@\views\center\img\预览简历.png" alt="" />
            <p>预览简历</p>
          </li>
          <li>
            <img src="@\views\center\img\刷新简历.png" alt="" />
            <p>刷新简历</p>
          </li>
          <li>
            <img src="@\views\center\img\企业黑名单.png" alt="" />
            <p>企业黑名单</p>
          </li>
          <li class="last-li">
            <img src="@\views\center\img\下载简历.png" alt="" />
            <p>下载简历</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 个人中心--收藏 -->
    <div class="center-coll">
      <collect-message></collect-message>
    </div>

    <!-- 个人中心--关注的企业 -->
    <div class="center-work">
      <center-browse></center-browse>
    </div>

    <!-- 个人中心--推荐工作 -->
    <div class="center-recommend">
      <div class="recommend-header">
        <span
          style="font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bolder;color:#333;"
          >职位推荐
        </span>
        <span>换一批</span>
      </div>
      <div class="recommend-end">
        <span>暂无推荐职位</span>
      </div>
    </div>
  </div>
</template>

<script>
import CollectMessage from "./components/collectmessage.vue";
import CenterBrowse from "./components/centerbrowse.vue";

export default {
  name: "CenterIndex",
  data () {
    return {
      first: JSON.parse(localStorage.getItem("inputValue")),
    }
  },
  components: {
    CollectMessage,
    CenterBrowse,
  },
  methods: {
    revise() {
      this.$router.push("/resume");
    },
  },
};
</script>

<style>
.center-message {
  position: relative;
  left: 0;
  top: 16px;
  width: 1180px;
  height: 285px;
  background-color: #f1f2f6;
}

.center-person {
  position: absolute;
  left: 0;
  top: 0;
  width: 1100px;
  height: 140px;
  padding: 30px 40px 0 40px;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
}

.center-person div {
  display: inline-block;
  vertical-align: top;
}

.center-person-name > span {
  margin-right: 20px;
}

.center-person > img {
  width: 72px;
  height: 72px;
  margin-right: 20px;
  /* background-color: red; */
}

.center-person2 {
  position: absolute;
  left: 0;
  top: 131px;
  width: 1100px;
  height: 143px;
  padding: 0px 40px;
  background-color: #fff;
}
#goodjob {
  position: absolute;
  right: 40px;
  top: 32px;
  cursor: pointer;
}
#goodjob > img {
  margin-right: 5px;
}

#goodjob span {
  font-size: 14px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  vertical-align: top;
  color: #4a88f7;
  line-height: 20px;
}

.center-person-name span {
  font-size: 18px;
  font-family: PingFang-SC-Semibold, PingFang-SC;
  font-weight: 600;
  color: #333;
}

.center-person-time {
  padding-top: 2px;
}
.center-person-time span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #2ba63c;
  line-height: 14px;
}

.center-person-details {
  position: relative;
  left: 0;
  top: 0;
  margin-top: 20px;
  height: 14px;
}

.center-person-details span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  /* line-height: 14px; */
  /* border-right: 1px solid gray; */
  margin: 0 5px;
  color: #333333;
}

.center-person-details .center-person-sex1 {
  margin: 0;
}
.center-person-hope {
  position: relative;
  left: 0;
  top: 0;
  margin-top: 12px;
}

.center-person-hope span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 14px;
}

.center-person2 ul {
  margin-top: 20px;
}

.center-person2 ul li {
  float: left;
  width: 172px;
  height: 90px;
  text-align: center;
  padding-top: 10px;
  margin-right: 60px;
  cursor: pointer;
  background-color: #fff;
}
.center-person2 ul .last-li {
  margin: 0;
}
.center-person2 ul li img {
  width: 48px;
  height: 48px;
}

.center-person2 ul li p {
  margin-top: 12px;
  height: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
  line-height: 18px;
}

.center-coll {
  position: relative;
  left: 0px;
  top: 20px;
  right: 0;
  bottom: 0;
  width: 1180px;
  height: 350px;
  background-color: #fff;
}

.center-work {
  position: relative;
  left: 0px;
  top: 40px;
  width: 1180px;
  height: 290px;
  background-color: #fff;
}

.center-recommend {
  position: relative;
  left: 0;
  top: 60px;
  width: 1180px;
  min-height: 200px;
  padding-left: 20px;
  background-color: #fff;
}

.recommend-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 20px;
}

.recommend-header span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #999999;
}

.recommend-end {
  height: 140px;
  text-align: center;
}

.recommend-end span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 100px;
}
</style>
