<script setup>
import semestersubject from '@/data/semester.json'
</script>

<template>
    <div v-for="(subjects, semester) in semestersubject" :key="semester" class="p-4 space-y-4">
            <h2>{{ semester }}</h2>

        <div v-for="subject in subjects" :key="subject.id" class="course border p-4">
            <div class="flex justify-between">
                <h3>{{ subject.name }}</h3>
                <h3>Projects: {{ subject.project }}</h3>
            </div>
            <p>{{ subject.id }}</p>
            <p>{{ subject.description }}</p>
        </div>

    </div>
</template>