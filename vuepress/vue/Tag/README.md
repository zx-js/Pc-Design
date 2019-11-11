<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 17:20:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-08 09:44:44
 -->
# tag
> 采用vue组件编写方案 可使用.vue,与tsx延续方案

### Who（lx）

1. tag颜色定制
2. tag 大小 size、large、small、mini  默认：large
3. 可删除tag
4. 删除是否需要确认
5. ...自行发挥
6. 是否边框
7. 按钮位置：右上 右侧


<template>
  <Ztag :isBorder="true"
    :isClose="true"
    size="large"
    color="pink"
    v-for="(i, key) in 10"
    :key="key"
    @click="onClose" />
</template>
<script>
  export default {
    public onClose() {
        console.log(1);
      }
  }
</script>


