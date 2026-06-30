import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardOne from "@/components/card_one";

export default function Login() {
  return (
    <main className="p-9  flex justify-center">
      <CardOne>
        <div className="w-140 h-100 flex flex-col items-center justify-evenly">
          <h1 className="text-3xl font-bold title">Login</h1>
          <input type="text" placeholder="John Doe" />
          <input type="password" placeholder="Example123_" />
          <Link href="/notepad">
            <Button>Login</Button>
          </Link>
        </div>
      </CardOne>
    </main>
  );
}
