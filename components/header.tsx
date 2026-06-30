"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FriendlyNoteLogo from "@/components/gen_components/logo";
import { useState } from "react";

export default function HeaderBar() {
  const [session, setSession] = useState(true);

  return (
    <header className="w-full bg-yellow-200 shadow-md px-16 py-4 my-4 flex mb-4 rounded-full mx-auto relative justify-between items-center">
      <FriendlyNoteLogo />
      <div className="w-1/2 flex justify-center gap-2">
        <Link href="/">
          <Button variant="link" className="text-slate-800 text-base">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="link" className="text-slate-800 text-base">
            About Us
          </Button>
        </Link>
        <Link href="/support">
          <Button variant="link" className="text-slate-800 text-base">
            Support
          </Button>
        </Link>
      </div>
      <div className="w-1/4 flex justify-end gap-2">
        {session ? (
          <Link href="#">
            <Button className="rounded-full bg-red-500">Logout</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button className="rounded-full">Login</Button>
          </Link>
        )}
        {session ? (
          ""
        ) : (
          <Link href="/signup">
            <Button className="rounded-full">Create an Account</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
