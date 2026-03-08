<script setup>
import * as brandicon from 'vue3-simple-icons'
import * as rawbrandicon from 'simple-icons'
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        default: 'unrealengine',
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

const data = computed(() =>
  Object.values(rawbrandicon).find(icon => icon.slug === props.id)
);
</script>

<template>
    <div class="flex gap-4 px-4 py-2">
        <component :is="icon" />
        <h1>{{ data.title }}</h1>
    </div>
</template>