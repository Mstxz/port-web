<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import { themeClass } from './utils/theme';
</script>

<template>
    <div :class="themeClass">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<style scoped></style>
