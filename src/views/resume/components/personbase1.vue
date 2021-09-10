<template>
  <div class="person-message">
    <div class="base-header">
      <span>基本信息</span>
      <a>必填</a>
      <div class="base-edit">
        <img src="" alt="" />
        <span @click="editClick">编辑</span>
      </div>
    </div>

    <div class="message-details" v-if="isBlock">
      <div class="elForm">
        <el-form
          inline
          label-position="top"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 姓名 -->
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入您的姓名"
              style="width:350px"
              @blur="getName"
            ></el-input>
          </el-form-item>

          <!-- 性别 -->
          <el-form-item label="性别" prop="sex">
            <el-button
              style="width:170px"
              @click="manClick"
              :class="{ active: isActive }"
              >男</el-button
            >
            <el-button
              style="width:170px"
              @click="womanClick"
              :class="{ active: isShow }"
              >女</el-button
            >
          </el-form-item>

          <!-- 出生日期 -->
          <el-form-item label="出生日期" prop="date1" style="width:350px">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              format="YYYY 年 MM 月 DD 日"
              value-format="YYYY-MM-DD"
              placeholder="请选择您的出生日期"
              style="width: 350px;"
              @blur="getBrithDay"
            >
            </el-date-picker>
          </el-form-item>

          <!-- 工作经验 -->
          <el-form-item label="工作经验" prop="selectLetterValue">
            <el-select
              v-model="ruleForm.selectLetterValue"
              placeholder="请选择您的工作年限"
              style="width:350px"
              @change="selectLetterClick"
            >
              <el-option
                v-for="(item, index) in ruleForm.Exp"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 学历 -->
          <el-form-item label="学历" prop="selectStuValue">
            <el-select
              v-model="ruleForm.selectStuValue"
              placeholder="请选择您的学历"
              style="width:350px"
              @change="selectStuClick"
            >
              <el-option
                v-for="(itme, index) in ruleForm.Stu"
                :key="index"
                :label="itme.label"
                :value="itme.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 婚姻状况 -->
          <el-form-item label="婚姻状况" prop="selectMarValue">
            <el-select
              v-model="ruleForm.selectMarValue"
              placeholder="请选择婚姻状况"
              style="width:350px"
              @change="selectMarClick"
            >
              <el-option
                v-for="itme in ruleForm.Mar"
                :label="itme.label"
                :value="itme.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 手机号码 -->
          <el-form-item label="手机" prop="mobile">
            <el-input
              v-model="ruleForm.mobile"
              placeholder="请输入您的手机号"
              style="width:350px"
              @blur="getMobile"
            ></el-input>
          </el-form-item>
        </el-form>

        <!-- 保存 -->
        <el-form-item>
          <el-button type="primary" style="width:100px;margin-left:20px" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button style="width:100px" @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </div>
      <!-- <img class="base-img" src="" alt=""> -->
      <div class="base-img">
        <img src="@\views\center\img\默认头像男.png" alt="" />
        <p>上传照片</p>
      </div>
    </div>
    <person-base-2 :childFormData="formData" v-else></person-base-2>
  </div>
</template>

<script>
import PersonBase2 from "./personbase2.vue";
import local from "@/assets/local.js";

