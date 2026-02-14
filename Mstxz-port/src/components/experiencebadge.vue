<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as SimpleIcons from 'simple-icons'
import { renderIcon } from '@/script/utils/renderIcon.js'

const tools = ref([])
const badges = ref([])
const toolpanel = ref(null)

onMounted(async () => {
  const data = await fetch('/data/tools.json').then(r => r.json())
  tools.value = data

  await nextTick() // wait for DOM render

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        badges.value.forEach((badge, index) => {
          badge.animate(
            {
              opacity: [0, 1],
              transform: ['scaleX(0)', 'scaleX(1)']
            },
            {
              fill: 'forwards',
              delay: index * 100,
              duration: 200,
              easing: 'ease-in-out'
            }
          )
        })
      } else {
        badges.value.forEach((badge) => {
          badge.getAnimations().forEach(anim => anim.cancel())
          badge.style.opacity = 0
          badge.style.transform = 'scaleX(0)'
        })
      }
    },
    { threshold: 0.3 }
  )

  observer.observe(toolpanel.value)
})
</script>

<template>
  <div id="tools" ref="toolpanel" class="flex flex-wrap gap-2">
    <div
      v-for="(tool, index) in tools"
      :key="tool.id"
      ref="badges"
      class="flex gap-2 justify-center px-4 py-2 rounded-full origin-left"
      :style="badgeStyle(tool)"
    >
      <div v-html="getIcon(tool)"></div>
      <h1 class="font-bold">
        {{ getTitle(tool) }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getIcon(tool) {
      const icon = SimpleIcons[tool.id]
      if (!icon) return ''
      return renderIcon(icon, 24)
    },
    getTitle(tool) {
      const icon = SimpleIcons[tool.id]
      return icon?.title || tool.id
    },
    badgeStyle(tool) {
      const icon = SimpleIcons[tool.id]
      if (!icon) return {}

      return {
        backgroundColor: `#${icon.hex}`,
        color: tool.bg === 'light' ? 'black' : 'white',
        opacity: 0,
        transform: 'scaleX(0)'
      }
    }
  }
}
</script>

<style scoped></style>