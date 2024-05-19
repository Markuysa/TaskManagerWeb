import React from "react";
import "../../css/components/content/team.css";
import useTeamDetails from "../../hooks/fetch/useTeamDetails";
import useTeamTasks from "../../hooks/fetch/useTeamTasks";
import TaskTable from "../common/utils/taskTable";
import TeamMembers from "../common/utils/teamMembers";
import Button from "../../ui/button/Button";
import useTgLink from "../../hooks/fetch/useTgLink";

const SettingsContent = () => {
    const link = useTgLink();

    const handleButtonClick = () => {
        window.location.href = link;
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Link tg</Button>
        </div>
    );
};

export default SettingsContent;