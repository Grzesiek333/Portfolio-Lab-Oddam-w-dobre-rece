
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const SUPABASE_URL = 'https://hpsnsrbfqnwmefajlmsz.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwc25zcmJmcW53bWVmYWpsbXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NTk3OTMsImV4cCI6MjAxNjQzNTc5M30.xlK_e_pBErd4l9EVxUTTrDMrqVHLI6p3VnGd5vSNJZ4';
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
