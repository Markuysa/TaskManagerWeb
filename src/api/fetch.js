import {BASE_URL, ENDPOINTS} from './config';

import axios from 'axios';

const getSessionToken = () => localStorage.getItem('session');

let alertShown = false;

axios.interceptors.response.use(function (response) {
    // If the response is good, just pass it back
    return response;
}, function (error) {
    // If we get a 401, redirect to the login page and alert the user
    if (error.response && error.response.status === 401) {
        if (!alertShown) {
            window.alert('Сессия истекла, пожалуйста, войдите снова');
            alertShown = true;
        }
        window.location.href = '/login';
    }

    // If it's another error, just throw it back
    return Promise.reject(error);
});

export const fetchUsername = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.CLIENT_DETAILS}`, { sessionToken: getSessionToken() })
        .then(response => response.data.username);
};

export const fetchTasks = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.TASKS_LIST}`, { sessionToken: getSessionToken() })
        .then(response => response.data.tasks);
};

export const fetchTaskDetails = (taskId) => {
    return axios.post(`${BASE_URL}${ENDPOINTS.TASK_DETAILS}/${taskId}`, { sessionToken: getSessionToken() })
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const fetchTeamDetails = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.TEAM_DETAILS}`, { sessionToken: getSessionToken() })
        .then(response => response.data);
};

export const postComment = (taskId, message) => {
    return axios.post(`${BASE_URL}${ENDPOINTS.POST_COMMENT}`, { task_id: taskId, comment: { message: message }, sessionToken: getSessionToken() })
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const fetchTeamTasks = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.TEAM_TASKS}`, { sessionToken: getSessionToken() })
        .then(response => response.data.tasks);
};

export const fetchTgLink = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.LINK_TG}`, { sessionToken: getSessionToken() })
        .then(response => response.data.link);
};


export const createTask = (task) => {
    task.sessionToken = getSessionToken();
    return axios.post(`${BASE_URL}${ENDPOINTS.CREATE_TASK}`, task)
        .then(response => {
            if (response.status !== 200) {
                alert("Could not create task")
            }
            return response.data;
        });
};

export const fetchTeamMembers = (teamId) => {
    return axios.post(`${BASE_URL}${ENDPOINTS.TEAM_MEMBERS}`, {
        commandID: teamId,
        sessionToken: getSessionToken()
    })
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const fetchStatus = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.STATUS}`, { sessionToken: getSessionToken() })
        .then(response => response.data);
};

export const fetchCategory = () => {
    return axios.post(`${BASE_URL}${ENDPOINTS.CATEGORY}`, { sessionToken: getSessionToken()})
        .then(response => response.data);
};