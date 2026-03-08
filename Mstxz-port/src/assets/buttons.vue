<script setup>
import { computed } from 'vue';

const props = defineProps({
    shape : {
        Type: String,
        default: 'rect'
    },
    transition: {
        Type: Boolean,
        default: true
    }
});

const variant = computed(() => {
    const base = 'border hover:cursor-pointer'
    const shape = {
        rect : 'px-4 py-2',
        square: 'p-2'
    }

    let transition = null;
    if(props.transition == true){
        transition = 'hover:shadow-[0_0_10px] shadow-ci-white-1 transition-all duration-200'
    }
    return `${base} ${shape[props.shape]} ${transition}`
})
</script>

<template>
    <button :class="variant">
        <slot></slot>
    </button>
</template>