import React, { useState } from "react";

const TodoApp = () => {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);

  function handlelist() {
    if (activity.trim() !== "") {
      setList((prevList) => [...prevList, activity]);
      setActivity("");
    }
  }

  function handleRemove(i) {
    const updatedList = list.filter((ele, id) => id !== i);
    setList(updatedList);
  }

  function handleReset() {
    setList([]);
  }

  return (
    <div id="adder">
    <div className="todo ">
      <input
        type="text"
        placeholder="Add Task"
        id="dash"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button
        type="submit"
        id="button"
        className="btn btn-primary btn-sm ms-2 me-2"
        onClick={handlelist}
      >
        Submit
      </button>
      <button
        id="reset-button"
        className="btn btn-secondary btn-sm"
        onClick={handleReset}
      >
        Reset
      </button>
      <h3
        id="list"
        className="mt-2 mb-3"
        style={{ textAlign: "center", color: "wheat" }}
      >
        To-Do List
      </h3>
      {list.length > 0 ? (
        list.map((data, i) => (
          <p  style={{border:"0.5px solid white"}} key={i} id="datas">
            <div  className="ms-4 text-white">{data}</div>
            <div>
              <button
                className="btn btn-success"
                onClick={() => handleRemove(i)}
                id="lamp"
              >
                Remove
              </button>
            </div>
          </p>
        ))
      ) : (
        <p style={{ color: "wheat", paddingLeft: "23px",border:"1px solid wheat" }}>No record found</p>
      )}
    </div>
    </div>
  );
};

export default TodoApp;
