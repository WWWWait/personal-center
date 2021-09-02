<template>
  <div class="person-massage">
    <div class="massage-base">
      <span>基本信息</span>
      <a>必填</a>
    </div>
    <div class="massage-details">
      <form action="">
        <!-- 姓名 -->
        <div class="username">
          <p>
            <img src="" alt="" />
            姓名
          </p>
          <label for="name">
            <input type="text" name="name" value="请输入您的姓名" />
          </label>
        </div>

        <!-- 性别 -->
        <div class="sex">
          <p>
            <img src="" alt="" />
            性别
          </p>
          <button
            class="man"
            :class="{ btnActive: isActive }"
            @click="btnClick"
          >
            男
          </button>
          <button
            class="woman"
            :class="{ btnActive: !isActive }"
            @click="btnClick"
          >
            女
          </button>
        </div>

        <!-- 出生日期 -->
        <div class="born-date">
          <p>
            <img src="" alt="" />
            出生日期
          </p>
          <label for="-date">
            <input type="date" name="-date" value="1990-01-01" />
          </label>
        </div>

        <!-- 工作经历 -->
        <div class="work">
          <p>
            <img src="" alt="" />
            工作经历
          </p>
          <select id="work">
            <option v-for="i in workExp" :value="i">{{ i }}</option>
          </select>
        </div>

        <!-- 学历 -->
        <div class="edu">
          <p>
            <img src="" alt="" />
            学历
          </p>
          <select id="edu">
            <option v-for="i in edu" :value="i">{{ i }}</option>
          </select>
        </div>

        <!-- 婚姻状况 -->
        <div class="mar">
          <p>
            <img src="" alt="" />
            婚姻状况
          </p>
          <select id="mar">
            <option v-for="i in mar" :value="i">{{ i }}</option>
          </select>
        </div>

        <!-- 手机 -->
        <div class="phone">
          <p>
            <img src="" alt="" />
            手机
          </p>
          <label for="phone">
            <input type="text" name="phone" value="请输入您的手机号" />
          </label>
          <a>修改</a>
        </div>
      </form>

      <!-- 保存 -->
      <div class="massage-preserve">
        <button class="btn-1">保存</button>
        <button class="btn-2">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonMassage",
  data() {
    return {
      isShow: true,
      isActive: true,
      workExp: [
        "请选择",
        "一年以下",
        "一年到三年",
        "三年到五年",
        "五年到十年",
        "十年以上",
      ],
      edu: ["请选择", "高中以下", "高中", "大专", "本科", "硕士", "硕士及以上"],
      mar: ["请选择", "未婚", "已婚", "离异"],
    };
  },
  methods: {
    btnClick() {
      this.isActive = this.isActive ? false : true;
      console.log(this.isActive);
    },
  },
};
</script>

<style>
.person-massage {
  position: relative;
  left: 0;
  top: 16px;
  width: 1180px;
  height: 564px;
  background-color: #f8f9fb;
}

.massage-base {
  height: 60px;
  background-color: #fff;
}

.massage-base span {
  display: inline-block;
  margin-left: 40px;
  margin-top: 22px;
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 16px;
}

.massage-base a {
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

.massage-details {
  position: relative;
  left: 40px;
  top: 30px;
}

.massage-details .username {
  position: absolute;
  left: 0;
  top: 0px;
  width: 360px;
}

.massage-details .born-date {
  position: absolute;
  left: 0;
  top: 96px;
  width: 360px;
}

p {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 14px;
}

.massage-details input {
  width: 346px;
  height: 38px;
  margin-top: 12px;
  padding-left: 12px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  line-height: 14px;
}

.sex {
  position: absolute;
  left: 460px;
  top: 0;
  width: 360px;
}

.sex button {
  float: left;
  width: 170px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  color: #333333;
}

.man {
  margin: 10px 10px 30px 0;
  border: 1px solid #e7e7e7;
  color: #333333;
}

.woman {
  margin: 10px 0 30px 10px;
  border: 1px solid #e7e7e7;
  color: #333333;
}

.sex .btnActive {
  border: 1px solid #4a88f7;
  color: #4a88f7;
}

.work {
  position: absolute;
  left: 460px;
  top: 96px;
  width: 360px;
}

#work,
#edu,
#mar {
  width: 360px;
  height: 38px;
  margin-top: 12px;
  padding-left: 12px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #999999;
  line-height: 14px;
}

.edu {
  position: absolute;
  left: 0;
  top: 192px;
  width: 360px;
}

.mar {
  position: absolute;
  left: 460px;
  top: 192px;
  width: 360px;
}

.phone {
  position: absolute;
  left: 0;
  top: 288px;
  width: 360px;
}

.phone a {
  position: absolute;
  display: inline-block;
  left: 320px;
  top: 24px;
  width: 28px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  cursor: pointer;
  color: #4a88f7;
}

.massage-preserve {
  position: absolute;
  left: 0;
  top: 384px;
}

.massage-preserve .btn-1 {
  background: #4a88f7;
  margin-right: 20px;
}

.massage-preserve .btn-2 {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #333333;
}

.massage-preserve button {
  width: 100px;
  height: 40px;
  border-radius: 2px;
  border: 0;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #ffffff;
}
</style>




