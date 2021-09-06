<template>
  <div class="person-work" :class="{ childShow: childshow }">
    <div class="work-details">
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
  </div>
</template>

<script>
export default {
  name: "PersonMassage",
  data() {
    return {
      childshow: true,
      myHope: {},
      personLocation: [
        "琅琊区",
        "南谯区",
        "琅琊新区",
        "苏滁产业园",
        "其他"],
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
  methods: {
    clearClick() {},

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

    // 提交时，提交缓存
    btnClick1() {

    // 发送input数据缓存
    let localData = JSON.stringify(this.myHope)
    localStorage.setItem("HopeWorkDetails",localData);

    // 发送input的值
    this.$emit("childValue",this.myHope);

    // 发送切换申请
    this.$emit("childSwitch",this.childshow)
    this.childshow = !this.childshow

    },
  },
};
</script>

<style lang="less">
.childShow {
  display: none;
}

.person-work {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 1180px;
  height: 410px;
  background-color: #f8f9fb;
}

.work-details {
  position: relative;
  left: 40px;
  top: 30px;
}

.hopework {
  position: absolute;
  left: 0;
  top: 0;
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
  left: 460px;
  top: 0;
  width: 360px;
}

.hopemoney {
  position: absolute;
  left: 0px;
  top: 96px;
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
  left: 460px;
  top: 96px;
  width: 360px;
}

.nowstate {
  position: absolute;
  left: 0;
  top: 192px;
  width: 360px;
}

.workperserve {
  position: absolute;
  left: 0;
  top: 288px;
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
