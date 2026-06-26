import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold">Login</h1>
        <input type="text" placeholder="John Doe" />
        <input type="password" placeholder="Example123_" />
        <Link href="/notepad">
          <Button>Login</Button>
        </Link>
      </main>
    </>
  );
}
