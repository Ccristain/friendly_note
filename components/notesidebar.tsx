import { Button } from "./ui/button";

type NoteListProps = {
  notes: string[];
  turnNotePage: () => void;
};

export default function NoteSidebar({ notes, turnNotePage }: NoteListProps) {
  return (
    <div className="bg-yellow-50 w-100 h-full">
      <h2 className="text-3xl font-bold">Your Notes</h2>

      <ul>
        {notes.map((note, index) => (
          <Button variant={"outline"} key={index} onClick={turnNotePage}>
            <li>{note}</li>
          </Button>
        ))}
      </ul>
    </div>
  );
}
