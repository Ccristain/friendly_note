"use client";

import NoteSidebar from "@/components/notesidebar";
import GroupNoteList from "@/components/sharedlist";
import CenterPage from "@/components/centerpage";
import { useState } from "react";

export default function Notepad() {
  const [notes, setNotes] = useState<string[]>([]);

  function addNote(newTitle: string) {
    setNotes((prev) => [...prev, newTitle || "Untitled"]);
  }

  const [activeNote, setActiveNote] = useState(true);

  function toggleNote() {
    setActiveNote(false);
  }
  return (
    <>
      <main className="flex justify-between gap-2 h-screen border-2 p-2">
        <NoteSidebar notes={notes} turnNotePage={toggleNote} />
        <CenterPage
          onAdd={addNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <GroupNoteList />
      </main>
    </>
  );
}
