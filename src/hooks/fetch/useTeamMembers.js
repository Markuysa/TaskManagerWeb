import { useState, useEffect } from 'react';
import {fetchTeamDetails, fetchTeamMembers} from '../../api/fetch.js';

const useTeamMembers = (teamId) => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetchTeamMembers(teamId)
            .then(response => {
                setMembers(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [teamId]);

    return members;
};

export default useTeamMembers;