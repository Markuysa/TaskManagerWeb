import { BASE_URL, ENDPOINTS } from './config';

import axios from 'axios';

export const validateOtp = (otpData) => {
    return axios.post(`${BASE_URL}${ENDPOINTS.VALIDATE_OTP}`, otpData)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Error during OTP validation. Please try again.');
            }
        });
};

export const signUp = (userData) => {
    return axios.post(`${BASE_URL}${ENDPOINTS.SIGN_UP}`, userData)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('session', response.data.sessionToken);
                return response.data;
            } else {
                throw new Error('Error during sign up. Please try again.');
            }
        });
};

export const prepareLogin = (username, password) => {
    const userData = {
        username: username,
        password: password,
    };

    return axios.post(`${BASE_URL}${ENDPOINTS.PREPARE_SIGN_IN}`, userData)
};

export const finalizeLogin = (username, otpCode) => {
    const accessToken = localStorage.getItem('access');
    const userData = {
        username: username,
        pass_code: otpCode,
        accessToken: accessToken,
    };

    return axios.post(`${BASE_URL}${ENDPOINTS.FINALIZE_SIGN_IN}`, userData)
};