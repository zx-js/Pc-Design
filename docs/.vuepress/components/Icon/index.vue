<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-12 11:07:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-11 19:01:41
 -->
<template>
  <div class="bhabgs-block">
    Icon:
    <div class="icon-box" v-for="i in icons">
      <ZIcon :type="i" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        "you",
        "xiangzuo",
        "xiazai",
        "yun",
        "fanhui",
        "success",
        "warning",
        "error",
        "info",
        "sousuo",
        "close"
      ]
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.z-button {
  margin-right: 1rem;
}

.bhabgs-block {
  margin-bottom: 1rem;
}

.icon-box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 9px 8px;
  height: 137px;
  position: relative;
}
</style>
