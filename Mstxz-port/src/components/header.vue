<script setup>
    import { go } from '@/utils/navigation';
</script>

<template>
    <header class="flex justify-between items-center px-6 py-2 text-lg fixed w-screen">
        <img src="/icon.svg" alt="icon" class="w-16 h-16 object-center" draggable="false" @click="go('/')">
        <nav class="space-x-6 [&>button]:hover:cursor-pointer flex items-center">
            <button @click="go('/about')">About</button>
            <button @click="go('/project')">Project</button>
            <button @click="go('/experience')">Experience</button>
            <button @click="go('/cert')">Certification</button>
        </nav>
    </header>
</template>