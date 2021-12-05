import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'top_page',
        component: Home,
        meta: { title: 'Yuki Wada のホームページ', desc: 'ディスクリプションを記述' }
    },
    {
        path: '/app',
        name: 'application',
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/About.vue')
    },
    {
        path: '/maze_viewer',
        name: 'maze_viewer',
        component: () => import('../components/MazeViewer.vue')
    },
    {
        path: '/reversi_viewer',
        name: 'reversi_viewer',
        component: () => import('../components/ReversiViewer.vue')
    },
    {
        path: '/rts_simulator',
        name: 'rts_simulator',
        component: () => import('../views/RTSSimulator.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
