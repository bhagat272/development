import React, { useState } from "react";

const ListApp = () => {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handlelist() {
    if (activity.trim() !== "") {
      if (editIndex !== -1) {
        const newList = [...list];
        newList[editIndex] = activity;
        setList(newList);
        setEditIndex(-1);
      } else {
        setList((list) => [...list, activity]);
      }
      setActivity("");
    }
  }

  function handleremove(i) {
    const updatedList = list.filter((ele, id) => id !== i);
    setList(updatedList);
  }

  function handleEdit(i) {
    setActivity(list[i]);
    setEditIndex(i);
  }

  function handlereset() {
    setList([]);
  }

  return (
    <div style={{ color: "yellow" }}>
      <h2>TO DO APP</h2>
      <input
        type="text"
        placeholder="add tasks"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="btn btn-success" onClick={handlelist}>
        {editIndex !== -1 ? "Update Task" : "Add Tasks"}
      </button>
      <button className="btn btn-danger" onClick={handlereset}>
        reset
      </button>
      {list.length > 0 ? (
        list.map((data, i) => (
          <p key={i}>
            <div>{data}</div>
            <button
              className="btn btn-warning ms-2 rounded-pill border border-3"
              onClick={() => handleEdit(i)}
            >
              Edit
            </button>
            <button
              className="btn btn-warning ms-2 rounded-pill border border-3"
              onClick={() => handleremove(i)}
            >
              Delete
            </button>
          </p>
        ))
      ) : (
        <p>NO Tasks Added</p>
      )}
    </div>
  );
};

export default ListApp;
