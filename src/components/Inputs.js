// Inputs.js
import React, { useState } from "react";

const Inputs = ({ onConfirm }) => {
  const [inputValue, setInputValue] = useState('');
  const [minRange, setMinRange] = useState('');
  const [maxRange, setMaxRange] = useState('');

  const confirmInput = () => {
    if (!inputValue) {
      alert('Please enter a name.');
      return;
    }

    const randomNumber = randNum(parseInt(minRange), parseInt(maxRange));
    onConfirm({ name: inputValue, randomNumber });
    setInputValue('');
  };

  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div className="inputs">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter name"
      />

      <input
        type="number"
        value={minRange}
        onChange={(e) => setMinRange(e.target.value)}
        placeholder="Min Range"
      />

      <input
        type="number"
        value={maxRange}
        onChange={(e) => setMaxRange(e.target.value)}
        placeholder="Max Range"
      />

      <button onClick={confirmInput}>Confirm</button>
    </div>
  );
}

export default Inputs;
