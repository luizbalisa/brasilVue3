import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/HomeMain.vue')
const FeedbacksMain = () => import('../views/Feedbacks/FeedbacksMain.vue')
const Credentials = () => import('../views/Credentials/CredentialsMain.vue')

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
            path: '/credentials',
            name: 'Credentials',
            component: Credentials,
            meta: {
                hasAuth: true
            }
        },
        { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
    ]
})

export default router
