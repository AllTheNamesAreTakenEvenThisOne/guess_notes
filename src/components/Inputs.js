// Inputs.js
import React, { useState } from "react";
import RootNoteSelector from "./RootNoteSelector";

const Inputs = () => {
  const [selectedRoot, setSelectedRoot] = useState('C');

  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const getMajorScale = (root) => {
    const wholeStep = 2;
    const halfStep = 1;
    const scalePattern = [wholeStep, wholeStep, halfStep, wholeStep, wholeStep, wholeStep, halfStep];
    const majorScale = [root];

    for (let i = 0, j = 0; i < scalePattern.length; i++) {
      j += scalePattern[i];
      majorScale.push(notes[(notes.indexOf(root) + j) % notes.length]);
    }

    return majorScale;
  }

  const getMinorScale = (root) => {
    const wholeStep = 2;
    const halfStep = 1;
    const scalePattern = [wholeStep, halfStep, wholeStep, wholeStep, halfStep, wholeStep, wholeStep];
    const minorScale = [root];
  
    for (let i = 0, j = 0; i < scalePattern.length; i++) {
      j += scalePattern[i];
      minorScale.push(notes[(notes.indexOf(root) + j) % notes.length]);
    }
  
    return minorScale;
  };

  return (
    <div>
      <RootNoteSelector onNoteSelected={setSelectedRoot} />

      {notes.map((note, index) => (
        <div key={index}>
          <p>{note}</p>
          <p>Major Scale: {getMajorScale(selectedRoot).join(", ")}</p>
          <p>Minor Scale: {getMinorScale(selectedRoot).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Inputs;
