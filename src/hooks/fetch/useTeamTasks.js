
import { useState, useEffect } from 'react';
import { fetchTeamTasks } from '../../api/fetch';

const useTeamTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTeamTasks()
            .then(tasks => setTasks(tasks))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return tasks;
};

export default useTeamTasks;