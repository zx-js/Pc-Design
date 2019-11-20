<!--
 * @abstract:
 * @version:
 * @Author: wpp
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-19 12:19:55
 -->
<template>
  <div class="scale-component">
    <div class="scale">
      <ZScale>
        <div class="scale-item"></div>
      </ZScale>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      left: 0,
      top: 0
    }
  },
  methods: {
    dragPosition(data) {
      this.left = data.rl;
      this.top = data.rt;
    }
  }
}
</script>
<style>
.scale {
  width: 500px;
  height: 380px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  box-sizing: border-box;
}
.scale-item{
  width: 100%;
  height: 100%;
  background-color: #68b8f1;
  box-sizing: border-box;
}
.result {
  display: flex;
  color: #999;
}
.result p ~ p {
  margin-left: 100px;
}
</style>