<template>
  <div class="person-work">
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
              @blur="personwork(event)"
            />
          </label>
        </div>

        <!-- 工作地点 -->
        <div class="hopelocation">
          <p>
            期望地点
          </p>
          <label for="location">
            <input
              type="text"
              name="location"
              placeholder="请输入您的期望的工作地点"
              @blur="personwork(event)"
            />
          </label>
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
          <select id="type" @blur="workType(event)" >
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in hopeType">{{ i }}</option>
          </select>
        </div>

        <!-- 当前状态 -->
        <div class="nowstate">
          <p>
            当前状态
          </p>
          <label for="state"> <input name="state" type="textarea"/></label>
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
      ipt: null,
      isShow: true,
      isActive: false,
      noActive: false,
      howMoney: [
        "<1000",
        "1000-3000",
        "3000-5000",
        "5000-10000",
        "10000-100000",
      ],
      hopeType:[
        "兼职",
        "全职"
      ],
      inputValue: "",
      obj: {},
      arr: [],
    };
  },
  methods: {
    clearClick() {},

    // 获取期望工作
    personwork($event) {},

    // 获取期望薪资
    giveMoney($event) {},

    // 获取工作经历
    personWork($event) {},

    // 提交时，获取提交缓存
    btnClick1() {
      // 发送input数据缓存
    },
  },
};
</script>

<style lang="less">
.workEdit {
  display: block;
}
.person-work {
  position: relative;
  left: 0;
  top: 0;
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
#type {
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
