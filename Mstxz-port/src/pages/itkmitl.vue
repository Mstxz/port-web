<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue';
import subjectcard from '@/components/subjectcard.vue';
import semesterData from '@/data/semester.json'
</script>

<template>
    <main class="pt-24 mx-5 space-y-4">
      <Contentcontainer variant="variant-border-2">
          <h1 class="text-4xl font-semibold font-header">Welcome, IT KMITL</h1>
          <p>This is page for IT KMITL - self recommendation</p>
      </Contentcontainer>

      <section class="grid grid-cols-2 gap-4">
        <Contentcontainer variant="variant-border-2">
        <h1 class="text-2xl font-header">About Me</h1>
        <ul>
          <li>Program: Information Techonlogy (IT)</li>
          <li>Curriculum: หลักสูตรปรับปรุง 2565</li>
          <li>Track: Multimedia</li>
        </ul>
      </Contentcontainer>

      <Contentcontainer variant="variant-border-2">
        <h1 class="text-2xl font-header">Important Tools</h1>
        <ul class="list-disc ml-4">
          <li>VSCode - <a target="_blank" href="https://code.visualstudio.com/" class="text-blue-400">Link</a></li>
          <li>OpenVPN - <a target="_blank" href="https://openvpn.net/" class="text-blue-400">Link</a></li>
          <li>Github - <a target="_blank" href="https://github.com/" class="text-blue-400">Link</a></li>
        </ul>
      </Contentcontainer>
      </section>

      <Contentcontainer variant="variant-border-2">
        <h1 class="text-2xl font-header">Mutimedia Track Review</h1>
        <h2 class="text-xl font-bold">About This Track</h2>
        <a target="_blank" href="https://multimedia.it.kmitl.ac.th/#/" class="text-blue-400">Website</a>
        <p>แขนง Multimedia เป็นแขนงที่สำหรับคนที่สนใจในสามเรื่อง ได้แก่ UX/UI Design และ Game Development ซึ่งก็เป็นแขนงที่บอกได้เลยว่า ถ้าไม่มีแพชชั่นในสายงานนี้จริง + ถ้าเป็นคนที่ชอบแต่คำสวยหรูไม่ยอมรับความจริง ยังไงก็เรียนแขนงนี้ไม่รอด เพราะว่า</p>
      </Contentcontainer>

      <Contentcontainer variant="variant-border-2">
        <div v-for="(subjects, semester) in semesterData" :key="semester" class="space-y-4">

          <h2>{{ semester }}</h2>

            <subjectcard v-for="subject in subjects" :key="subject.id" :subject="subject"/>

        </div>
      </Contentcontainer>

      <h1 class="flex justify-center p-4">More Coming Soon...</h1>
    </main>
</template>