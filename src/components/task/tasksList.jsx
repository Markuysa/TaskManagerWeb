import React, { useState, useEffect } from 'react';
import '../../css/pages/tasksPageContent.css'
import TaskItem from "./taskListItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8080/client/tasks/list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({  }) // замените на ваш объект с данными для запроса
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data.tasks);
        } else {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.ID} className="task-item">
          <TaskItem task={task}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;