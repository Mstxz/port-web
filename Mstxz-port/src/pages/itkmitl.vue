<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue';
import subjectcard from '@/components/subjectcard.vue';
import semesterData from '@/data/semester.json'
</script>

<template>
    <main class="pt-24 mx-5 space-y-4">
      <Contentcontainer>
          <h1>Welcome, IT KMITL</h1>
          <p>This is page for IT KMITL - self recommendation</p>
      </Contentcontainer>

      <Contentcontainer>
        <h1>About Me</h1>
        <ul>
          <li>Program: Information Techonlogy (IT)</li>
          <li>Curriculum: หลักสูตรปรับปรุง 2565</li>
          <li>Track: Multimedia</li>
        </ul>
      </Contentcontainer>

      <Contentcontainer>
        <div v-for="(subjects, semester) in semesterData" :key="semester">

    <h2>{{ semester }}</h2>

      <subjectcard
        v-for="subject in subjects"
        :key="subject.id"
        :subject="subject"
      />

  </div>
      </Contentcontainer>
    </main>
</template>