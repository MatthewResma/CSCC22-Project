import { createClient } from '@supabase/supabase-js';

export async function POST({ request }) {
  const { email } = await request.json();

  const supabaseAdmin = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_SERVICE_KEY
  );

  const { data: users } = await supabaseAdmin.auth.admin.listUsers();
  const user = users.users.find(u => u.email === email);

  if (user) {
    await supabaseAdmin.auth.admin.deleteUser(user.id);
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}