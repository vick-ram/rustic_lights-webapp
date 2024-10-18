import {createRouter, createWebHistory, Router} from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('../pages/LoginPage.vue')
            },
            {
                path: 'signup',
                name: 'SignUp',
                component: () => import('../pages/SignUpPage.vue')
            },
        ]
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../pages/HomePage.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../pages/AboutPage.vue')
            },
            {
                path: '/services',
                name: 'Services',
                component: () => import('../pages/ServicePage.vue')
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
            },
            {
                path: '/product/:id',
                name: 'Product',
                component: () => import('../pages/ProductPage.vue')
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue')
    }
]

export const router: Router = createRouter({
    history: createWebHistory(),
    routes
});