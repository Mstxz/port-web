import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/home.vue';
import Project from '@/pages/project.vue';
import Selfsecret from '@/pages/selfsecret.vue';
import ITkmitl from '@/pages/itkmitl.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/project',
        component: Project,
        meta: { title: 'Project' }
    },
    {
        path: '/selfsecret',
        component: Selfsecret,
        meta: { title: 'Self Secret' }
    },
    {
        path: '/itkmitl',
        component: ITkmitl,
        meta: { title: 'IT KMITL' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    const siteName = "Mstxz"

    if (to.path === "/") {
        document.title = siteName
    } else {
        document.title = `${siteName} - ${to.meta.title}`
    }
})

export default router;