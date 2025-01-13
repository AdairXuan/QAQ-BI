import { Path } from 'echarts/types/src/util/graphic.js'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import("../views/Home.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router;