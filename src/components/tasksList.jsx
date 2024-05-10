import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/taskList.css'

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
          body: JSON.stringify({ key: 'value' }) // замените на ваш объект с данными для запроса
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data);
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
          <h3>{task.Description}</h3>
          <p>Категория: {task.Category ? task.Category : 'Нет информации'}</p>
          <p>Срок: {task.Deadline ? task.Deadline : 'Не указан'}</p>
          <p>Статус: {task.Status ? task.Status : 'Не определен'}</p>
          <p>Приоритет: {task.Priority ? task.Priority : 'Не указан'}</p>
          <p>Создатель: {task.CreatorID}</p>
          <p>Участник: {task.ParticipantID ? task.ParticipantID : 'Нет информации'}</p>
          <p>Комментарии: {task.Comments ? task.Comments : 'Нет комментариев'}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;