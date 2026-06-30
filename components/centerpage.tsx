"use client";
import NoteSection from "./notesection";
import HomeNote from "./homenote";
import { Button } from "./ui/button";

type AddNoteButtonProps = {
  activeNote: boolean;
  setActiveNote: (value: boolean) => void;
};

export default function CenterPage({
  activeNote,
  setActiveNote,
}: AddNoteButtonProps) {
  function toggleNote() {
    setActiveNote(!activeNote);
  }
  return (
    <div className="bg-yellow-50 w-full">
      {activeNote ? (
        <HomeNote />
      ) : (
        <NoteSection activeNote={activeNote} setActiveNote={setActiveNote} />
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
