"use client";

import { useState } from "react";
import NoteSidebar from "@/components/notesidebar";
import CenterPage from "@/components/centerpage";
import NoteSection from "@/components/notesection";
import Notepad from "@/app/notepad/page";

export default function Page() {
  const [activeNote, setActiveNote] = useState(true);
  return (
    <div>
      <NoteSidebar />
      <CenterPage activeNote={activeNote} setActiveNote={setActiveNote} />
      <NoteSection activeNote={activeNote} setActiveNote={setActiveNote} />
      <Notepad />
    </div>
  );
}
