import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [toDoList, SetToDoList] = useState(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = localStorage.getItem("toDoList");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever the toDoList changes
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addTask = (taskName) => {
    const newTask = { id: uuidv4(), taskName, checked: false };
    SetToDoList((prevToDoList) => [...prevToDoList, newTask]);
  };

  const deleteTask = (deleteTaskId) => {
    SetToDoList((prevToDoList) =>
      prevToDoList.filter((task) => task.id !== deleteTaskId)
    );
  };

  const toggleCheck = (taskId) => {
    SetToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You Are Done</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
