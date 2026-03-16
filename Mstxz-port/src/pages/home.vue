<script setup>
import * as brandicon from 'vue3-simple-icons'
import { HugeiconsIcon } from '@hugeicons/vue';
import * as icons from '@hugeicons/core-free-icons/index'

import Contentcontainer from '@/assets/contentcontainer.vue';
import socialmedia from '@/assets/socialmedia.vue'
import Buttons from '@/assets/buttons.vue';

import projectbanner from '@/components/projectbanner.vue';
import toolbadge from '@/components/toolbadge.vue';
import overlay from '@/components/projectoverlay.vue';

import projects from '@/data/projects.json';
import tools from '@/data/tools.json';
import socialData from '@/data/socialmedia.json';

import { ref, onMounted, nextTick } from "vue"
import { go } from '@/utils/navigation';

const showOverlay = ref(false)
const selectedProject = ref(null)

function openOverlay(project) {
  selectedProject.value = project
  showOverlay.value = true
}

function closeOverlay() {
  showOverlay.value = false
}

const socialarr = ref([])

onMounted(async () => {
  await nextTick()

  socialarr.value.forEach((comp, i) => {
    const el = comp.$el

    el.animate(
      {
        opacity: [0, 1],
        transform: ['scale(0.7) rotateZ(180deg)', 'rotateZ(0)']
      },
      {
        duration: 500,
        delay: i * 120 + 1000,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards'
      }
    )
  })
})
</script>

<template>
<main class="[&>section]:p-10">
  <section class="flex flex-col justify-center items-center space-y-4 h-screen">
    <h1 class="font-header text-6xl header-animate text-center">Mstxz</h1>
    <h2 class="quote-animate text-center" style="opacity: 0;">Beyond Imagination, Through Reality.</h2>

    <!-- Hero Section -->
    <nav class="flex justify-center gap-4 flex-wrap">
      <socialmedia ref="socialarr" v-for="social in socialData" :key="social.name" :links="social.link" style="opacity: 0;">
        <component :is="brandicon[social.icon]" />
      </socialmedia>
    </nav>
  </section>

  <!-- Projects Section -->
   <section class="h-auto">
        <h1>Projects</h1>
        <Contentcontainer class="space-y-4">
            <div class="flex gap-4 justify-between">
                <div class="flex gap-2">
                  <Buttons class="flex gap-2"><HugeiconsIcon :icon="icons.GameController03Icon"/> Games</Buttons>
                  <Buttons class="flex gap-2"><HugeiconsIcon :icon="icons.WebDesign02Icon"/> Web / UI</Buttons>
                  <Buttons class="flex gap-2"><HugeiconsIcon :icon="icons.Vynil03Icon"/>Music</Buttons>
                  <Buttons class="flex gap-2"><HugeiconsIcon :icon="icons.Scroll01Icon"/>Story / Lore</Buttons>
                </div>
                <Buttons @click="go('/project')" variant="solid">View More</Buttons>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <projectbanner v-for="project in projects" :key="project.id" :projectname="project.name" :thumbnail="project.image" :projecttype="project.type" @view="openOverlay(project)"/>
            </div>

            <overlay v-if="showOverlay" :project="selectedProject" @close="showOverlay=false" variant="variant-border-2"/>
        </Contentcontainer>
   </section>

  <!-- About Section -->
  <section class="flex justify-center flex-col h-auto">
    <div class="flex flex-col md:flex-row gap-4">
  <Contentcontainer class="w-full md:w-1/2">
    <h1 class="font-bold text-2xl">About Me</h1>
    <b>Full Name:</b> Mewadee Seeda<br>
    <b>Education:</b>
    <ul class="list-disc pl-8 py-2">
      <li>Undergraduate - B.Sc. (Information Technology), King Mongkut's Institute of Technology Ladkrabang</li>
    </ul>

    <b>Experiences:</b>
    <ul class="list-disc pl-8 py-2">
      <li>2023 - 2025 | Teacher Director, Teacher Assistant @Hamsterhub.co</li>
      <li>2025 - Now | Co-Founder, Staff @GamiDev</li>
    </ul>

    <b>Skills & Interests:</b>
    <ul class="list-disc pl-8 py-2">
      <li>Game Development</li>
      <li>Game Design</li>
      <li>Sound Design</li>
      <li>3D Artist</li>
      <li>UX/UI Design</li>
      <li>Front-end Web Development</li>
    </ul>
  </Contentcontainer>

  <Contentcontainer class="w-full md:w-1/2">
    <h1 class="font-semibold text-2xl">Tech Stack</h1>
    <toolbadge
      v-for="tool in tools"
      :key="tool.id"
      :icon="brandicon[tool.icon]"
      :id="tool.id"
    />
  </Contentcontainer>

</div>
  </section>
</main>
</template>

<style>
@keyframes headerappear {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
  }
}

@keyframes quoteappear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.header-animate {
  animation: headerappear 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-duration: 0.5s;
}

.quote-animate {
  animation: quoteappear 1s ease-in-out forwards;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
}
</style>