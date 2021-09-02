// 登陆相关组件
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
    >
      <el-form-item>
        <div class="login-header"></div>
      </el-form-item>

      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onLogin" class="login-btn"
          >立即登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { login } from "@/api/user.js";

export default {
  name: "LoginIndex",
  data() {
    return {
      // checked: true,
      user: {
        mobile: "13911111111", //手机号
        code: "246810", //验证码
        agree: true, //是否同意协议
      },
      formRules: {
        mobile: [
          { required: true, message: "请输入手机号", triggle: "blur" },
          {
            pattern: /^1[2-9]\d{9}$/,
            message: "请输入正确的手机格式",
            triggle: "blur",
          },
        ],
        code: [
          { required: true, message: "请输入验证码", triggle: "blur" },
          { pattern: /\d{6}$/, message: "验证码为6位数数字", triggle: "blur" },
        ],
        agree: [
          {
            // 自定义校验规则
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error("未勾选用户协议"));
              } else {
                callback();
              }
            },
            triggle: "blur",
          },
        ],
      },
    };
  },
  rules: {},
  methods: {
    onLogin() {
      // 获取表单数据
      const user = this.user;

      // 表单验证
      this.$refs["login-form"].validate((valid) => {
        // 表单验证失败，停止请求提交
        if (!valid) {
          return;
        }

        // 验证通过，调用login()
        this.login();
      });
    },

    login() {
      // 验证通过，提交登陆
      login(this.user)
        .then((res) => {

          // 登陆请求成功,跳转首页
          this.$router.push('/')
        })
        .catch((err) => {
          // 登陆请求失败
          console.log("登陆失败", err);
        });
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column; //竖直排列
  justify-content: center;
  align-items: center;
  background: url(./img-kj.png);
  background-size: contain;
  .login-header {
    width: 333px;
    height: 100px;
    background: url(./E滁州logo.png) no-repeat;
  }
}

.login-form {
  padding: 20px 50px 30px 50px;
  border-radius: 15px;
  background: #fff;
  min-width: 300px;
  opacity: 0.95;
  .login-btn {
    width: 100%;
  }
}
</style>
