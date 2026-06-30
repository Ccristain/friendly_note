"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function About() {
  const [description, setDesc] = useState(true);
  let oldValue =
    "Friendly Note is developed by indie developer 'KK', that are passionate about studying and taking notes. This Website encourages people to study and learn as a group.";

  return (
    <main className="p-9">
      <h1 className="text-3xl font-bold">About Page</h1>
      {description && <p className="text-base">{oldValue}</p>}
      <Button onClick={() => setDesc(!description)}>Click Me</Button>
    </main>
  );
}
