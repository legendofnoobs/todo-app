import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [toDoList,SetToDoList] = useState([]);
  const addTask = (taskName) => {
    const newTask = {taskName, checked:false}
    SetToDoList([...toDoList, newTask])
  }
  function deleteTask(deleteTaskName){
    SetToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName))
  }
  function toggleCheck(taskName){
    SetToDoList((prevToDoList) => 
      prevToDoList.map((task) => task.taskName === taskName? {...task, checked: !task.checked} : task,))
  }
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <TaskInput addTask={addTask}/>
        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
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
