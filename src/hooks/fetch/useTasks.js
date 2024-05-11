
import { useState, useEffect } from 'react';
import { fetchTasks } from '../../api/fetch';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
            .then(tasks => setTasks(tasks))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return tasks;
};

export default useTasks;