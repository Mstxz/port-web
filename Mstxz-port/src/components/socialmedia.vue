<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as SimpleIcons from 'simple-icons'
import { renderIcon } from '@/script/utils/renderIcon.js'

const socials = ref([])

onMounted(async () => {
  const res = await fetch('/data/socialmedia.json')
  socials.value = await res.json()

  await nextTick()

  const links = document.querySelectorAll('#social a')
  const linkAnimations = []

  links.forEach((links, index) => {
    const anim = links.animate(
      {
        opacity: [0, 1],
        transform: ['rotateZ(90deg)', 'rotateZ(0deg)']
      },
      {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: index * 100
      }
    )
    linkAnimations.push(anim.finished)
  })

  Promise.all(linkAnimations).then(() => {
    document.querySelectorAll('#social #icon').forEach((icon, i) => {
      icon.animate(
        { opacity: [0, 1] },
        {
          duration: 250,
          easing: 'ease-out',
          fill: 'forwards',
          delay: i * 80
        }
      )
    })
  })
})
</script>

<template>
  <div id="social" class="flex gap-4">
    <a
      v-for="(media, index) in socials"
      :key="media.id"
      :href="media.url"
      target="_blank"
      class="w-16 h-16 border-l-3 border-t-2 border-b-2
             bg-radial-[at_75%_50%] from-transparent from-40% to-white/50
             rounded-full flex flex-col justify-center items-center
             hover:scale-120 transition-transform duration-200"
      style="opacity: 0"
    >
      <span
        id="icon"
        v-html="renderIcon(SimpleIcons[media.id], 24)"
        class="opacity-0"
      />

      <span
        id="name"
        class="hidden text-xs mt-1"
      >
        {{ SimpleIcons[media.id].title }}
      </span>
    </a>
  </div>
</template>
