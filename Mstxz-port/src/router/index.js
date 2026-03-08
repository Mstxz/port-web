import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/home.vue';
import Project from '@/pages/project.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/project',
        component: Project
    }
]

const router = createRouter({
    history: createWebHistory(), routes
});

export default router