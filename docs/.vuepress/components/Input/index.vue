<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-14 14:01:00
 -->
<template>
  <div>
        <z-input type="text"
          label="label文本">sss</z-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modelText: 'model文本'
    };
  },
  methods: {
    handleBlur(e) {
      console.log('blur---', e);
    }
  }
};
</script>
<style>
</style>