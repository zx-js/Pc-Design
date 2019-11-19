<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-15 11:17:00
 -->
<template>
  <div class="drag-component">
    <div class="drag">
      <Zdrag @getMovePosition="dragPosition">
        <div class="drag-item"></div>
      </Zdrag>
    </div>
    <div class="result">
      <p>left: <span>{{left}}px</span></p>
      <p>top: <span>{{top}}px</span></p>
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
.drag {
  width: 500px;
  height: 380px;
  border: 1px solid #333;
}
.drag-item{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #2c9ae8;
}
.result {
  display: flex;
}
.result p ~ p {
  margin-left: 100px;
}
</style>