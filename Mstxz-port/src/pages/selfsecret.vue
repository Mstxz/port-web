<script setup>
import Contentcontainer from '@/assets/contentcontainer.vue';
import Shoppinglistbanner from '@/assets/shoppinglistbanner.vue';
import Buttons from '@/assets/buttons.vue';

import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabase'

const items = ref([])

const newName = ref('')
const newPrice = ref('')
const newLink = ref('')

const loadData = async () => {
  const { data } = await supabase
    .from('ShoppingListItem')
    .select('*')

  items.value = data
}

const addItem = async () => {
  await supabase
    .from('ShoppingListItem')
    .insert([
      {
        ItemName: newName.value,
        Price: newPrice.value,
        links: newLink.value
      }
    ])

  loadData()

  newName.value = ''
  newPrice.value = ''
  newLink.value = ''
}

const removeItem = async (id) => {
  await supabase
    .from('ShoppingListItem')
    .delete()
    .eq('id', id)

  loadData()
}

onMounted(loadData)

const totalPrice = computed(() => {
  return items.value.reduce((sum, item) => {
    return sum + Number(item.Price)
  }, 0)
})
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
                <div class="space-y-4 p-4">
                    <Shoppinglistbanner v-for="item in items" :key="item.id" :id="item.id" :name="item.ItemName" :price="item.Price" :links="item.links"/>
                    <h1 class="font-bold">Total Price: {{ totalPrice.toFixed(2) }}</h1>
                </div>


                <hr>
                <h1>Add Item to shopping list here</h1>
                <input v-model="newName" placeholder="Name">
                <input v-model="newPrice" placeholder="Price">
                <input v-model="newLink" placeholder="Link">

                <Buttons @click="addItem" class="hover:cursor-pointer">Add</Buttons>
            </Contentcontainer>
        </section>
    </main>
</template>