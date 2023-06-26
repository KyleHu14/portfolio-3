/*
    File Description :
    This file handles the creation of the supabase client. Upon creation of the supabase client,
    this file exports necessary supabase functions that either fetch / create data in the supabase database.
*/

import { createClient } from '@supabase/supabase-js'
import { Database } from "./types"

// Initialize the keys from the env file
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// Throw errors if we are missing an env variable
if (supabase_url === ''){
    throw new Error("ENV ERROR : Supabase URL is null, check if the .env file is initialized correctly.")
}
if (supabase_anon_key === ''){
    throw new Error("ENV ERROR : Supabase Anon key is null, check if the .env file is initialized correctly.")
}

// Create the supabase client, this will be used in creating our lib functions below
const supabase = createClient<Database>(
    supabase_url,
    supabase_anon_key
)

// Function that fetches project description information from a table in supabase
export const fetchProjectInfo = async () => {
    let { data, error } = await supabase.from('project-content').select('*')

    // [DEBUG] Simulate an error
    // let test = true;

    if(error){
        return []
    }

    return data
}