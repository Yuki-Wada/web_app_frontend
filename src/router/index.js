import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import { getAuth } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'top_page',
        component: Home,
        meta: { title: 'Yuki Wada のホームページ', desc: 'ディスクリプションを記述' }
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/SignUp.vue')
    },
    {
        path: '/signout',
        name: 'signout',
        component: () => import('@/views/SignOut.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/components/About.vue')
    },
    {
        path: '/maze_viewer',
        name: 'maze_viewer',
        component: () => import('@/views/MazeViewer.vue')
    },
    {
        path: '/reversi_viewer',
        name: 'reversi_viewer',
        component: () => import('@/views/ReversiViewer.vue')
    },
    {
        path: '/rts_simulator',
        name: 'rts_simulator',
        component: () => import('@/views/RTSSimulator.vue')
    },
    {
        path: '/paper_network',
        name: 'paper_network',
        component: () => import('@/views/PaperNetwork.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/knowledge_graph',
        name: 'knowledge_graph',
        component: () => import('@/views/KnowledgeGraphViewer.vue'),
        meta: { requiresAuth: true }
    },
]

let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const auth = getAuth();
    let currentUser = auth.currentUser
    if (requiresAuth) {
        if (!currentUser) {
            next({
                path: '/signin',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
    }
    } else {
        next()
    }
})

export default router
