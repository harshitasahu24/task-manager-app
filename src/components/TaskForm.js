import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask({
        id: Date.now(),
        task,
        priority,
        completed: false
      });
      setTask('');
      setPriority('Low');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="border px-2 py-1 mr-2 rounded flex-1"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border px-2 py-1 mr-2 rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
