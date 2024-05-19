
export const BASE_URL = 'http://api.tasky.tech';
// export const BASE_URL = 'http://localhost:8080';

export const ENDPOINTS = {
    SIGN_UP: '/auth/sign_up',
    VALIDATE_OTP: '/auth/validate_otp',
    PREPARE_SIGN_IN: '/auth/prepare_sign_in',
    FINALIZE_SIGN_IN: '/auth/finalize_sign_in',
    CLIENT_DETAILS: '/client/details',
    TASKS_LIST: '/client/tasks/list',
    TASK_DETAILS: '/client/tasks/details',
    TEAM_DETAILS: '/client/team/details',
    POST_COMMENT: '/client/tasks/comment',
    TEAM_TASKS: '/client/team/tasks/list',
    CREATE_TASK: '/client/tasks/create',
    TEAM_MEMBERS: '/client/team/members',
    STATUS: '/client/lists/status',
    CATEGORY: '/client/lists/category',
    LINK_TG: '/client/link_tg',
};
