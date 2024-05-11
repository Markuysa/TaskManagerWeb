// api/signUp.js
import { BASE_URL, ENDPOINTS } from './config';

export const signUp = (userData) => {
    return fetch(`${BASE_URL}${ENDPOINTS.SIGN_UP}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error during sign up. Please try again.');
            }
        });
};

export const validateOtp = (otpData) => {
    return fetch(`${BASE_URL}${ENDPOINTS.VALIDATE_OTP}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(otpData)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error during OTP validation. Please try again.');
            }
        });
};