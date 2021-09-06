<template>
  <div class="person-experience">
    <div class="experience-header">
      <span>工作经历</span>
      <div class="add">
        <img src="" alt="" />
        <span @click="AddClick">添加</span>
      </div>
    </div>
    <div class="experience-main1" :class="{ noHas: isHas }">
      <div class="noExp" @click="getHas">
        <span>+ 添加工作经历</span>
      </div>
    </div>
    <div class="exp-main" :class="{ show: isShow }">
      <div class="experience-1">
        <span class="company">{{ exValue.name }}</span>
        <span class="position">{{ exValue.position }}</span>
        <!-- <span class="times">{{ruleForm.time}}</span> -->
      </div>
      <div class="experience-details" style="white-space: pre-line">
        {{ exValue.desc }}
      </div>
    </div>

    <person-experience-2
      ref="ccc"
      @experienceValue="getValue"
      @experienceState="getState"
    ></person-experience-2>
    <!-- <slot ref="ccc"></slot> -->
  </div>
</template>

<script>
import PersonExperience2 from "./personexperience2.vue";

export default {
  name: "PersonExperience",
  components: {
    PersonExperience2,
  },
  data() {
    return {
      isHas: false,
      isShow: true,
      exValue: {
        name: "",
        position: "",
        desc: "",
      },
    };
  },
  // created() {
  //   let uuu = JSON.parse(localStorage.getItem("localData"));
  //   this.exValue = uuu;
  // },
  mounted() {
    // localStorage.removeItem("localData");
    // console.log(document.querySelector(".company").innerText);
    // if (document.querySelector(".company").innerText ==='') {
    //   console.log(1);
    //   // document.querySelector(".experience-main1").remove();
    //   // console.log(2468);
    // }
  },

  methods: {
    AddClick() {
      this.isShow = true;
      this.isHas = true;
      this.$refs.ccc.noShow = this.isShow;
    },
    getHas() {
      this.isHas = true;
      this.$refs.ccc.noShow = true;
    },
    getValue(value) {
      this.exValue = value;
    },
    getState(state) {
      this.isShow = state;
    },
  },
};
</script>

<style>
.noHas {
  display: none;
}

.person-experience {
  position: relative;
  left: 0;
  top: 48px;
  /* padding-bottom: 24px; */
  background-color: #f8f9fb;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
  overflow: hidden;
}

.experience-header {
  height: 60px;
  background-color: #fff;
}

.experience-header > span {
  display: inline-block;
  margin-left: 40px;
  margin-top: 22px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}

.experience-header .add {
  float: right;
  margin-right: 40px;
}

.experience-header .add span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
  line-height: 60px;
}

.addExp {
  position: relative;
  left: 0;
  top: 30px;
  width: 800px;
}

.exp-main {
  min-height: 300px;
}
.experience-1 {
  margin: 30px 0 0 40px;
}

.experience-1 .company {
  margin-right: 12px;
  font-weight: bolder;
}

.experience-1 .position {
  margin: 0 12px;
}

.experience-1 .times {
  margin-left: 12px;
}

.experience-details {
  position: relative;
  left: 40px;
  top: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  line-height: 25px;
}

.experience-details p {
  margin-top: 12px;
}

.experience-main1 {
  position: relative;
  left: 0;
  top: 0;
  min-height: 300px;
}

.noExp {
  position: absolute;
  left: 240px;
  top: 100px;
  bottom: 100px;
  width: 600px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #4a88f7;
  cursor: pointer;
  border: 1px dashed #bfbfbf;
  background-color: #f4f3f3;
}

.show {
  display: none;
}
</style>
