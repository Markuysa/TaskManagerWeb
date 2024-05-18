// src/components/common/utils/TeamMembers.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../../css/components/utils/teamMembers.css";
import useTeamMembers from "../../../hooks/fetch/useTeamMembers";

const TeamMembers = ({ teamId }) => {
    const members = useTeamMembers(teamId);
    return (
        <div className="team-members">
            <button className="scroll-button left">&lt;</button>
            <div className="members-container">
                {members.map(member => (
                    <div key={member.id} className="member">
                        {member.username}
                    </div>
                ))}
            </div>
            <button className="scroll-button right">&gt;</button>
        </div>
    );
};

export default TeamMembers;