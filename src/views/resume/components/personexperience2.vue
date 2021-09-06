<template>
  <div class="experience2">
    <div class="expAll">
      <!-- 工作经历面板 -->

      <!-- 添加工作经历 -->
      <div class="addExp" :class="{ show: !noShow }">
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
            <el-button type="primary" @click="submitForm('ruleForm')"
              >添加</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience2",
  data() {
    return {
      noShow: false,
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
    submitForm(formName) {
      // this.isHas = false;
      let kkk = this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          this.noShow = !this.noShow;
        } else {
          // console.log("error submit!!");
          return false;
        }
      });

      if (kkk == false) {
        this.noShow = false;
      }

      let zzz = JSON.stringify(this.ruleForm);
      console.log(zzz);
      localStorage.setItem("localData",zzz);

      this.$emit("experienceValue", this.ruleForm);

      this.$emit("experienceState", this.noShow);

    },
    resetForm(formName) {

      this.$refs[formName].resetFields();

    },
  },
};
</script>

<style></style>
