<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-14 17:00:00
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
          placeholder="请输入内容" />
    <br />
    <z-input type="password"
          placeholder="请输入密码" />
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
<style lang="stylus">
#input-demo {
  width 180px;
  display flex;
  flex-direction column;
}
</style>