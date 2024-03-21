import React, { useMemo, useState } from "react";

const Memo = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(100);

  function add() {
    setValue(value + 1);
  }

  function minus() {
    setValue1(value1 - 1);
  }

  let multi = useMemo(() => {
      console.log("sumit");
    return value * 10;
  }, [value]);

  return (
    <div>
      <p style={{ color: "wheat",width:"150px",margin:"23px",textAlign:"center" }}>{multi}</p>
      <h2 style={{ color: "wheat" }}>{value}</h2>
      <h3 style={{ color: "wheat" }}>{value1}</h3>
      <button onClick={add}>addition</button>
      <button onClick={minus}>subtraction</button>
    </div>
  );
};

export default Memo;
