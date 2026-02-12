import { createApp } from 'vue'
import App from './App.vue'
import header  from './components/header.vue'

document.body.className = "font-primary bg-linear-to-b from-ci-purple-1 to-ci-blue-1 text-ci-white-1 bg-cover bg-center bg-fixed bg-no-repeat w-full h-screen overflow-x-hidden";

createApp(header).mount('header')
createApp(App).mount('#app')
