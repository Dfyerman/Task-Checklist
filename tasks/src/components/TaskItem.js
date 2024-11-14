import React from "react";
import { FaTrash} from 'react-icons/fa';


const TaskItem = ({task, toggleComplete, deleteTask}) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(task.id)}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
                <FaTrash />
            </button>



        </div>
    )
}

export default TaskItem;