import { supabase } from '@/lib/supabase'

export async function getItems() {
  return await supabase
    .from('ShoppingListItem')
    .select('*')
    .order('timeStamp', { ascending: false })
}

export async function addItem(item) {
  return await supabase
    .from('ShoppingListItem')
    .insert([item])
}

export async function removeItem(id) {
  return await supabase
    .from('ShoppingListItem')
    .delete()
    .eq('id', id)
}

export async function toggleItem(id, checked) {
  return await supabase
    .from('ShoppingListItem')
    .update({ checked })
    .eq('id', id)
}