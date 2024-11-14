import React, {useState} from 'react';

const TaskForm = ({addTask}) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskText.trim() === '') return;

        addTask({ id: Date.now(), text: taskText, completed: false});
        setTaskText('');
    }

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            <input
                type='text'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder='Add a new task'
            />
            <button type="submit">Add task</button>
        </form>
    );
};

export default TaskForm