<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue';
import Shoppinglistbanner from '@/assets/shoppinglistbanner.vue';

import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const items = ref([])

const loadData = async () => {
  const { data, error } = await supabase
    .from('ShoppingListItem')
    .select('*')

  if (error) {
    console.error(error)
    return
  }

  items.value = data
}

onMounted(loadData)
</script>

<template>
    <main class="pt-24 mx-5 space-y-5">
        <Contentcontainer>
            <h1 class="text-4xl font-semibold font-header">Welcome Back, Mstxz</h1>
            <p>This is secret, do not let others see this</p>
        </Contentcontainer>

        <section>
            <Contentcontainer>
                <h1 class="text-2xl">Shopping List</h1>
                <hr>
                <Shoppinglistbanner v-for="item in items" :key="item.id" :id="item.id" :name="item.ItemName" :price="item.Price" :links="item.links"/>
            </Contentcontainer>
        </section>
    </main>
</template>