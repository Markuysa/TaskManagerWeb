import React from "react";
import "../../css/components/content/team.css";
import useTeamDetails from "../../hooks/fetch/useTeamDetails";
import useTeamTasks from "../../hooks/fetch/useTeamTasks";
import TaskTable from "../common/utils/taskTable";
import TeamMembers from "../common/utils/teamMembers";



const TeamPageContent = () => {
    const team = useTeamDetails();
    const tasks = useTeamTasks();
    return (
        <div>
            {team && (
                <div className="team-content">
                    <div className="heading">
                        Team {team.name}
                    </div>
                    <TaskTable tasks={tasks}/>
                    <TeamMembers teamId={team.id}/>
                </div>
            )}
        </div>
    );
};
export default TeamPageContent;