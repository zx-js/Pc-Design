<template>
  <div class="demo1">
    <z-table :data="list">
      <z-table-column></z-table-column>
    </z-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '小明',
          age: 24,
          job: '工作1',
          address: '地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1地址1'
        },
        {
          name: '小红',
          age: 23,
          job: '工作2',
          address: '地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2地址2'
        }
      ]
    };
  }
};
</script>