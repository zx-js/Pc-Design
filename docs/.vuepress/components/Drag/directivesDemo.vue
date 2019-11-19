<!--
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-18 14:54:46
 -->
<template>
  <div class="drag-component">
    <div class="drag">
      <div class="drag-item" v-ZDrag></div>
    </div>
  </div>
</template>
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
</style>