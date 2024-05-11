import React, { useState, useEffect } from "react";
import TaskList from "../components/task/tasksList";
import HeaderContent from "../components/common/header_content";
import "../css/pages/tasksPageContent.css"
import Footer from "../components/common/footer";

const TaskListPage = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/client/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setUsername(data.username))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <HeaderContent username={username} />
            <div className="tasksPageContent">
                <div className="aside">
                    <ul className="aside-list">
                        <li><a href="/tasks">Tasks</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
                <div className="tasks_list">
                    <TaskList/>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    );
};

export default TaskListPage;