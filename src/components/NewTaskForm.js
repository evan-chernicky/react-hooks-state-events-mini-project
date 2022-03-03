import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {

  const [details, setDetails] = useState("")
  const [currentCategory, setcurrentCategory] = useState('Code')

  function findDetails(e) {
    setDetails(e.target.value)
  }

  function onSubmit(e) {

    e.preventDefault()

    onTaskFormSubmit(details, currentCategory )

    setDetails('')
  

  }

  function changeCategory(e) {
    setcurrentCategory(e.target.value)
  }


  return (
    <form className="new-task-form" onSubmit={(e) => onSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) => findDetails(e)} />
      </label>
      <label>
        Category
        <select onChange={(e) => changeCategory(e)}  name="category">
          {categories.map(category => {
            if (category !== 'All') {
              return <option value={category} key={category}>{category}</option>
            }
        })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
