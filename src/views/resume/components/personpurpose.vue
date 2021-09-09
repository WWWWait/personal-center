<template>
  <div class="person-work">
    <div class="purpose-header">
      <span>求职意向</span>
      <a>必填</a>
      <div class="edit">
        <img src="" alt="" />
        <span @click="purposeHide">编辑</span>
      </div>
    </div>
    <div class="work-details" v-if="childShow">
      <form action="">
        <!-- 期望岗位 -->
        <div class="hopework">
          <p>
            期望岗位
          </p>
          <label for="name">
            <input
              type="text"
              name="name"
              placeholder="请输入您的期望岗位"
              @blur="hopeWork(event)"
            />
          </label>
        </div>

        <!-- 工作地点 -->
        <div class="hopelocation">
          <p>
            期望地点
          </p>
          <select id="location" @blur="hopeLocation(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in personLocation">{{ i }}</option>
          </select>
        </div>

        <!-- 期望薪资 -->
        <div class="hopemoney">
          <p>
            期望薪资
          </p>
          <select id="money" @blur="giveMoney(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in howMoney">{{ i }}</option>
          </select>
        </div>

        <!-- 工作类型 -->
        <div class="worktype">
          <p>
            工作类型
          </p>
          <select id="type" @blur="workType(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in hopeType">{{ i }}</option>
          </select>
        </div>

        <!-- 当前状态 -->
        <div class="nowstate">
          <p>
            当前状态
          </p>
          <select id="state" @blur="nowState(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in personState">{{ i }}</option>
          </select>
        </div>
      </form>

      <!-- 保存 -->
      <div class="workperserve">
        <button class="btnwork" @click="btnClick1">保存</button>
        <button class="btnwork2">取消</button>
      </div>
    </div>
    <person-purpose-2 v-else :purposeData="myHope"></person-purpose-2>
  </div>
</template>

<script>
import PersonPurpose2 from "./personpurpose2.vue";

export default {
  name: "PersonMassage",
  components: {
    PersonPurpose2,
  },
  data() {
    return {
      childShow: true,
      myHope: {},
      personLocation: ["琅琊区", "南谯区", "琅琊新区", "苏滁产业园", "其他"],
      howMoney: [
        "<1000",
        "1000-3000",
        "3000-5000",
        "5000-10000",
        "<10000",
        "面议",
      ],
      hopeType: ["兼职", "全职"],
      personState: [
        "我是应届毕业生",
        "我目前在职，考虑换个工作环境",
        "我目前已离职，可快速到岗",
        "我暂时不想找工作",
      ],
    };
  },
  
  created() {
    // 判断子组件是否有缓存
    if (JSON.parse(localStorage.getItem("HopeWorkData"))) {
      this.myHope = JSON.parse(localStorage.getItem("HopeWorkData")) || {};
      this.childShow = !this.childShow;
    }
  },

  // mounted() {
  //   if (JSON.stringify(this.myHope) !== "{}") {
  //     return (this.childShow = !this.childShow);
  //   }
  // },

  methods: {
    // 提交时，提交缓存
    btnClick1() {
      // 提交时，本页面隐藏
      this.childShow = false;

      // input数据缓存
      localStorage.setItem("HopeWorkData", JSON.stringify(this.myHope));

      // 界面是否切换缓存
      localStorage.setItem("mountedData", JSON.stringify(this.mounted));
    },

    // 编辑按钮
    purposeHide() {
      this.childShow = true;
    },

    // 获取期待岗位
    hopeWork($event) {
      this.myHope.hw = event.target.value;
    },

    // 获取期望地点
    hopeLocation($event) {
      this.myHope.hl = event.target.value;
    },

    // 获取期望薪资
    giveMoney($event) {
      this.myHope.gm = event.target.value;
    },

    // 获取工作类型
    workType($event) {
      this.myHope.pw = event.target.value;
    },

    // 获取现在状态
    nowState($event) {
      this.myHope.ns = event.target.value;
    },
  },
};
</script>

<style lang="less">
.person-work {
  position: relative;
  left: 0;
  top: 32px;
  width: 1180px;
  background-color: #fff;
}

.purpose-header {
  height: 60px;
  margin: 0 40px;
  border-bottom: 1px solid #efefef;
}

.purpose-header span {
  display: inline-block;
  margin-top: 22px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}

.purpose-header a {
  display: inline-block;
  margin-left: 8px;
  width: 28px;
  height: 20px;
  background-color: #feefea;
  vertical-align: bottom;
  font-size: 10px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #fe6135;
  line-height: 20px;
  text-align: center;
}

.purpose-header .edit {
  float: right;
}

.purpose-header .edit span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
  line-height: 20px;
}

.work-details {
  position: relative;
  left: 0px;
  top: 0px;
  height: 400px;
  background: #f8f9fb;
}

.hopework {
  position: absolute;
  left: 40px;
  top: 30px;
  width: 320px;
  height: 96px;
}

.work-details p {
  margin-bottom: 12px;
}

.person-work input {
  width: 346px;
  height: 38px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  line-height: 14px;
  padding-left: 13px;
}

.hopelocation {
  position: absolute;
  left: 490px;
  top: 30px;
  width: 360px;
}

.hopemoney {
  position: absolute;
  left: 40px;
  top: 126px;
  width: 360px;
}

#money,
#type,
#location,
#state {
  width: 360px;
  height: 38px;
  padding-left: 12px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
  outline: none;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  line-height: 14px;
}

.worktype {
  position: absolute;
  left: 490px;
  top: 126px;
  width: 360px;
}

.nowstate {
  position: absolute;
  left: 40px;
  top: 222px;
  width: 360px;
}

.workperserve {
  position: absolute;
  left: 40px;
  top: 318px;
}

.workperserve .btnwork {
  background: #4a88f7;
  margin-right: 20px;
}

.workperserve .btnwork2 {
  color: #333333;
}
.workperserve button {
  width: 100px;
  height: 40px;
  border-radius: 2px;
  border: 0;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #ffffff;
}
</style>
