"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col align-middle justify-center w-full">
      <section className="flex flex-col justify-center w-full h-screen gap-9 p-9 border-2 px-16">
        <div className="flex flex-col gap-y-2 w-3/4 border-2">
          <h1 className="title text-4xl">
            Take Note with your friends so you wont forget
          </h1>
          <p className="text-4xl">
            Keep your thoughts organized, share notes instantly, and never miss
            a moment with your friends.
          </p>
        </div>
        <div className="flex gap-x-8 w-3/4">
          <Link
            href="../notepad"
            className="border-4 w-60 h-55 rounded-xl flex flex-col justify-center items-center bg-yellow-200 bg-[url('/assets/solonote.jpg')] bg-center bg-cover bg-no-repeat"
          >
            <p className="title text-lg ">Start Taking Notes</p>
          </Link>
          <Link
            href="../notepad"
            className="border-4 w-60 h-55 rounded-xl flex flex-col justify-center items-center bg-yellow-200 bg-[url('/assets/groupnote.jpg')] bg-center bg-cover bg-no-repeat"
          >
            <p className="title text-lg">Collaborate With Others</p>
          </Link>
        </div>
      </section>
      <section className="text-center gap-9 p-9 border-2 bg-yellow-200 px-16">
        <h2 className="title text-2xl ">You don't have an account?</h2>
        <Link href="../login" className="text-lg">
          Create an Account
        </Link>
      </section>
      <section className="gap-9 p-9 border-2 bg-yellow-200 px-16">
        <h2 className="title text-2xl ">How To Use:</h2>
        <div className="border-4 w-3/5 h-120 rounded-xl mx-auto"></div>
      </section>
    </main>
  );
}
