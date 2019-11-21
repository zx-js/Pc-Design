<!--
 * @abstract: 
 * @version: 
 * @Author: bhabgs
 * @Date: 2019-11-07 10:04:23
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-21 12:19:00
 -->
# 欢迎来到zx-util-ui 工具库
## v 0.0.1
> 我们不是vue的开发者，我们只是vue的搬运工


> 1. docs 书写规范
> 2. 文件名，组件名，类名定义规范
> 3. 组件引入规范
<script>
export default {
    created() {
        console.log(this.$Zutil)
        this.$loading({
            speed: 3000,
            animate: '',
            icon: 'loading',
            text: '加载失败，加载中。。。'
        })
    }
}
</script>

