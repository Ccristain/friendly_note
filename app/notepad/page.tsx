"use client";

import NoteSidebar from "@/components/notesidebar";
import GroupNoteList from "@/components/sharedlist";
import CenterPage from "@/components/centerpage";
import { useState } from "react";

export default function Notepad() {
  const [activeNote, setActiveNote] = useState(true);

  return (
    <>
      <main className="flex justify-between gap-2 h-screen border-2 p-2">
        <NoteSidebar />
        <CenterPage activeNote={activeNote} setActiveNote={setActiveNote} />
        <GroupNoteList />
      </main>
    </>
  );
}
