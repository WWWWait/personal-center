<template>
  <div class="massage-purpose">
    <div class="purpose-header">
      <span>求职意向</span>
      <a>必填</a>
      <div class="edit">
        <img src="" alt="" />
        <span @click="purposeHide">编辑</span>
      </div>
    </div>
    <div class="purpose-content" :class="{ purposeshow: purposeShow }">
      <p class="content-first">
        期望岗位：
        <span>{{ childData.hw }}</span>
      </p>
      <p class="content-second">
        期望地点：
        <span>{{ childData.hl }}</span>
      </p>
      <p class="content-third">
        期望薪资：
        <span>{{ childData.gm }}</span>
      </p>
      <p class="content-fourth">
        工作类型：
        <span>{{ childData.pw }}</span>
      </p>
      <p class="content-fifth">
        当前状态：
        <span>{{ childData.ns }}</span>
      </p>
    </div>
    <person-purpose-2
      ref="person2Event"
      @childValue="childEle"
      @childSwitch="childInput"
    ></person-purpose-2>
  </div>
</template>

<script>
import PersonPurpose2 from "./personpurpose2.vue";
export default {
  name: "MassagePurpose",
  components: {
    PersonPurpose2,
  },
  data() {
    return {
      purposeShow: false,
      childData: {},
    };
  },
  created() {
    // 接收子组件的本地缓存
    localStorage.getItem("HopeWorkDetails");
    let yyy = JSON.parse(localStorage.getItem("HopeWorkDetails"));
    this.childData = yyy;
  },
  methods: {
    purposeHide() {
      this.purposeShow = !this.purposeShow;
      this.$refs.person2Event.childshow = !this.$refs.person2Event.childshow;
    },
    childEle(value) {
      this.childData = value;
    },
    childInput(value) {
      this.purposeShow = value;
    },
  },
};
</script>

<style>
/* .puerposeshow {
  display: block;
} */

.massage-purpose {
  position: relative;
  top: 32px;
  left: 0;

  background-color: #fff;
}

.purpose-header {
  height: 60px;
  padding:0 40px;
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

.purpose-content {
  padding: 30px 40px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
}

.purpose-content p {
  margin-bottom: 16px;
}

.purposeshow {
  display: none;
}
</style>
