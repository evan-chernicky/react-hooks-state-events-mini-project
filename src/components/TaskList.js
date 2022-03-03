import React from "react";
import Task from './Task.js'

function TaskList({tasks, onDeleteTask}) {

  const renderTasks = tasks.map(task => <Task taskdata={task} onDeleteTask={onDeleteTask} key={task.text}/>  )

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
