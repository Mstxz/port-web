import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/home.vue';
import Project from '@/pages/project.vue';
import Selfsecret from '@/pages/selfsecret.vue';
import ITkmitl from '@/pages/itkmitl.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/project',
        component: Project
    },
    {
        path: '/selfsecret',
        component: Selfsecret
    },
    {
        path: '/itkmitl',
        component: ITkmitl
    }
]

const router = createRouter({
    history: createWebHistory(), routes
});

export default router