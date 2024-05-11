import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import TableList from "../../components/common/utils/table";
import HeaderContent from "../../components/common/headers/header_content";
import "../../css/pages/tasksPageContent.css"
import Footer from "../../components/common/footers/footer";
import TaskItem from "../../components/task/taskListItem";
import Aside from "../../components/common/utils/aside";
import useTasks from "../../hooks/fetch/useTasks";
import useUsername from "../../hooks/fetch/useUsername";
import {faTasks} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TaskListPage = () => {
    const username = useUsername();
    const tasks = useTasks();
    const iconStyle = { color: 'black' };
    return (
        <div>
            <div className="header_wrap">
                <HeaderContent username={username}/>
            </div>
            <div className="tasksPageContent">
                <Aside />
                <div className="content">
                    <div className="heading">
                        <h1>Welcome, {username}!</h1>
                    </div>
                    <div className="my_tasks">
                        <span> <h1><FontAwesomeIcon className="icon" icon={faTasks} style={iconStyle}/> My tasks</h1> </span>
                        <div className="table">
                            <TableList items={tasks} renderItem={(item) => <TaskItem task={item}/>}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_wrap">
                <Footer/>
            </div>
        </div>
    );
};

export default TaskListPage;