export default {
  name: "Personmessage",
  components: {
    PersonBase2,
  },
  data() {
    let checkPhone = (rule,value,callback)=>{
          let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入正确的手机号'));
          } else {
            callback();
          }
        };
    return {
      formData: {},
      isActive: false,
      isShow: false,
      isBlock: true,
      ruleForm: {
        selectLetterValue: "",
        selectStuValue: "",
        selectMarValue: "",
        name: "",
        sex: "",
        date1: "",
        Exp: [
          { value: 1, label: "一年以下" },
          { value: 2, label: "一年至三年" },
          { value: 3, label: "三年到五年" },
          { value: 4, label: "五年到十年" },
          { value: 5, label: "十年以上" },
        ],
        Stu: [
          { value: 1, label: "初中及以下" },
          { value: 2, label: "高中" },
          { value: 3, label: "大专" },
          { value: 4, label: "本科" },
          { value: 5, label: "硕士及以上" },
        ],
        Mar: [
          { value: 1, label: "未婚" },
          { value: 2, label: "已婚" },
        ],
        mobile: "",
      },
      rules: {
        selectLetterValue: [
          { required: true, message: "请选择您的工作经验", trigger: "change" },
        ],
        selectStuValue: [
          { required: true, message: "请选择您的学历", trigger: "change" },
        ],
        selectMarValue: [
          { required: true, message: "请选择您的婚姻状况", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        Exp: [{ required: true, message: "工作经历", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择您的出生日期",
            trigger: "change",
          },
        ],
        Stu: [
          {
            type: "object",
            required: true,
            message: "请选择您的教育程度",
            trigger: "change",
          },
        ],
        Mar: [
          { required: true, message: "请选择您的婚姻状况", trigger: "change" },
        ],
        mobile: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    if (local.get("formData")) {
      this.formData = local.get("formData");
      this.isBlock = false;
    }
  },

  methods: {
    // 提交时获取表单数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isBlock = false;
          // 获取本地缓存
          local.set("formData", this.formData);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.formData = local.get("formData")
      this.$refs[formName].resetFields();
      this.isBlock=!this.isBlock
    },

    // 姓名
    getName() {
      this.formData.name = this.ruleForm.name;
    },

    // 性别
    manClick() {
      this.isActive = true;
      this.isShow = false;
      if (this.isActive) {
        this.formData.sex = "男";
      }
    },
    womanClick() {
      this.isShow = true;
      this.isActive = false;
      if (this.isActive == false) {
        this.formData.sex = "女";
      }
    },

    // 出生日期
    getBrithDay() {
      console.log(this.ruleForm.date1);
      this.formData.date = this.ruleForm.date1;
    },

    // 工作经验
    selectLetterClick(value) {
      this.ruleForm.selectLetterValue = this.ruleForm.Exp[value - 1].label;
      this.formData.exp = this.ruleForm.Exp[value - 1].label;
    },

    // 学历
    selectStuClick(value) {
      this.ruleForm.selectStuValue = this.ruleForm.Stu[value - 1].label;
      this.formData.stu = this.ruleForm.Stu[value - 1].label;
    },

    // 婚姻状况
    selectMarClick(value) {
      this.ruleForm.selectMarValue = this.ruleForm.Mar[value - 1].label;
      this.formData.mar = this.ruleForm.Mar[value - 1].label;
    },

    // 手机号
    getMobile() {
      this.formData.mobile = this.ruleForm.mobile;
    },
    editClick() {
      this.isBlock = true;
    },
  },
};
</script>

<style lang="less">
.person-message {
  position: relative;
  left: 0;
  top: 16px;
  width: 1180px;
  background-color: #fff;
}

.message-details {
  position: relative;
  left: 0px;
  top: 0px;
  height: 480px;
  padding: 30px 0 0 40px;
  background-color: #f8f9fb;
}

.elForm {
  position: relative;
  left: 0;
  top: 0;
  width: 850px;
}

.el-form-item__label {
  line-height: 15px;
}

.el-form--inline .el-form-item {
  margin-right: 60px;
  margin-bottom: 30px;
}

.base-header {
  height: 60px;
  padding: 0 40px;
  border-bottom: 1px solid #efefef;
}

.base-header span {
  display: inline-block;
  margin-top: 22px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}
.active {
  border: 1px;
  background: #ffffff;
  border: 1px solid #4a88f7;
  border-radius: 4px;
}

.base-header a {
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

.base-header .base-edit {
  float: right;
}

.base-header .base-edit span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
  line-height: 20px;
}

.message-details .base-img {
  position: absolute;
  top: 120px;
  right: 40px;
  img {
    width: 64px;
    height: 64px;
  }
  p {
    font-size: 14px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    color: #999999;
    text-align: center;
  }
}
</style>
