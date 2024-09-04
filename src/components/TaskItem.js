import React from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <li className={`flex items-center justify-between p-2 mb-2 border rounded ${task.completed ? 'bg-gray-200' : 'bg-white'}`}>
      <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
        {task.task} (Priority: {task.priority})
      </span>
      <div>
        <button
          onClick={() => completeTask(task.id)}
          className={`bg-blue-500 text-white px-2 py-1 rounded mr-2 ${task.completed ? 'bg-blue-400' : ''}`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
