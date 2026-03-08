<script setup>
import * as brandicon from 'vue3-simple-icons'
import { HugeiconsIcon } from '@hugeicons/vue';
import * as icons from '@hugeicons/core-free-icons/index'

import Contentcontainer from '@/assets/contentcontainer.vue';
import socialmedia from '@/assets/socialmedia.vue'
import inputtext from '@/assets/inputtext.vue';
import Buttons from '@/assets/buttons.vue';

import projectbanner from '@/components/projectbanner.vue';
import toolbadge from '@/components/toolbadge.vue';

import projects from '@/data/projects.json';
import tools from '@/data/tools.json';

</script>

<template>
<main class="[&>section]:h-full [&>section]:p-10">
  <section  class="flex flex-col justify-center items-center space-y-4 h-screen">
    <h1 class="font-header text-6xl">Mstxz</h1>
    <h2>Beyond Imagination, Through Reality.</h2>

    <!-- Hero Section -->
    <nav class="flex justify-center gap-4">
        <socialmedia ref="socialarr" links="https://github.com/Mstxz"><brandicon.GitHubIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://www.instagram.com/mstxz.exe"><brandicon.InstagramIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://www.youtube.com/@mstxz-exe"><brandicon.YouTubeIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://soundcloud.com/mstxz-exe"><brandicon.SoundCloudIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://discord.gg/V9pX6PsHMK"><brandicon.DiscordIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://sketchfab.com/MysticzXD"><brandicon.SketchfabIcon/></socialmedia>
        <socialmedia ref="socialarr" links="https://www.artstation.com/mstxz_exe"><brandicon.ArtStationIcon/></socialmedia>
    </nav>
  </section>

  <!-- Projects Section -->
   <section>
        <h1>Projects</h1>
        <Contentcontainer class="space-y-4">
            <div class="flex gap-4">
                <inputtext></inputtext>
                <Buttons shape="square" transition="false"><HugeiconsIcon :icon="icons.Search02Icon"/></Buttons>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <projectbanner v-for="project in projects" :key="project.id" :projectname="project.name" :thumbnail="project.image"/>
            </div>
        </Contentcontainer>
   </section>

  <!-- About Section -->
  <section class="flex justify-center flex-col">
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

    <b>Skills:</b>
    <ul class="list-disc pl-8 py-2">
      <li>Game Development</li>
      <li>Game Design</li>
      <li>Sound Engineer</li>
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