<!--
 * @Description: 
 * @Version: 0.0.1
 * @Author: 王晓龙
 * @Date: 2019-11-13 13:47:19
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-14 12:07:27
 -->
<template>
  <div class="demo2">
    <z-timeline>
      <z-timeline-item
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :dotColor="item.dotColor"
        :lineColor="item.lineColor"
        :lineType="item.lineType"
      />
    </z-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '标题1'
        },
        {
          title: '标题2',
          dotColor: 'blue',
          lineColor: 'orange',
          lineType: 'dashed'
        },
        {
          title: '标题3',
          dotColor: 'red',
          lineColor: 'green',
          lineType: 'dotted'
        },
        {
          title: '标题4',
          dotColor: 'gray'
        }
      ]
    };
  }
};
</script>