<script setup>
import exBadge from '@/components/experiencebadge.vue'
import socialBadge from '@/components/socialmedia.vue'
</script>

<template>
    <main class="[&>section]:h-screen">
        <section id="hero" class="flex flex-col gap-5 justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <div class="absolute w-75 h-10 border-r-8 border-l-8 border-b-4 rounded-[50%] -rotate-10 bg-radial-[at_50%_0%] from-transparent from-60% to-white translate-y-2"></div>
                <h1 class="text-5xl font-header text-white">Mstxz</h1>
            </div>
            <p>Beyond Imagination, Through Reality</p>
            <nav id="social" class="flex gap-5">
                <socialBadge/>
            </nav>
        </section>

        <section id="about">
            <h1>About</h1>
            <div>
                <ul>
                    <li>Full Name: Mewadee Seeda</li>
                    <li>Education</li>
                </ul>
            </div>
        </section>

        <section id="experience" class="flex m-20 [&>div]:w-1/2 justify-evenly items-center">
            <div>
                <h1 class="text-4xl font-header">Skills</h1>
                <ul>
                    <li>Game Development</li>
                    <li>3D Modelling</li>
                    <li>Music Production</li>
                    <li>UX/UI Design</li>
                    <li>Frontend Web Development</li>
                </ul>
            </div>
            <div>
                <h1 class="text-4xl font-header">Tools</h1>
                <exBadge class="flex gap-4 flex-wrap bg-white/30 p-5 rounded-xl"/>
            </div>
        </section>

        <section id="project" class="flex flex-col items-center justify-center">
            <h1 class="text-3xl font-header">Projects</h1>
            <p>Take a look for all works here</p>
            <div class="flex justify-evenly w-1/2">
                <div>
                    <ul>
                        <li><button id="gameBtn">Game Development</button></li>
                        <li><button id="musicBtn">Music Production</button></li>
                    </ul>
                </div>
                <div id="spotlight" class="p-20 flex flex-wrap justify-center gap-6">

                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
