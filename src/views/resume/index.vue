<template>
  <div>
    <div class="resume-header">
      <div class="score">
        <span>65</span>
        <a>简历评分</a>
      </div>
      <div class="massage">
        <ul>
          <li class="base">
            <img src="" alt="" />
            <!-- <img src="" alt="" > -->
            <span class="">基本信息</span>
            <a>必填</a>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="purpose">求职意向</span>
            <a>必填</a>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="experience">工作经历</span>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="education">教育经历</span>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="preject">项目经历</span>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="certificate">培训与认证</span>
          </li>
          <li>
            <img src="" alt="" />
            <!-- <img src="" alt=""> -->
            <span class="describe">技能与自我描述</span>
          </li>
        </ul>
      </div>
      <button>预览简历</button>
    </div>
  </div>
  <resume-person></resume-person>
  <!-- <person-base></person-base> -->
  <person-purpose></person-purpose>
  <person-experience></person-experience>
</template>

<script>
import ResumePerson from '../resume/components/resume-person.vue'

import PersonBase from './components/personbase.vue'
import PersonPurpose from '../resume/components/personpurpose.vue'
import PersonExperience from '../resume/components/personexperience.vue'

export default {
  name: "ResumeIndex",
  components:{
    ResumePerson,
    PersonBase,
    PersonPurpose,
    PersonExperience
  }
};
</script>

<style>
.resume-header {
  position: relative;
  width: 1180px;
  height: 70px;
  background-color: #fff;
}

.score {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 70px;
  text-align: center;
  border-right: 1px solid #f1f2f6;
  background: #ffffff;
}

.score span {
  display: inline-block;
  width: 29px;
  height: 24px;
  font-size: 24px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  margin: 12px 35px 0 36px;
  color: #fe6135;
  /* line-height: 24px; */
}

.score a {
  width: 48px;
  height: 12px;
  font-size: 12px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  line-height: 12px;
}

.massage ul {
  position: relative;
  left: 130px;
  top: 28px;
}

.massage ul li {
  float: left;
  margin-left: 26px;
}

.massage ul li img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-right: 8px;
  background-color: red;
}

.massage ul li a {
  display: inline-block;
  margin-left: 8px;
  width: 30px;
  height: 16px;
  background-color: #feefea;
  /* vertical-align: middle; */
  font-size: 10px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #fe6135;
  line-height: 16px;
  text-align: center;
  border-radius: 2px;
}

.massage ul li span {
  width: 56px;
  height: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 14px;
}
.resume-header button {
  float: right;
  width: 96px;
  height: 34px;
  margin-top: 20px;
  margin-right: 50px;
  background: #4a88f7;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #ffffff;
}
</style>