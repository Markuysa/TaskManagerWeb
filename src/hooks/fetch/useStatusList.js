import { useState, useEffect } from 'react';
import {fetchStatus } from '../../api/fetch.js';

export const useStatusList = () => {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetchStatus()
            .then(response => {
                setStatus(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return status;
};
