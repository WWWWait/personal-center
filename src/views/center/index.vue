<template>
  <div>
    <!-- 个人中心--信息 -->
    <div class="center-message">
      <div class="center-person">
        <!-- 绑定简历 -->

        <img :src="imgUrl" alt="" />
        <div class="center-person-name">
          <span>{{ first.name }}</span>
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
              <span class="center-person-sex1"
                >{{ first.sex + "" + "    " }}
              </span>
              <span>{{ birth + "岁" + " |" }}</span>
            </div>
            <span class="workyears">{{ first.exp + "  |" }}</span
            ><span class="workreword">{{ second.money +"元"+ " |"}}</span>
            <span class="worklocation">{{ second.location + " |" }}</span>
            <span class="workstatus">{{ second.state }}</span>
          </div>

          <br />

          <div class="center-person-hope">
            <span>{{ second.work }}</span>
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
      <center-message></center-message>
    </div>

    <!-- 个人中心--浏览我的企业 -->
    <div class="center-work">
      <center-browse></center-browse>
    </div>

    <!-- 个人中心--职位推荐 -->
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
import CenterMessage from "./components/centermessage.vue";
import CenterBrowse from "./components/centerbrowse.vue";
import local from "@/assets/local.js";

export default {
  name: "CenterIndex",
  data() {
    return {
      imgUrl:'@/views/center/img/默认头像男.png',
      first: {},
      second: {},
    };
  },
  components: {
    CenterMessage,
    CenterBrowse,
  },
  created() {
    // 判断是否存在本地数据
    if (local.get("formData")) {
      // 存在，则对first赋值
      this.first = local.get("formData") || {};
      this.second = local.get("workData") || {};
      this.imgUrl = local.get("circleUrlData")
    }
  },
  methods: {
    revise() {
      this.$router.push("/resume");
    },
  },
  computed: {
    birth() {
      let birthDayTime = new Date(this.first.date).getTime();

      //当前时间 毫秒
      let nowTime = new Date().getTime();

      //一年毫秒数(365 * 86400000 = 31536000000)
      return Math.ceil((nowTime - birthDayTime) / 31536000000);
    },
  },
};
</script>

<style>
.center-message {
  position: relative;
  left: 0;
  top: 0;
  width: 1180px;
  height: 275px;
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
  top: 16px;
  height: 410px;
  background-color: #fff;
  overflow: hidden;
}

.center-work {
  position: relative;
  left: 0px;
  top: 32px;
  height: 410px;
  background-color: #fff;
  overflow: hidden;
}


.center-recommend {
  position: relative;
  left: 0;
  top: 48px;
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
