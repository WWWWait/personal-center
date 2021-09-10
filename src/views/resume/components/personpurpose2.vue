<template>
  <div class="massage-purpose">
    <div class="purpose-content">
      <p class="content-first">
        期望岗位：
        <span>{{ childData.work }}</span>
      </p>
      <p>
        期望地点：
        <span>{{ childData.location }}</span>
      </p>
      <p>
        期望薪资：
        <span>{{ childData.money }}</span>
      </p>
      <p>
        工作类型：
        <span>{{ childData.type }}</span>
      </p>
      <p>
        当前状态：
        <span>{{ childData.state }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import local from "@/assets/local.js";
export default {
  name: "MassagePurpose",
  props: {
    childData: Object,
  },
  data() {
    return {
      purposeShow: false,
    };
  },

  methods: {
    clearData() {
      local.remove("workData");
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
  top: 0;
  left: 0;
  background-color: #fff;
}

.massage-purpose p {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
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
</style>
