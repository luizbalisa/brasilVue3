import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/HomeMain.vue')
const FeedbacksMain = () => import('../views/Feedbacks/FeedbacksMain.vue')
const Credencials = () => import('../views/Credencials/CredencialsMain.vue')

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/feedbacks',
            name: 'FeedbacksMain',
            component: FeedbacksMain,
            meta: {
                hasAuth: true
            }
        },
        {
            path: '/credencials',
            name: 'Credencials',
            component: Credencials,
            meta: {
                hasAuth: true
            }
        },
        { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
    ]
})

export default router
