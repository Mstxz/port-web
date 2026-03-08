<script setup>

const props = defineProps({
  links: {
    Type: String,
    default: '#'
  }
});
</script>

<template>
  <a id="socialmedia" draggable="false" target="_blank" :href="links" class="border-2 border-r-0 p-4 rounded-full bg-radial-[at_75%_50%] from-ci-white-1/0 via-ci-white-1/10 to-ci-white-1/30 hover:shadow-[0_0_10px] shadow-ci-white-1 transition-all duration-200">
    <slot></slot>
  </a>
</template>