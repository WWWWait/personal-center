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
    <!-- 个人信息头部 -->
    <div class="base-details" :class="{ detailsHide: isHide }">
      <ul>
        <li>
          <span>姓名：</span>
          <span>{{ tMessage.pn }}</span>
        </li>
        <li>
          <span>性别：</span>
          <span>{{ tMessage.ps }}</span>
        </li>
        <li>
          <span>出生日期：</span>
          <span>{{ tMessage.pb }}</span>
        </li>
        <li>
          <span>工作经验：</span>
          <span>{{ tMessage.pw }}</span>
        </li>
        <li>
          <span>学历：</span>
          <span>{{ tMessage.pe }}</span>
        </li>
        <li>
          <span>婚姻状况：</span>
          <span>{{ tMessage.pm }}</span>
        </li>
        <li>
          <span>手机：</span>
          <span>{{ tMessage.pp }}</span>
        </li>
      </ul>
    </div>

    <!-- <img class="base-img" src="" alt=""> -->
    <div class="base-img">
      <img src="@\views\center\img\默认头像男.png" alt="" />
      <p>上传照片</p>
    </div>
  </div>
  <person-base
    ref="aaa"
    @everything="childEvent1"
    @nothing="childEvent2"
  ></person-base>
</template>

<script>
import PersonBase from "./personbase2.vue";
export default {
  name: "ResumePerson",
  components: {
    PersonBase,
  },
  data() {
    return {
      tMessage: {}, //获取personbase.vue中提交的表单数据
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
  created() {
    // 创建created()生命周期函数  在组件渲染前加载本地缓存
    localStorage.getItem("inputValue");
    let xxx = JSON.parse(localStorage.getItem("inputValue"));
    this.tMessage = xxx
  },
  methods: {
    // 获取子组件表单数据
    childEvent1(value) {
      this.tMessage = value;
      // console.log(this.tMessage);
    },

    // 获取子组件切换事件
    childEvent2(show) {
      this.isHide = show;
    },

    // 切换子组件
    editClick() {
      this.isHide = !this.isHide;
      this.$refs.aaa.isShow = !this.$refs.aaa.isShow;
      // localStorage.removeItem("PersonName")
      // console.log(this.$refs.aaa.isShow);
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
