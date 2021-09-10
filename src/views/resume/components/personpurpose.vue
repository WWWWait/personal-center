<template>
  <div class="person-work">
    <div class="purpose-header">
      <span>求职意向</span>
      <a>必填</a>
      <div class="edit">
        <img src="" alt="" />
        <span @click="purposeHide">编辑</span>
      </div>
    </div>

    <div class="work-details" v-if="childShow">
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
          <!-- 岗位 -->
          <el-form-item label="期待岗位" prop="work">
            <el-input
              v-model="ruleForm.work"
              placeholder="请输入您期待的岗位"
              style="width:350px"
              @blur="selectWorkClick"
            ></el-input>
          </el-form-item>

          <!-- 工作地点 -->
          <el-form-item label="期望地点" prop="selectLocationData">
            <el-select
              v-model="ruleForm.selectLocationData"
              style="width:350px"
              placeholder="请选择工作所在区域"
              @change="selectLocationClick"
            >
              <el-option
                v-for="item of ruleForm.location"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 期望薪资 -->
          <el-form-item label="期望薪资" prop="selectMoneyData">
            <el-select
              v-model="ruleForm.selectMoneyData"
              style="width:350px"
              placeholder="请选择期望的工资范围"
              @change="selectMoneyClick"
            >
              <el-option
                v-for="item of ruleForm.money"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 工作类型 -->
          <el-form-item label="工作类型" prop="selectTypeData">
            <el-select
              v-model="ruleForm.selectTypeData"
              style="width:350px"
              placeholder="请选择期望的工作类型"
              @change="selectTypeClick"
            >
              <el-option
                v-for="item of ruleForm.type"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>

          <!-- 当前状态 -->
          <el-form-item label="当前状态" prop="selectStateData">
            <el-select
              v-model="ruleForm.selectStateData"
              style="width:350px"
              placeholder="请选择您当前的工作状态"
              @change="selectStateClick"
            >
              <el-option
                v-for="item of ruleForm.state"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <!-- 保存 -->
        <el-form-item>
          <el-button
            type="primary"
            style="width:100px;margin-left:20px"
            @click="submitForm('ruleForm')"
            >立即添加</el-button
          >
          <el-button style="width:100px" @click="resetForm('ruleForm')"
            >取消</el-button
          >
        </el-form-item>
      </div>
    </div>
    <person-purpose-2 v-else :childData="myHope"></person-purpose-2>
  </div>
</template>

<script>
import PersonPurpose2 from "./personpurpose2.vue";
import local from "@/assets/local.js";

export default {
  name: "PersonMassage",
  components: {
    PersonPurpose2,
  },
  data() {
    return {
      childShow: true,
      myHope: {},
      ruleForm: {
        selectLocationData: "",
        selectMoneyData: "",
        selectTypeData: "",
        selectStateData: "",
        work: "",
        location: ["滁州市", "琅琊区", "南谯区", "琅琊新区", "乌衣", "其他"],
        money: [
          "<1000",
          "1000-3000",
          "3000-5000",
          "5000-8000",
          "8000-10000",
          ">10000",
        ],
        type: ["兼职", "全职"],
        state: [
          "我是应届毕业生",
          "我目前在职，考虑换个工作环境",
          "我目前已离职，可快速到岗",
          "我暂时不想找工作",
        ],
      },
      rules: {
        selectLocationData: [
          { required: true, message: "请输入您期望的岗位", trigger: "blur" },
        ],
        selectMoneyData: [
          { required: true, message: "请选择工作所在区域", trigger: "change" },
        ],
        selectTypeData: [
          {
            required: true,
            message: "请输入期望的工资范围",
            trigger: "change",
          },
        ],
        selectStateData: [
          {
            required: true,
            message: "请输入期望的工作类型",
            trigger: "change",
          },
        ],
        work: [
          {
            required: true,
            message: "请输入您当前的工作状态",
            trigger: "change",
          },
        ],
        location: [
          {
            type: "array",
            required: true,
            message: "请选择工作区域",
            trigger: "change",
          },
        ],
        money: [
          {
            type: "array",
            required: true,
            message: "请选择您的期望薪资",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请选择您的工作类型",
            trigger: "change",
          },
        ],
        state: [
          {
            type: "array",
            required: true,
            message: "请选择您当前的工作状态",
            trigger: "change",
          },
        ],
      },
    };
  },

  created() {
    if (local.get("workData")) {
      this.childShow = false;
      this.myHope = local.get("workData");
    } else {
      this.childShow = true;
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.childShow = false;
          local.set("workData", this.myHope);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.myHope = local.get("workData");
      this.$refs[formName].resetFields();
      this.childShow = false
    },

    // 工作
    selectWorkClick() {
      this.myHope.work = this.ruleForm.work;
    },

    // 地点
    selectLocationClick(value) {
      this.myHope.location = JSON.parse(JSON.stringify(value));
    },

    // 薪资
    selectMoneyClick(value) {
      this.myHope.money = value;
    },

    // 类型
    selectTypeClick(value) {
      this.myHope.type = value;
    },

    // 状态
    selectStateClick(value) {
      this.myHope.state = value;
    },
    // 编辑
    purposeHide() {
      this.childShow = true;
    },
  },
};
</script>

<style lang="less">
.person-work {
  position: relative;
  left: 0;
  top: 32px;
  width: 1180px;
  background-color: #fff;
}

.purpose-header {
  height: 60px;
  margin: 0 40px;
  border-bottom: 1px solid #efefef;
}

.purpose-header span {
  display: inline-block;
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
}

.purpose-header .edit {
  float: right;
}

.purpose-header .edit span {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
  line-height: 20px;
}

.work-details {
  position: relative;
  left: 0px;
  top: 0px;
  height: 390px;
  padding: 30px 0 0 40px;
  background-color: #f8f9fb;
}

.work-details .elForm {
  position: relative;
  left: 0;
  top: 0;
  width: 850px;
}

.work-details .el-form-item__label {
  line-height: 15px;
}

.work-details .el-form--inline .el-form-item {
  margin-right: 60px;
  margin-bottom: 30px;
}
</style>
