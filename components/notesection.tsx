"use client";
import { Button } from "./ui/button";

type AddNoteButtonProps = {
  activeNote: boolean;
  setActiveNote: (value: boolean) => void;
};

export default function NoteSection({
  activeNote,
  setActiveNote,
}: AddNoteButtonProps) {
  function toggleNote() {
    setActiveNote(!activeNote);
  }

  return (
    <>
      <textarea
        className="w-full h-auto p-2 border-2 text-center"
        placeholder="Title"
      ></textarea>
      <textarea
        className="w-full h-auto p-2 border-2"
        placeholder="This is a note for my Lovely Alexandra..."
      ></textarea>
      <Button onClick={toggleNote}>Save</Button>
    </>
  );
}
