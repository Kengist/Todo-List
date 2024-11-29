import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  // Define tasks as an array of strings
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]); // Add new task
      setInputValue(""); // Clear input field
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="heading">My To-Do List</h1>
      <div className="inputWrapper">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
        />
        <button onClick={addTask} className="addButton">
          Add
        </button>
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            <span className="taskText">{task}</span>
            <button onClick={() => deleteTask(index)} className="deleteButton">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
