<script setup>
import { go } from '@/utils/navigation';
import * as brandicon from 'vue3-simple-icons';
</script>

<template>
    <footer class="bg-ci-black-1 p-4 flex justify-evenly items-center [&>section]:w-1/2">
        <section>
            <h1 class="font-semibold font-header text-xl">Mstxz</h1>
            <ul class="[&>li]:flex [&>li]:gap-2 [&>li]:p-2">
                <li><a target="_blank" class="flex gap-2" href=""><brandicon.InstagramIcon/>mstxz.exe</a></li>
                <li><a target="_blank" class="flex gap-2" href="https://discord.gg/V9pX6PsHMK"><brandicon.DiscordIcon/>Mystyrix City</a></li>
                <li><brandicon.GmailIcon/>mewadee.s.mstxz@gmail.com</li>
            </ul>
        </section>
        <section>
            <form action="secretcode">
                <legend class="font-semibold">Enter Secret Code:</legend>
                <input id="code" type="text" placeholder="S3CR3T C0D3..." class="border w-8/10 px-4 py-2"/>
                <button type="button" @click="test()" class="border px-4 py-2">Enter</button>
            </form>
        </section>
    </footer>
</template>

<script>
function test(){
    let code = document.getElementById('code');

    switch(code.value){
        case 'IamIT@KMITL':
            go('/itkmitl');
            break;
        case 'ZX_I_SW#3x3':
            go('/selfsecret');
            break;
        default:
            alert(`Invalid Code "${code.value}", please contact the owner if there is an error`)
    }
}
</script>