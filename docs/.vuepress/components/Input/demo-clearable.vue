<!--
 * @abstract: 
 * @version: 
 * @Author: langxue
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-27 15:05:31
 -->
<template>
  <div id="input-demo">
    <z-input type="text"
        v-model="value"
        clearable
        ref="input"
        @clear="clear"
        placeholder="请输入内容" />
        {{value}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    clear(e) {
      this.value = null
      console.log('clear');
    },
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