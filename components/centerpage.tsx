"use client";
import NoteSection from "./notesection";
import HomeNote from "./homenote";
import { Button } from "./ui/button";
import { useState } from "react";

type AddNoteButtonProps = {
  onAdd: (title: string) => void;
  activeNote: boolean;
  setActiveNote: (value: boolean) => void;
};

export default function CenterPage({
  onAdd,
  activeNote,
  setActiveNote,
}: AddNoteButtonProps) {
  const [title, setTitle] = useState("");

  function handleSave() {
    onAdd(title);
    setTitle("");
    toggleNote();
  }

  function toggleNote() {
    setActiveNote(!activeNote);
  }
  return (
    <div className="bg-yellow-50 w-full">
      {activeNote ? (
        <HomeNote />
      ) : (
        <NoteSection title={title} setTitle={setTitle} onSave={handleSave} />
      )}
      {activeNote ? (
        <Button
          id="toggle-button"
          onClick={() => {
            toggleNote();
          }}
        >
          Create New Note
        </Button>
      ) : (
        <Button onClick={toggleNote}>Return</Button>
      )}
    </div>
  );
}
