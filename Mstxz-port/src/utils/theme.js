import { ref, computed } from 'vue'

export const themeClass = computed(() => {
    const base = 'font-primary bg-fixed bg-center bg-no-repeat min-h-screen'
    return `${base} bg-linear-to-b from-ci-black-1 to-ci-purple-1 text-ci-white-1`
})