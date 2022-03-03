import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')


  function onDeleteTask(deletedText) {

    setTasks(tasks.filter(task => task.text !== deletedText ))

  }

  function onTaskFormSubmit(details) {

    console.log('test')



  }


  function onFilterCategories(category) {

    setCategory(category)

  }

  const filteredTasks = tasks.filter( task => {

    if ('All' === category) {
       return task
    } else {
       return task.category === category 
    }
    })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterCategories={onFilterCategories} setCategory={category}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
