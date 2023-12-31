// RootNoteSelector.js
import React, { useState } from "react";

const RootNoteSelector = ({ onNoteSelected }) => {
  const [selectedRootNote, setSelectedRootNote] = useState("C");

  const handleRootNoteChange = (event) => {
    const selectedNote = event.target.value;
    setSelectedRootNote(selectedNote);

    // Call the onNoteSelected callback with the selected note
    if (onNoteSelected) {
      onNoteSelected(selectedNote);
    }
  };

  return (
    <div>
      <label htmlFor="rootNote">Select Root Note:</label>
      <select id="rootNote" value={selectedRootNote} onChange={handleRootNoteChange}>
        {["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RootNoteSelector;
