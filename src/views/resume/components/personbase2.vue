<template>
  <div class="person-massage" :class="{ massageEdit: isShow }">
    <div class="massage-details">
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
            <option v-for="i in workExp" >{{ i }}</option>
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

      <!-- 保存 -->
      <div class="massage-preserve">
        <button class="btn-1" @click="btnClick1">保存</button>
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
      ipt: null,
      isShow: true,
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
      arr: [],
    };
  },
  methods: {
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
      console.log(this.obj.pw);
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

    // 提交时，获取提交缓存
    btnClick1() {

      // 发送input数据缓存
      let OBJ = JSON.stringify(this.obj);

      // 发送input数据
      this.$emit("everything", this.obj);
      
      // 发送切换申请
      this.$emit("nothing", this.isShow);
      this.isShow = !this.isShow;
      this.isHide = !this.isHide;
      // this.$router.push({params:{key:132}})
    },
  },
};
</script>

<style lang="less">
.massageEdit {
  display: none;
}
.person-massage {
  position: relative;
  left: 0;
  top: 16px;
  width: 1180px;
  height: 564px;
  background-color: #f8f9fb;
}

// .massage-base {
//   height: 60px;
//   background-color: #fff;
// }

// .massage-base span {
//   display: inline-block;
//   margin-left: 40px;
//   margin-top: 22px;
//   font-size: 16px;
//   font-family: PingFang-SC-Medium, PingFang-SC;
//   font-weight: bold;
//   color: #333333;
//   line-height: 16px;
// }

// .massage-base a {
//   display: inline-block;
//   margin-left: 8px;
//   width: 28px;
//   height: 20px;
//   background-color: #feefea;
//   vertical-align: bottom;
//   font-size: 10px;
//   font-family: PingFang-SC-Regular, PingFang-SC;
//   font-weight: 400;
//   color: #fe6135;
//   line-height: 20px;
//   text-align: center;
//   border-radius: 2px;
// }

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
