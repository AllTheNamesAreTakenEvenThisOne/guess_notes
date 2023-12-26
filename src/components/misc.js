// misc.js
import { useState } from 'react';

const useNameAndRandNumArr = () => {
  const [nameArr, setNameArr] = useState([]);
  const [randNumArr, setRandNumArr] = useState([]);

  const handleConfirm = ({ name, randomNumber }) => {
    setNameArr(prevNameArr => [...prevNameArr, name]);
    setRandNumArr(prevRandNumArr => [...prevRandNumArr, randomNumber]);
  };

  return { nameArr, randNumArr, handleConfirm };
};

export default useNameAndRandNumArr;
