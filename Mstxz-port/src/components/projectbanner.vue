<script setup>
import buttons from '@/assets/buttons.vue'

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
  <div class="bg-ci-purple-3">
    <img draggable="false" :src="thumbnail" class="w-full h-50 object-center object-cover">

    <div class="p-4 space-y-3">
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl font-semibold">{{ projectname }}</h1>
        <h4 class="text-xs">{{ projecttype }}</h4>
    </div>
      <p>{{ projectdesc }}</p>
      <buttons>View</buttons>
    </div>
  </div>
</template>