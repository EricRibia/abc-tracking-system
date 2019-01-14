import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Dashboard from './components/pages/Dashboard'
import ConfigCompany from './components/pages/setup/Company'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/config/setup',
            name: 'configcompany',
            component: ConfigCompany
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});