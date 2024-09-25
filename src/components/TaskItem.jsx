import React from 'react';
import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
    return (
        <li className='items'>
            <div className='items-text'>
                <input
                    type='checkbox'
                    checked={task.checked}
                    onChange={() => toggleCheck(task.id)}  // Using task.id instead of task.taskName
                />
                <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
            </div>
            <MdDeleteSweep
                className='delete-icon'
                onClick={() => deleteTask(task.id)}  // Using task.id instead of task.taskName
            />
        </li>   
    );
}

export default TaskItem;
