import React, { useState } from 'react';

function Addition() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <p style={{color:"wheat"}}>Result: {num1 + num2}</p>
    </div>
  );
}

export default Addition;
