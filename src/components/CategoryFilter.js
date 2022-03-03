import React from "react";

function CategoryFilter({categories, onFilterCategories, setCategory}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( category => {

        const className = setCategory === category ? "selected" : null; 
      
        return <button className={className} key={category} onClick={() => onFilterCategories(category)}>{category}</button> }
      )}
    </div>
  );
}

export default CategoryFilter;
