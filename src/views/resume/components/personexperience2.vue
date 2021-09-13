<template>
  <div>
    <div class="exp-main" >
      <p class="firstP">
        <span class="company">{{ exValue.name }}</span>
      </p>
      <p class="secondP">
        <span class="position">{{ exValue.position }}</span>
      </p>
      <p class="thirdP">
        <span class="times">{{ exValue.times }}</span>
      </p>
      <p class="fourthP">
        <span class="p-span1">删除</span>
        <span class="p-span2">编辑</span>
      </p>
      <div class="experience-details" style="white-space: pre-line">
        {{ exValue.desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience2",
  data() {
    return {
      exValue: {},
    };
  },
  props: {
    exValue: Object,
  },
};
</script>

<style>
.exp-main p {
  display: inline-block;
}
.exp-main .firstP {
  padding-right: 12px;
  border-right: 1px solid #e7e8ef;
}

.exp-main .secondP {
  padding: 0 12px;
  border-right: 1px solid #e7e8ef;
}

.exp-main .thirdP {
  padding-left: 12px;
}

.fourthP {
  float: right;
  font-size: 14px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #4a88f7;
}

.p-span1 {
  padding-right: 12px;
  border-right: 1px solid #e7e8ef;
  cursor: pointer;
}

.p-span2 {
  padding-left: 12px;
  cursor: pointer;
}
</style>
