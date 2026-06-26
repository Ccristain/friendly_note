"use client";

import { useState } from "react";
import NoteSidebar from "@/components/notesidebar";
import CenterPage from "@/components/centerpage";
import NoteSection from "@/components/notesection";
import Notepad from "@/app/notepad/page";

export default function Page() {
  const [notes, setNotes] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("Title");

  function addNote(newTitle: string) {
    setNotes((prev) => [...prev, newTitle || `Note ${prev.length + 1}`]);
  }

  return (
    <div>
      <NoteSidebar notes={notes} />
      <CenterPage onAdd={addNote} />
      <NoteSection
        title={title}
        setTitle={setTitle}
        onSave={() => {
          addNote(title);
          setTitle("");
        }}
      />
      <Notepad />
    </div>
  );
}
