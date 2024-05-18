import { useState, useEffect } from 'react';
import {fetchTeamDetails, fetchTeamMembers} from '../../api/fetch.js';


export const useTeamMembersSync = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const team = await fetchTeamDetails();
                const response = await fetchTeamMembers(team.id);
                setMembers(response);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };

        fetchMembers();
    }, []);

    return members;
};
