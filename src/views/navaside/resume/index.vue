<template>
<div>
  <div class="resume-header">
    <div class="score"></div>
    <div class="massage">
      <ul>
        <li class="base">
          <span class="">基本信息</span>
          <a>必填</a>
        </li>
        <li>
          <span class="purpose">求职意向</span>
          <a>必填</a>
        </li>
        <li>
          <span class="experience">工作经历</span>
        </li>
        <li>
          <span class="education">教育经历</span>
        </li>
        <li>
          <span class="preject">项目经历</span>
        </li>
        <li>
          <span class="certificate">培训与认证</span>
        </li>
        <li>
          <span class="describe">技能与自我描述</span>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ResumeIndex",
};
</script>

<style>
.resume-header {
  width: 1180px;
  height: 70px;
  background-color: #fff;
}

.resume-header .massage ul li {
  display: inline-block;
  background-color: #fff;
}

span{
    background-color: #fff;
  }
</style>
