import { useState } from "react";
import "./App.css";
function Mybutton() {
  let name = "button";
  const [count, setCount] = useState(0);
  function Handle() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={Handle}>
        click {name} {count} times
      </button>
    </>
  );
}
export default Mybutton;
