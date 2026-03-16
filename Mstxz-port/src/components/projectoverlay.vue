<script setup>
import overlay from '@/assets/overlay.vue';
import Project from '@/pages/project.vue';

const props = defineProps({
    variant : {
        type : String,
        default : 'variant-border-1'
    },
    project : Object
})
</script>

<template>
    <overlay :variant="props.variant">
        <h1 class="font-header text-4xl">{{ project.name }}</h1>
        <p>{{ project.type }}</p>
        <hr>
        <p class="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quasi corrupti, nesciunt facilis voluptates ad, atque modi odio quos deleniti quidem eius. Tempora id, provident harum unde dolore iste non.</p>
    </overlay>
</template>