import { createClient } from '@supabase/supabase-js'
import { Database } from "./types"

// Handle if the env keys are not NULL
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

if (supabase_url === ''){
    throw new Error("Supabase URL is null")
}

if (supabase_anon_key === ''){
    throw new Error("Supabase Anon key is null")
}

export const supabase = createClient<Database>(
    supabase_url,
    supabase_anon_key
)

export const fetchProjectInfo = async (setState:React.Dispatch<React.SetStateAction<string>>) => {
    try {
        
        return;
    } catch (error) {
        console.log('error')
    }
}