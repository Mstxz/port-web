import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vukzpyoqxayuvyrjpapn.supabase.co'
const supabaseKey = 'sb_publishable_CVHWi4kLcWdhjkpWZ-s_pA_n5DWXv8_'

export const supabase = createClient(supabaseUrl, supabaseKey)