import React, { useState } from "react";
import Task from './Task';
import CategoryButton from './CategoryButton';

const TaskList = ({ tasks, categories, onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  return (
    <div>
      <div>
        {categories.map(category => (
          <CategoryButton
            key={category}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      <ul>
        {tasks
          .filter(task => !selectedCategory || task.category === selectedCategory)
          .map(task => (
            <Task key={task.id} text={task.text} />
          ))}
      </ul>
    </div>
  );
};


export default TaskList;
