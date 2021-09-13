<template>
  <div class="person-experience">
    <div class="experience-header">
      <span>工作经历</span>
      <div class="add">
        <img src="" alt="" />
        <span @click="AddClick">添加</span>
      </div>
    </div>

    <!-- 添加工作经历 -->
    <div class="addExp" v-if="isShow">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
        class="demo-ruleForm"
      >
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name" @blur="getName"></el-input>
        </el-form-item>

        <el-form-item label="岗位" prop="position">
          <el-input v-model="ruleForm.position" @blur="getPosition"> </el-input>
        </el-form-item>

        <el-form-item label="工作时间" prop="times">
          <el-input v-model="ruleForm.times" @blur="getTimes"> </el-input>
        </el-form-item>

        <el-form-item label="工作内容" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            @blur="getDesc"
            resize="none"
            rows="6"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >添加</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <person-experience-2 :exValue="needData" v-else></person-experience-2>
  </div>
</template>

<script>
import PersonExperience2 from "./personexperience2.vue";
import local from "@/assets/local.js";

export default {
  name: "PersonExperience",
  components: {
    PersonExperience2,
  },
  data() {
    return {
      isShow: true,
      index: 0,
      value1: "",
      needData: {},
      needmessage: [],
      ruleForm: {
        name: "",
        position: "",
        times: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          ,
        ],
        position: [
          { required: true, message: "请输入所在岗位", trigger: "blur" },
        ],
        times: [
          {
            required: true,
            message: "请输入在该岗位的工作时间",
            trigger: "blur",
          },
        ],
        desc: [
          { required: true, message: "请填写具体工作内容", trigger: "blur" },
        ],
      },
    };
  },

  created() {

  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.needData);
          this.isShow = false;
          local.set("workExperience", this.needData);
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      local.remove("workExperience");
    },
    AddClick() {
      this.isShow = true;
    },
    getName() {
      this.needData.name = this.ruleForm.name;
    },
    getPosition() {
      this.needData.position = this.ruleForm.position;
    },
    getTimes() {
      this.needData.times = this.ruleForm.times;
    },
    getDesc() {
      this.needData.desc = this.ruleForm.desc;
    },
  },
};
</script>

<style>
.person-experience {
  position: relative;
  left: 0;
  top: 48px;
  min-height: 400px;
  background-color: #fff;
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
  margin-bottom: 50px;
}

.exp-main {
  position: relative;
  left: 0;
  top: 0;
  margin: 0 24px;
  padding: 14px 16px 28px 16px;
  background-color: #f8f9fb;
}
/* .experience-1 {
  position: relative;
  top: 14px;
  left: 24px;
  width: 1100px;
  background-color: #f8f9fb;
  padding:16px;
} */

.experience-details {
  position: relative;
  left: 0;
  top: 14px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  line-height: 25px;
}
</style>
