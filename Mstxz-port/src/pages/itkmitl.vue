<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue';
import Semester_subject from '@/components/semester_subject.vue';

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
        <Semester_subject/>
      </Contentcontainer>
    </main>
</template>