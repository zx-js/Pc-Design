<template>
    <div class="demo1">
        <z-timeline>
            <z-timeline-item
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
                :content="item.content"
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
                    title: '标题1',
                    content: '内容1',
                    color: 'red',
                },
                {
                    title: '标题2',
                    content: '内容2',
                    color: 'blue',
                },
            ],
        };
    },
};
</script>