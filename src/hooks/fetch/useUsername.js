
import { useState, useEffect } from 'react';
import { fetchUsername } from '../../api/fetch';

const useUsername = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        fetchUsername()
            .then(username => setUsername(username))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return username;
};

export default useUsername;