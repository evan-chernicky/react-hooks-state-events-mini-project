import React, {useState} from "react";
import Task from './Task.js'

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks)

  function onDeleteTask(e) {

    console.log(e)

  }

  const renderTasks = tasks.map(task => <Task taskdata={task} onDeleteTask={onDeleteTask} key={task.text}/>  )

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
