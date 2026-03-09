<script setup>
import { Type } from '@hugeicons/core-free-icons/index';
import { computed } from 'vue';

const props = defineProps({
    shape : {
        Type: String,
        default: 'rect'
    },
    transition: {
        Type: Boolean,
        default: true
    },
    variant : {
        Type: Boolean,
        default: 'border'
    }
});

const variant = computed(() => {
    const base = 'hover:cursor-pointer transition-all duration-200'
    const shape = {
        rect : 'px-4 py-2',
        square: 'p-2'
    }

    const variant = {
        border: 'border ',
        solid: 'bg-ci-indigo-1'
    }

    let transition = null;
    if(props.transition == true){
        if(props.variant === 'border'){
            transition = 'hover:bg-ci-white-1/20 hover:shadow-[0_0_10px] shadow-ci-white-1'
        }
        else if(props.variant === 'solid'){
            transition = ' hover:bg-ci-indigo-2 hover:ring hover:shadow-[0_0_10px] shadow-ci-indigo-2'
        }
    }
    return `${base} ${shape[props.shape]} ${transition} ${variant[props.variant]}`
})
</script>

<template>
    <button :class="variant">
        <slot></slot>
    </button>
</template>