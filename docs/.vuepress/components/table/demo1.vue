<template>
  <div class="demo1">
    <z-table :column="column" :data="list"></z-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '姓名',
          width: '200px'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'job',
          label: '工作'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
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