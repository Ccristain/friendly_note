import { supabase } from "@/lib/supabase";

export default async function Support() {
  const { data: users, error } = await supabase.from("users").select("*");

  console.log("USERS:", users);
  console.log("ERROR:", error);

  return (
    <main className="p-9">
      <h1 className="text-3xl font-bold">Support Page</h1>

      {users?.map((user) => (
        <div key={user.user_id}>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </main>
  );
}
