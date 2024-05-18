import React, { useState, useEffect } from 'react';
import "../../css/components/task/taskForm.css";
import useTeamMembers from "../../hooks/fetch/useTeamMembers";
import {useStatusList} from "../../hooks/fetch/useStatusList";
import useCategory from "../../hooks/fetch/useCategory";
import useTeamDetails from "../../hooks/fetch/useTeamDetails";
import {useTeamMembersSync} from "../../hooks/fetch/useTeamMembersSync";

const TaskFormRenderer = ({ onSubmit }) => {
    const statusList = useStatusList();
    const categoryList = useCategory();
    const teamMembers = useTeamMembersSync();

    const [task, setTask] = useState({
        category: 0,
        deadline: 0,
        status: 0,
        description: '',
        participant_id: 0,
        sprint: 1
    });

    const handleInputChange = (event) => {
        let value = event.target.value;
        if (event.target.name === 'deadline') {
            value = new Date(value).getTime() / 1000;
        }
        if (event.target.name === 'status' ||
            event.target.name === 'category' ||
            event.target.name === 'participant_id') {
            console.log(event.target.name, value);
            value = parseInt(value, 10);
        }
        setTask({
            ...task,
            [event.target.name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(task);
    };
    return (
        <form onSubmit={handleSubmit} className="task-form">
            {categoryList && (
                <select name="category" onChange={handleInputChange} className="form-select" title="Select Category">
                    {categoryList.map(category => (
                        <option key={category.ID} value={category.ID}>{category.Description}</option>
                    ))}
                </select>
            )}
            <input type="date" name="deadline" onChange={handleInputChange} className="form-input"/>
            {statusList && (
                <select name="status" onChange={handleInputChange} className="form-select" title="Select Status">
                    {statusList.map(status => (
                        <option key={status.ID} value={status.ID}>{status.Description}</option>
                    ))}
                </select>
            )}
            <input name="description" onChange={handleInputChange} placeholder="Description" className="form-input"/>
            {teamMembers && (
                <select name="participant_id" onChange={handleInputChange} className="form-select" title="Select Assignee">
                    {teamMembers.map(member => (
                        <option key={member.id} value={member.id}>{member.username}</option>
                    ))}
                </select>
            )}
            <input name="sprint" onChange={handleInputChange} placeholder="Sprint" className="form-input" />
            <button type="submit" className="form-button">Create Task</button>
        </form>
    );
};

export default TaskFormRenderer;