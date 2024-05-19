import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks} from "@fortawesome/free-solid-svg-icons";
import TableList from "../common/utils/table";
import TaskItem from "../task/taskListItem";
import React, { useState } from "react";
import Modal from 'react-modal';
import "../../css/components/content/tasks.css";
import useTasks from "../../hooks/fetch/useTasks";
import useUsername from "../../hooks/fetch/useUsername";
import { createTask } from '../../api/fetch.js';
import TaskRenderer from "../task/taskRenderer";
import ModalDetails from "../common/utils/modalDetails";
import TaskFormRenderer from "../task/craeteTaskFormRenderer";
import ModalForm from "../common/utils/modalForm";
import * as time from "@testing-library/user-event/dist/utils";

const TasksContent = () => {
    const tasks = useTasks();
    const username = useUsername();
    const iconStyle = { color: 'black' };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const createTaskSubmit = (task) => {
        createTask(task);
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className="heading">
                <h1>Welcome, {username}!</h1>
            </div>
            {modalIsOpen && <ModalForm
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                renderer={(props) => <TaskFormRenderer {...props} onSubmit={createTaskSubmit}/>}
            />}
            <div className="my_tasks">
                <div className="heading">
                    <span> <h1><FontAwesomeIcon className="icon" icon={faTasks}
                                                style={iconStyle}/> My tasks</h1> </span>
                    <button className="buttonAddTask" onClick={() => setModalIsOpen(true)}>Add New Task</button>
                </div>
                <div className="table">
                    <TableList items={tasks} renderItem={(item) => <TaskItem task={item}/>}/>
                </div>
            </div>
        </div>
    );
}

export default TasksContent;