<template>
  <div class="setup-content">
    <div class="setup-header">
      <span @click="setupClick1" :class="{ active: isActive }">修改手机 </span>
      <span @click="setupClick1" :class="{ active: !isActive }">修改密码 </span>
      <span @click="setupClick1" :class="{ active: !isActive }">账号绑定 </span>
      <span @click="setupClick1" :class="{ active: !isActive }"
        >简历隐私状态
      </span>
      <span @click="setupClick1" :class="{ active: !isActive }"
        >企业黑名单</span
      >
    </div>
    <div class="setup-main">
      <div class="nowPhone">
        <span class="phoneText">绑定当前手机号</span>
        <span>{{this.phone.pp}}</span>
      </div>
      <div class="changePhone">
        <span class="phoneText">修改当前手机号</span>
        <input type="text" placeholder="请输入您要绑定的手机号" />
      </div>
      <div class="messagePhone">
        <span class="phoneText">短信验证码</span>
        <input type="text" placeholder="请输入您获得的验证码" />
        <button
          @click="messageClick"
          style="background: #F9F9F9;
                color: #4A88F7;
                margin-left:10px;"
        >
          {{ text }}
        </button>
        <span
          style="color: #999999;
                margin-left:20px"
          >没有收到验证码？</span
        >
      </div>
      <div class="btnPhone">
        <button
          style="background: #4A88F7;
                color: #FFFFFF;"
        >
          确认更改
        </button>
      </div>
      <div class="txtPhone">
        <span style="color: #666666;"
          >注：修改手机号后，可使用新手机号登录账号</span
        >
      </div>
    </div>
  </div>

  <!-- 主体 -->
</template>

<script>
import local from "@/assets/local.js"
export default {
  name: "Centersetup",
  data() {
    return {
      phone: {},
      isActive: true,
      text: "获取验证码",
      countdown: 60,
      timer: null,
      isClick: "true",
    };
  },
  created() {
    if (local.get("personData")) {
      this.phone = local.get("personData") || {};
    }
  },
  methods: {
    messageClick() {
      if (this.isClick == false) {
        return;
      }
      this.isClick = false;

      // 启动定时器
      this.loading();
      this.timer = setInterval(() => {
        // 创建定时器
        if (this.countdown === 0) {
          // 关闭定时器
          this.timer && this.clearTimer();
        } else {
          this.loading();
        }
      }, 1000);
    },
    loading() {
      // 启动定时器
      this.countdown--;
      this.text = "重新获取(" + this.countdown + ")";
    },
    clearTimer() {
      // 清除定时器
      clearInterval(this.timer);
      this.timer = null;
      this.text = "获取验证码";
      this.isClick = true;
      this.countdown = 60;
    },
  },
};
</script>

<style lang="less">
.setup-content {
  position: relative;
  left: 0;
  top: -5px;
  width: 1180px;
  height: 790px;
  overflow: hidden;
}

.setup-header .active {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #4a88f7;
  background: #fff;
}

.setup-header {
  position: relative;
  left: 0;
  top: 3px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  background-color: #f1f2f6;
  border-radius: 2px 0px 0px 2px;
}

.setup-header span {
  display: inline-block;
  padding: 0 18px 0 18px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  text-align: center;
  background-color: #f9f9fb;
  cursor: pointer;
}

.setup-main {
  position: relative;
  left: 0;
  top: 15px;
  height: 695px;
  background-color: #fff;
  .nowPhone {
    position: absolute;
    left: 70px;
    top: 50px;
    width: 500px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    span:last-child {
      color: #999999;
    }
  }
  input {
    width: 300px;
    height: 40px;
    outline: none;
    padding-left: 10px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #e5e5e5;
  }
  button {
    width: 100px;
    height: 40px;
    width: 100px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
  }
}

.setup-main .phoneText {
  display: inline-block;
  width: 120px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}

.changePhone {
  position: absolute;
  left: 70px;
  top: 110px;
}

.messagePhone {
  position: absolute;
  left: 70px;
  top: 170px;
}

.btnPhone {
  position: absolute;
  left: 190px;
  top: 250px;
}

.txtPhone {
  position: absolute;
  left: 190px;
  top: 310px;
}
</style>
