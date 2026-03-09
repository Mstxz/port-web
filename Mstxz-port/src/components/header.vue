<script setup>
    import { go } from '@/utils/navigation';
    import { HugeiconsIcon } from '@hugeicons/vue';
    import * as icons from '@hugeicons/core-free-icons/index'
</script>

<template>
    <header class="flex justify-between items-center px-6 py-2 text-lg fixed w-screen bg-linear-to-b from-ci-black-1">
        <img src="/icon.svg" alt="icon" class="w-16 h-16 object-center" draggable="false" @click="go('/')">
        <nav class="space-x-6 [&>button]:hover:cursor-pointer hidden items-center sm:hidden md:flex lg:flex">
            <button @click="go('/about')">About</button>
            <button @click="go('/project')">Project</button>
            <button @click="go('/experience')">Experience</button>
            <button @click="go('/cert')">Certification</button>
        </nav>
        <button class="block sm:block md:hidden lg:hidden"><HugeiconsIcon :icon="icons.Menu01Icon" :size="36"/></button>
    </header>
</template>