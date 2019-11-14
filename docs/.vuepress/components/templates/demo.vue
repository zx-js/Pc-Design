<!--
 * @Description: 
 * @Version: 0.0.1
 * @Author: 王晓龙
 * @Date: 2019-11-13 13:47:19
 * @LastEditors: 王晓龙
 * @LastEditTime: 2019-11-14 09:24:49
 -->
<template>
    <div class="demo-template">
        <div class="view-example">
            <component :is="name"></component>
        </div>
        <div class="code-example">
            <div class="code-content" v-show="isShow">
                <slot></slot>
            </div>
            <div
                class="code-btn"
                @click="showCode()"
            >{{ isShow ? '隐藏' : '显示' }}代码 {{ `<${ isShow ? '/' : ' ' }>` }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demoTemplate',
    props: {
        name: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        showCode() {
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style lang="stylus">
.demo-template {
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 20px;

    .view-example {
        padding: 20px 40px;
        border-bottom: 1px solid #eee;
    }

    .code-btn {
        text-align: center;
        cursor: pointer;
        padding: 5px;

        &:hover {
            background-color: #f9fafc;
            transition: all 0.3s;

            button {
                color: #000;
                transition: all 0.3s;
            }
        }
    }
}

.demo-template .code-example .code-content div[class*='language-'] pre, .demo-template .code-example .code-content div[class*='language-'] pre[class*='language-'] {
    margin: 0;
}
</style>