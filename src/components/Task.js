import React from "react";

function Task({taskdata, onDeleteTask}) {

  return (
    <div className="task">
      <div className="label">{taskdata.category}</div>
      <div className="text">{taskdata.text}</div>
      <button onClick={onDeleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
