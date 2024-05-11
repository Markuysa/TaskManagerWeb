import { useState, useEffect } from 'react';
import { fetchTaskDetails } from '../../api/fetch.js';

export const useTaskDetails = (taskId, modalIsOpen) => {
    const [taskDetails, setTaskDetails] = useState(null);

    useEffect(() => {
        if (modalIsOpen) {
            fetchTaskDetails(taskId)
                .then(data => {
                    setTaskDetails(data);
                });
        }
    }, [modalIsOpen, taskId]);

    return taskDetails;
};