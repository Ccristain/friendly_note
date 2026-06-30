"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRef } from "react";

export default function Privacy_Policy() {
  let [stateVar, setStateVar] = useState("");
  const refVariable = useRef(null);
  return (
    <main>
      <h1 className="title text-4xl">Privacy Policy</h1>
      <Button onClick={() => setStateVar((stateVar += "chupok! "))}>Fap</Button>
      <p ref={refVariable}>{stateVar}</p>
    </main>
  );
}
