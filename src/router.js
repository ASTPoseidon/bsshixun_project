// 导入 Vue 和 Vue Router
import Vue from 'vue';
import Router from 'vue-router';

// 导入你的组件


// 告诉 Vue 使用 Vue Router
Vue.use(Router);

// 定义你的路由
const routes = [
    {
        path: '/', // 路由路径
        name: 'HomeView', // 路由名称
        component: () => import('./pages/HomeView.vue')
    },
    {
        path: '/Details',
        name: 'DetailsView',
        component: () => import('./pages/DetailsView.vue')
    }
];

// 创建 router 实例
const router = new Router({
    mode: 'history', // 使用 HTML5 history 模式
    base: process.env.BASE_URL, // 基础 URL
    routes // 添加路由配置
});

export default router;
