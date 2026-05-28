import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nrvoscraeeeeheeoxrgp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydm9zY3JhZWVlZWhlZW94cmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MjYyNTksImV4cCI6MjA5MzMwMjI1OX0.ngNxR0TQPqouL-cOHfamqGzMIVvtCqNjTe9GYDLXAzA';

export const supabase = createClient(supabaseUrl, supabaseKey);