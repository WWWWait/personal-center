<template>
  <div class="resume-person">
    <div class="base-header">
      <span>基本信息</span>
      <a>必填</a>
      <div class="base-edit">
        <img src="" alt="" />
        <span @click="editClick">编辑</span>
      </div>
    </div>

    <div class="base-details" :class="{ detailsHide: isHide }">
      <ul>
        <li v-for="i in personDetails">
          <span>{{ i }}</span>
          <span>{{ first }}</span>
        </li>
      </ul>
    </div>
    <!-- <img class="base-img" src="" alt=""> -->
    <div class="base-img">
      <img src="@\views\center\img\默认头像男.png" alt="" />
      <p>上传照片</p>
    </div>
  </div>
  <person-base ref="aaa" @nothing="miaomiaomiao"></person-base>
</template>

<script>
import PersonBase from "./personbase.vue";
export default {
  name: "ResumePerson",
  components: {
    PersonBase,
  },
  data() {
    return {
      isHide: false,
      personDetails: [
        "姓名：",
        "性别：",
        "出生日期：",
        "工作经验：",
        "学历：",
        "婚姻状况：",
        "手机：",
      ],
    };
  },
  methods: {
    editClick() {
      this.isHide = !this.isHide;
      this.$refs.aaa.isShow = !this.$refs.aaa.isShow;
      // localStorage.removeItem("PersonName")
      // console.log(this.$refs.aaa.isShow);
    },
    miaomiaomiao(show) {
      this.isHide = show;
    },
  },
};
</script>

<style lang="less">
.resume-person {
  position: relative;
  top: 16px;
  left: 0;
  padding: 0 40px;
  background-color: #fff;
}

.base-header {
  height: 60px;
  //   line-height: 60px;
  border-bottom: 1px solid #efefef;
}

.base-header span {
  display: inline-block;
  margin-top: 22px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}

.base-header a {
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
  border-radius: 2px;
}

.base-header .base-edit {
  float: right;
}

.base-header .base-edit span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
  line-height: 20px;
}

.base-details {
  position: relative;
  top: 0;
  left: 0;
  width: 600px;
  height: 152px;
}

.detailsHide {
  display: none;
}

.base-details ul {
  margin-top: 22px;
  li {
    float: left;
    width: 270px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    color: #666666;
  }
}

.base-img {
  position: absolute;
  top: 90px;
  right: 40px;
  img {
    width: 64px;
    height: 64px;
  }
  p {
    font-size: 14px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    color: #999999;
    text-align: center;
  }
}
</style>
