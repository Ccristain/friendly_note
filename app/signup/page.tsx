import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderBar from "@/components/header";
import Head from "next/head";

export default function Signup() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold">Sign-Up</h1>
        <input type="text" placeholder="John Doe" />
        <input type="email" placeholder="johndoe143@gmail.com" />
        <input type="password" placeholder="Example123_" />
        <Link href="/notepad">
          <Button>Sign Up</Button>
        </Link>
      </main>
    </>
  );
}
