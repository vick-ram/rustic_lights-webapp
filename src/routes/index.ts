import {createRouter, createWebHistory, Router} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../pages/CartPage.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../pages/CheckoutPage.vue')
    },
    {
        path: '/order-summary',
        name: 'OrderSummary',
        component: () => import('../pages/OrderSummary.vue')
    }
]

export const router: Router = createRouter({
    history: createWebHistory(),
    routes
});