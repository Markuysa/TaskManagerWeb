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

export const fetchTeamDetails = () => {
    return fetch(`http://127.0.0.1:8080/client/team/details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('HTTP Error: ' + response.status);
            }
        });
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
        return await response.json();
    } catch (error) {
        console.error('There was an error!', error);
    }
};

export const fetchTeamTasks = () => {
    return fetch(`http://127.0.0.1:8080/client/team/tasks/list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  })
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

// src/api/api.js

export const createTask = (task) => {
    return fetch('http://127.0.0.1:8080/client/tasks/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then(response => {
        if (!response.ok) {
            alert("Could not create task")
        }
        return response.json();
    });
};

export const fetchTeamMembers = (teamId) => {
    return fetch('http://localhost:8080/client/team/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            commandID: teamId
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const fetchStatus = () => {
    return fetch(`http://127.0.0.1:8080/client/lists/status`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('HTTP Error: ' + response.status);
            }
        })
};

export const fetchCategory = () => {
    return fetch(`http://127.0.0.1:8080/client/lists/category`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('HTTP Error: ' + response.status);
            }
        })
};