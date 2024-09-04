import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
