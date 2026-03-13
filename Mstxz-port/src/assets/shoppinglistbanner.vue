<script setup>
import Contentcontainer from './contentcontainer.vue'

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  links: String
})
</script>

<template>
  <Contentcontainer>
    <h1 class="text-xl font-semibold">{{ name }}</h1>
    <hr>

    <p>Price : {{ price }}</p>

    <a target="_blank" :href="links">Navigate</a>
  </Contentcontainer>
</template>