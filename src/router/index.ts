import {createRouter, createWebHistory} from 'vue-router'


const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: () => import ("../components/antd/HelloWorld.vue")
        },
        {
            path: '/cart1',
            component: () => import ("../components/antd/Cart1.vue")
        },
        {
            path: '/test2',
            component: () => import ("../components/antd/Test2.vue")
        },
        {
            path: '/posts',
            component: () => import ("../components/antd/Posts.vue")
        },
    ]
})

export default router