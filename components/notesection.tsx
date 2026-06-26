"use client";
import { Button } from "./ui/button";

type NoteEditorProps = {
  title: string;
  setTitle: (title: string) => void;
  onSave: () => void;
};

export default function NoteSection({
  title,
  setTitle,
  onSave,
}: NoteEditorProps) {
  return (
    <>
      <textarea
        className="w-full h-auto p-2 border-2"
        placeholder="This is a note for my Lovely Alexandra..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        className="w-full h-auto p-2 border-2"
        placeholder="This is a note for my Lovely Alexandra..."
      ></textarea>
      <Button onClick={onSave}>Save</Button>
    </>
  );
}
