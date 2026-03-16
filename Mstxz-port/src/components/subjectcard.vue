<script setup>
    import contentcontainer from '@/assets/contentcontainer.vue';
    import Buttons from '@/assets/buttons.vue';
import Contentcontainer from '@/assets/contentcontainer.vue';
    defineProps({
        subject: Object
    })
</script>

<template>
  <Contentcontainer class="course p-4" variant="variant-border-1">

    <div class="flex justify-between">
        <h3 class="text-xl font-semibold">{{ subject.name }}</h3>

        <h3 :class="subject.project ? 'text-green-500' : 'text-red-500'">
            Projects: {{ subject.project ? 'Yes' : 'No' }}
        </h3>
    </div>

    <p class="text-sm">{{ subject.id }} {{ subject.credit }}</p>

    <hr>

    <div>
        <h1>Professor</h1>
        <ul class="ml-4">
            <li v-for="prof in subject.professor" class="list-disc">{{ prof }}</li>
        </ul>
    </div>

    <div class="p-4" v-html="subject.description"></div>

    <div v-if="subject.source?.length">
        <h1 class="font-bold">Source</h1>
        <div class="flex gap-4 flex-wrap">
            <a v-for="rec in subject.source" :key="rec.link" :href="rec.link" target="_blank">
                <Buttons>
                    {{ rec.label }}
                </Buttons>
            </a>
        </div>

    </div>

  </Contentcontainer>
</template>