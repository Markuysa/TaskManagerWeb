// api/fetch.js
import {BASE_URL, ENDPOINTS} from './config';

export const fetchUsername = () => {
    return fetch(`${BASE_URL}${ENDPOINTS.CLIENT_DETAILS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.username);
};

export const fetchTasks = () => {
    return fetch(`${BASE_URL}${ENDPOINTS.TASKS_LIST}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  }) // replace with your data for the request
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('HTTP Error: ' + response.status);
            }
        })
        .then(data => data.tasks);
};

export const fetchTaskDetails = async (taskId) => {
    try {
        const response = await fetch(`http://localhost:8080/client/tasks/details/${taskId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('There was an error!', error);
    }
};

export const postComment = async (taskId, message) => {
    try {
        const response = await fetch(`http://localhost:8080/client/tasks/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task_id: taskId, comment: { message: message } })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error!', error);
    }
};