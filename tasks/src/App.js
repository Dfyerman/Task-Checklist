import React,  {useState, useEffect} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { set } from 'mongoose';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed } : task
    ));
  }

  const deleteTask =(id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className='app'>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask}></TaskForm>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} ></TaskList>
    </div>
  )
}

export default App