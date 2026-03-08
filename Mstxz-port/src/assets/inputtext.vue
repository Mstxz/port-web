<script setup>
    import { HugeiconsIcon } from '@hugeicons/vue';
    import * as icons from '@hugeicons/core-free-icons'
</script>

<template>
    <div class="flex gap-2 px-4 py-2 border">
        <HugeiconsIcon :icon="icons.Search02Icon"></HugeiconsIcon>
        <input type="text" placeholder="Search" class="border-none outline-none ring-0 focus:ring-0 focus:outline-none"/>
    </div>
</template>