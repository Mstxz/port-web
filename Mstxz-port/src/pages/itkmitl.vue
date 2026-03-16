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
          <li>Cooperative Education: No</li>
        </ul>
      </Contentcontainer>

      <Contentcontainer variant="variant-border-2">
        <h1 class="text-2xl font-header">Important Tools</h1>
        <h2 class="font-semibold text-xl">For Everyone</h2>
        <ul class="list-disc ml-4">
          <li>VSCode - <a target="_blank" href="https://code.visualstudio.com/" class="text-blue-400">Link</a></li>
          <li>OpenVPN - <a target="_blank" href="https://openvpn.net/" class="text-blue-400">Link</a></li>
          <li>Github - <a target="_blank" href="https://github.com/" class="text-blue-400">Link</a></li>
        </ul>
        <h2 class="text-xl font-semibold">For Multimedia Track</h2>
        <ul class="list-disc ml-4">
          <li>Adobe Color Wheel - <a target="_blank" href="https://color.adobe.com/create/color-wheel" class="text-blue-400">Link</a></li>
          <li>AmbientCG - <a target="_blank" href="https://ambientcg.com/" class="text-blue-400">Link</a></li>
        </ul>
      </Contentcontainer>
      </section>

      <Contentcontainer variant="variant-border-2">
        <h1 class="text-2xl font-header">Mutimedia Track Review</h1>
        <a target="_blank" href="https://multimedia.it.kmitl.ac.th/#/" class="text-blue-400">Website</a>
        <h2 class="text-xl font-bold">Why I Choose This Track???</h2>
        <p>ส่วนตัวเป็นคนที่ชอบการทำงานที่เกี่ยวกับความคิดสร้างสรรค์ การทำระบบที่ไม่ใช่วิธีที่ตายตัวและซับซ้อนมาก และชอบทำอะไรที่เป็น Narrative อยู่แล้ว และก็เข้าวงการนี้มาตั้งแต่ ม.4 จากการทำ Blender 3D และเคยเข้าวงการทำเกมมาก่อนระดับนึง และรู้สึกว่านี่แหละใช่ทางของเราแน่นอน จึงมั่นใจว่าเราจะเข้าแขนงนี้ และเดินทางสายนี้ต่อไป</p>
        <h2 class="text-xl font-bold">Is it Worth it???</h2>
        <p>ส่วนตัวถือว่าคุ้มค่าสุดๆ ที่ได้เข้ามาเรียนแขนงนี้ เพราะว่าอาจารย์ที่สอนนั้นเขามีประสบการณ์จริง เข้าใจโลกจริง ตามเทรนด์โลกทันกันตลอด และยังเป็น Commentator ที่ดีด้วย ซึ่งการ Comment แต่บะทีถึงแม้ว่าจะเจ็บจี๊ดหรือหนักหนาสาหัสขนาดไหน แต่มันก็คือ Comment ที่รู้สึกว่ามันคือความจริง และไม่ใช่สักแต่จะติติง</p>

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