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
    <div className="inputs">C D E F G A B
    </div>
  );
}

export default Inputs;
