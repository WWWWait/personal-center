<template>
  <div class="resume-person">
    <!-- 个人信息头部 -->
    <div class="base-details" >
      <ul>
        <li>
          <span>姓名：</span>
          <span>{{ childFormData.name }}</span>
        </li>
        <li>
          <span>性别：</span>
          <span>{{ childFormData.sex }}</span>
        </li>
        <li>
          <span>出生日期：</span>
          <span>{{ childFormData.date }}</span>
        </li>
        <li>
          <span>工作经验：</span>
          <span>{{ childFormData.exp }}</span>
        </li>
        <li>
          <span>学历：</span>
          <span>{{ childFormData.stu }}</span>
        </li>
        <li>
          <span @click="hunyin">婚姻状况：</span>
          <span>{{ childFormData.mar }}</span>
        </li>
        <li>
          <span>手机：</span>
          <span>{{childFormData.mobile }}</span>
        </li>
      </ul>
    </div>
  </div>
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
      childFormData:{},
      // isHide: true,
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
  props: {
    childFormData: Object,
  },

  methods: {
    hunyin() {
      localStorage.removeItem("personData");
      localStorage.removeItem("circleUrlData")
    },
  },
};
</script>

<style lang="less">
.resume-person {
  position: relative;
  top: 0;
  left: 0;
  padding: 0 40px;
  background-color: #fff;
}

.base-details {
  position: relative;
  top: 0;
  left: 0;
  width: 600px;
  height: 152px;
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


</style>
