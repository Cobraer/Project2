import { createClient } from '@supabase/supabase-js'

const supabaseUrl = https://vomekiovwrxgqcpkeeps.supabase.co
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbWVraW92d3J4Z3FjcGtlZXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NTU0NTEsImV4cCI6MjA3MTAzMTQ1MX0.IumzI0s2NHGZ_nt7jkTanLa9U0hAGBl-gMq8RzcYJmY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
