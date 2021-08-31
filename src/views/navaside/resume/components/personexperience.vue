<template>
  <div class="person-experience">
    <div class="experience-header">
      <span>工作经历</span>
      <div class="add">
        <img src="" alt="" />
        <span @click="AddClick">添加</span>
      </div>
    </div>

    <!-- <div class="exp-main" :class="{ show: isShow }">
      <div class="experience-1">
        <span class="company">创钛中科智能科技(苏州)有限公司</span>|
        <span class="position">Java软件工程师</span>|
        <span class="times">2019.01 - 至今</span>
      </div>
      <div class="experience-details">
        <p>1.参与公司项目需求的设计和讨论，以及需求文档的编写</p>
        <p>2.公司项目源码的管理，权限的分配</p>
        <p>3.项目团队研发的主力，主要负责后端代码的编写业务逻辑的实现</p>
        <p>4.Linux部署环境的搭建</p>
        <p>5.公司项目的部署发布，包括后续的更新和维护</p>
      </div>
    </div> -->
    <div class="exp-main" :class="{ show: isShow }">
      <div class="experience-1">
        <span class="company">{{ ruleForm.name }}</span
        >| <span class="position">{{ ruleForm.position }}</span
        >|
        <!-- <span class="times">{{ruleForm.time}}</span> -->
      </div>
      <div class="experience-details">
        {{ ruleForm.desc }}
      </div>
    </div>

    <div class="addExp" :class="{ show: !isShow }">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="200px"
        class="demo-ruleForm"
      >
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="岗位" prop="position">
          <el-input v-model="ruleForm.position"> </el-input>
        </el-form-item>

        <el-form-item label="工作内容" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            resize="none"
            rows="6"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="hideClick">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonExperience",
  data() {
    return {
      isShow: false,
      value1: "",
      ruleForm: {
        name: "",
        position: "",
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
        desc: [
          { required: true, message: "请填写具体工作内容", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    AddClick() {
      this.isShow = true;
    },
    hideClick() {
      this.isShow = false;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.person-experience {
  position: relative;
  left: 0;
  top: 16px;
  height: 924px;
  background-color: #f8f9fb;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
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
}

.experience-details p {
  margin-top: 12px;
}

.show {
  display: none;
}
</style>
