import React, { useEffect, useState } from "react";

const Fake = () => {
  const [record, setrecord] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setrecord(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ol>
        {record?.quotes?.map((val, i) => (
          <div style={{ color: "wheat" }} key={i}>
            <li>{val.author}</li>
            <p></p>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Fake;
