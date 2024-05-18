import { useState, useEffect } from 'react';
import {fetchCategory } from '../../api/fetch';

export const useCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchCategory()
            .then(response => {
                setCategory(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return category;
};

export default useCategory;