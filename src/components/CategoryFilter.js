import React from "react";

function CategoryFilter({categories, onFilterCategories}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( category => <button key={category} onClick={() => onFilterCategories(category)}>{category}</button> )}
    </div>
  );
}

export default CategoryFilter;
