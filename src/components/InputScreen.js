// InputScreen.js
import React from "react";
import Inputs from "./Inputs";
import Tables from "./Tables";
import useNameAndRandNumArr from "./misc"; // Fix import statement

function InputScreen() {
  const { nameArr, randNumArr, handleConfirm } = useNameAndRandNumArr(); // Call the hook

  return (
    <>
      <Inputs onConfirm={handleConfirm} />
      <Tables nameArr={nameArr} randNumArr={randNumArr} />
    </>
  );
}

export default InputScreen;
