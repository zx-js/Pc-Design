import Vue from 'vue';
import Router from 'vue-router';

// 路由
import Markdown from '@/md/guide.md';

Vue.use(Router);

const component = {
    template: '<router-view></router-view>',
};

const routerPath = [
    {
        path: '/',
        name: 'md',
        component: Markdown,
        // children: [
        //     {
        //         path: '/',
        //         name: 'md',
        //         meta: {
        //             name: 'md',
        //         },
        //         component: Markdown,
        //     },
        // ],
    },
];

const router = new Router({
    routes: routerPath,
    mode: 'history',
});

export default router;
