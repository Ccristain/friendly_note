import { Button } from "./ui/button";
import { useState } from "react";

export default function NoteSidebar() {
  const [notes, setNote] = useState([1, 2, 3]);
  return (
    <div className="bg-yellow-50 w-100 h-full">
      <h2 className="text-3xl font-bold">Your Notes</h2>

      <ul>
        {notes.map((note, index) => (
          <Button variant={"outline"} key={index}>
            <li>{note}</li>
          </Button>
        ))}
      </ul>
    </div>
  );
}
