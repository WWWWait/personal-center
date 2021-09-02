<template>
  <div class="massage-purpose">
    <div class="purpose-header">
      <span>求职意向</span>
      <a>必填</a>
      <div class="edit">
        <img src="" alt="" />
        <span>编辑</span>
      </div>
    </div>
    <div class="purpose-content">
      <p class="content-first">
        期望岗位：
        <span>行政文员</span>
      </p>
      <p class="content-second">
        期望地点：
        <span>滁州市</span>
      </p>
      <p class="content-third">
        期望薪资：
        <span>8000-10000元</span>
      </p>
      <p class="content-fourth">
        工作类型：
        <span>全职</span>
      </p>
      <p class="content-fifth">
        当前状态：
        <span>我目前已离职，可快速到岗</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MassagePurpose",
  data() {
    return{

    }
  },
  methods: {},
};
</script>

<style>
.massage-purpose {
  position: relative;
  left: 0;
  top: 16px;
  width: 1180px;
  height: 266px;
  background-color: #f8f9fb;
}

.purpose-header {
  height: 60px;
  background-color: #fff;
}

.purpose-header span {
  display: inline-block;
  margin-left: 40px;
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
  border-radius: 2px;
}

.purpose-header .edit {
  float: right;
  margin-right: 40px;
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
  padding: 30px 0 0 40px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
}

.purpose-content p{
    margin-bottom: 16px;
}
</style>
