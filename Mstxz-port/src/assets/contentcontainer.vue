<script setup>
import { computed } from 'vue';
const props = defineProps({
    variant: {
        type: String,
        default: 'variant-border-1'
    }
});

const classes = computed(() => {
    const variants = {
        'variant-border-1' : 'border border-r-2 border-b-4 bg-ci-black-1/20 p-4',
        'variant-border-2' : 'border border-r-2 border-b-4 bg-ci-white-1/20 p-4'
    }

    return variants[props.variant]
});
</script>

<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>