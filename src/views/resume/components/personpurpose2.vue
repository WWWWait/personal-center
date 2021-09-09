<template>
  <div class="massage-purpose">
    <div class="purpose-content">
      <p class="content-first">
        期望岗位：
        <span @click="clearData">{{ purposeData.hw }}</span>
      </p>
      <p class="content-second">
        期望地点：
        <span>{{ purposeData.hl }}</span>
      </p>
      <p class="content-third">
        期望薪资：
        <span>{{ purposeData.gm }}</span>
      </p>
      <p class="content-fourth">
        工作类型：
        <span>{{ purposeData.pw }}</span>
      </p>
      <p class="content-fifth">
        当前状态：
        <span>{{ purposeData.ns }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PersonPurpose2 from "./personpurpose2.vue";
export default {
  name: "MassagePurpose",
  components: {
    PersonPurpose2,
  },
  props: {
    purposeData: Object,
  },
  data() {
    return {
      purposeShow: false,
    };
  },

  methods: {
    clearData() {
      localStorage.removeItem("HopeWorkData");
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
