import { useState, useEffect } from 'react';
import { fetchTeamDetails } from '../../api/fetch.js';

export const useTeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchTeamDetails()
            .then(data => {
                setTeamDetails(data);
                setIsLoading(false);
            });
    }, []);

    return  teamDetails
};


export default useTeamDetails;