<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import * as icons from '@hugeicons/core-free-icons/index'

const emit = defineEmits(['close'])

const props = defineProps({
  variant: {
    type: String,
    default: 'variant-border-1'
  }
})
</script>

<template>
  <div class="fixed inset-0 z-50 bg-ci-black-1/80 flex items-center justify-center">

    <Contentcontainer class="relative m-10" :variant="props.variant">

      <button
        class="absolute top-3 right-3 flex items-center justify-center"
        @click="emit('close')"
      >
        <HugeiconsIcon :icon="icons.Cancel01Icon"/>
      </button>

      <slot></slot>

    </Contentcontainer>

  </div>
</template>