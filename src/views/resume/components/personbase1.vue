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
      <form action="">
        <!-- 姓名 -->
        <div class="username">
          <p>
            <img src="" alt="" />
            姓名
          </p>
          <label for="name">
            <input
              type="text"
              name="name"
              placeholder="请输入您的姓名"
              @blur="personName(event)"
            />
          </label>
        </div>

        <!-- 性别 -->
        <div class="sex">
          <p>
            <img src="" alt="" />
            性别
          </p>
          <div
            class="man"
            :class="{ btnActive: isActive }"
            @click="btnMClick(event)"
          >
            男
          </div>
          <div
            class="woman"
            :class="{ btnActive: noActive }"
            @click="btnWClick(event)"
          >
            <span>女</span>
          </div>
        </div>

        <!-- 出生日期 -->
        <div class="born-date">
          <p>
            <img src="" alt="" />
            出生日期
          </p>
          <label for="-date">
            <input
              type="date"
              name="-date"
              @blur="personBorn(event)"
              value="1990-01-01"
            />
          </label>
        </div>

        <!-- 工作经历 -->
        <div class="work">
          <p>
            <img src="" alt="" />
            工作经历
          </p>
          <select id="work" @blur="personWork(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in workExp">{{ i }}</option>
          </select>
        </div>

        <!-- 学历 -->
        <div class="edu">
          <p>
            <img src="" alt="" />
            学历
          </p>
          <select id="edu" @blur="personEdu(event)">
            <option value="" disabled selected hidden>请选择</option>
            <option v-for="i in edu" :value="i">{{ i }}</option>
          </select>
        </div>

        <!-- 婚姻状况 -->
        <div class="mar">
          <p>
            <img src="" alt="" />
            婚姻状况
          </p>
          <select id="mar" @blur="personMar(event)">
            <option value="" disabled selected hidden>请选择</option>
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
            <input
              type="text"
              name="phone"
              placeholder="请输入您的手机号"
              @blur="personPhone(event)"
            />
          </label>
          <a @click="clearClick">修改</a>
        </div>
      </form>

      <!-- <img class="base-img" src="" alt=""> -->
      <div class="base-img">
        <img src="@\views\center\img\默认头像男.png" alt="" />
        <p>上传照片</p>
      </div>

      <!-- 保存 -->
      <div class="message-preserve">
        <button class="btn-1" @click="btnClick1">保存</button>
        <button class="btn-2">取消</button>
      </div>
    </div>
    <person-base-2 :childobj="obj" v-else></person-base-2>
  </div>
</template>

<script>
import PersonBase2 from "./personbase2.vue";

export default {
  name: "Personmessage",
  components: {
    PersonBase2,
  },
  data() {
    return {
      isBlock: true,
      // isShow: true,
      isActive: false,
      noActive: false,
      workExp: [
        "一年以下",
        "一年到三年",
        "三年到五年",
        "五年到十年",
        "十年以上",
      ],
      edu: ["高中以下", "高中", "大专", "本科", "硕士", "硕士及以上"],
      mar: ["未婚", "已婚", "离异"],
      inputValue: "",
      obj: {},
    };
  },
  created() {

    // 判断是否存在本地数据
    if (JSON.parse(localStorage.getItem("personData"))) {

      // 存在，则对this.obj赋值
      this.obj = JSON.parse(localStorage.getItem("personData"))||{};

      // 引入切面切换的缓存数据
      JSON.parse(localStorage.getItem("mountedEle"));

    }

  },

  mounted() {

    //判断本页面隐藏是否显示
    
    if (JSON.stringify(this.obj) !== "{}") {

      return (this.isBlock = !this.isBlock);

    }

  },

  methods: {
    // 提交时，获取提交缓存
    btnClick1() {
      this.isBlock = false;

      localStorage.setItem("personData", JSON.stringify(this.obj));
      this.obj = JSON.parse(localStorage.getItem("personData"));

      // mounted判断缓存
      localStorage.setItem("motunedEle", JSON.stringify(this.mounted));
    },
    clearClick() {
      this.inputValue = "";
    },

    // 获取姓名
    personName($event) {
      this.obj.pn = event.target.value;
    },

    // 获取性别
    btnMClick() {
      this.isActive = true;
      this.noActive = false;
      if (this.isActive) {
        this.obj.ps = document.querySelector(".man").innerText;
      }
    },
    btnWClick() {
      this.isActive = false;
      this.noActive = true;
      if (this.noActive) {
        this.obj.ps = document.querySelector(".woman").innerText;
      }
    },

    // 获取出生日期
    personBorn($event) {
      this.obj.pb = event.target.value;
    },

    // 获取工作经历
    personWork($event) {
      this.obj.pw = event.target.value;
      // console.log(this.obj.pw);
    },

    // 获取教育程度
    personEdu($event) {
      this.obj.pe = event.target.value;
    },
    // 获取婚姻状况
    personMar($event) {
      this.obj.pm = event.target.value;
    },

    // 获取手机号
    personPhone($event) {
      this.obj.pp = event.target.value;
    },

    // 切换子组件
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
  height: 500px;
  margin: 30px 40px 0 40px;

}

.message-details .username {
  position: absolute;
  left: 0;
  top: 0px;
  width: 360px;
}

.message-details .born-date {
  position: absolute;
  left: 0;
  top: 96px;
  width: 360px;
}

.person-message p {
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #666666;
  line-height: 14px;
}

.message-details input {
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

.sex > div {
  float: left;
  width: 169px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  color: #333333;
}

.man {
  margin: 10px 18px 0 0;
  border: 1px solid #e7e7e7;
  color: #333333;
}

.woman {
  margin: 10px 0 0 0;
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
  outline: none;
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

.message-preserve {
  position: absolute;
  left: 0;
  top: 384px;
}

.message-preserve .btn-1 {
  background: #4a88f7;
  margin-right: 20px;
}

.message-preserve .btn-2 {
  color: #333333;
}

.message-preserve button {
  width: 100px;
  height: 40px;
  border-radius: 2px;
  border: 0;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #ffffff;
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
  top: 90px;
  right: 0px;
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
