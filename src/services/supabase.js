
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const SUPABASE_URL = 'https://hpsnsrbfqnwmefajlmsz.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdHljdWVmcG1oaGt3dnBsZmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0NzgzMDksImV4cCI6MjAxMzA1NDMwOX0.ZxPC2EoZ0VXEPVtpsEaPipOu9Bgx3NXOAC3lICDC9E8';
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
