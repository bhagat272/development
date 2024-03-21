import React, { useEffect, useState } from "react";
import { quotes } from "./newjson";
const Quotes = () => {
  const [record, setrecord] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setrecord(data))
      .catch((err) => console.log(err));
  });
  return (
    <div id="quot">
      {quotes.map((val, i) => (
        <div className="quotes" key={i}>
          {val.id}
          <p className="lister"> "{val.quote}"</p>
          <footer>Author - {val.author}</footer>
        </div>
      ))}
      {record.map((value, k) => (
        <div key={k} style={{ color: "green" }}>
          <p >{value.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
