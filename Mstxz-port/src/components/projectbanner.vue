<script setup>
import buttons from '@/assets/buttons.vue'
import { HugeiconsIcon } from '@hugeicons/vue';
import * as icons from '@hugeicons/core-free-icons/index'

const emit = defineEmits(['view'])

const props = defineProps({
  thumbnail: {
    type: String,
    default: '#'
  },
  projectname: {
    type: String,
    default: 'Project Name'
  },
  projectdesc : {
    type: String,
    default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel unde distinctio incidunt pariatur dolorum similique corrupti dolore.'
  },
  projecttype : {
    type: String,
    default: 'Project Type'
  }
})
</script>

<template>
  <div class="bg-ci-purple-3 border border-b-4 border-r-2 hover:scale-105 transition-transform duration-200">
    <img draggable="false" :src="thumbnail" class="w-full h-50 object-center object-cover">

    <div class="p-4 space-y-3">
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl font-semibold">{{ projectname }}</h1>
        <h4 class="text-xs">{{ projecttype }}</h4>
      </div>

      <p>{{ projectdesc }}</p>

      <buttons class="flex gap-2" @click="emit('view')">
        View
        <HugeiconsIcon :icon="icons.ArrowRight02Icon"/>
      </buttons>
    </div>
  </div>
</template>