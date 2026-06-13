import React, { useState } from 'react';
import "./main.css";

function Todo() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (!task.trim()) return;
    // Store task as an object with text and completed status
    setList([...list, { text: task, completed: false }]);
    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  };

  const handleToggle = (indexToToggle) => {
    setList(
      list.map((item, index) => 
        index === indexToToggle ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <main>
      <h1>To Do List</h1>
      <div className='input-container'>
        <input 
          type="text"  
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
        />
        <br></br>
        <button onClick={handleAdd}>+</button>
      </div>

      <ul className="container1">
        {list.map((item, index) => (
          <li key={index} className="todo1">
            <p style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </p>
            <div className="actions1">
              <input 
                type="checkbox" 
                checked={item.completed}
                onChange={() => handleToggle(index)}
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Todo;
