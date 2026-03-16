<script setup>
    import { go } from '@/utils/navigation';
</script>

<template>
    <nav class="fixed border-b-2 w-full mt-24 flex flex-col [&>button]:px-4 [&>button]:py-2 bg-ci-black-1/50 z-50 appearanim opacity-0">
        <button @click="go('/about')">About</button>
        <button @click="go('/project')">Project</button>
        <button @click="go('/experience')">Experience</button>
        <button @click="go('/cert')">Certification</button>
    </nav>
</template>

<style>
@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
    }
}

.appearanim {
    animation: appear 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>