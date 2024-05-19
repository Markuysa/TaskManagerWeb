
import { useState, useEffect } from 'react';
import { fetchTgLink } from '../../api/fetch';

const useTgLink = () => {
    const [tgLink, setTgLink] = useState(null);

    useEffect(() => {
        fetchTgLink()
            .then(link => setTgLink(link))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return tgLink;
};

export default useTgLink;