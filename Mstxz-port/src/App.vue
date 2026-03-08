<script setup>
import Header from './components/header.vue';
import { themeClass } from './utils/theme';
</script>

<template>
    <div :class="themeClass">
        <Header/>

        <router-view/>
    </div>
</template>

<style scoped></style>
