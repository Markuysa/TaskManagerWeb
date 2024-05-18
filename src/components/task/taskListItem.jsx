import React, { useState } from "react";
import { motion } from "framer-motion";
import '../../css/components/task/taskItem.css'
import { FaBullseye } from 'react-icons/fa'; // import the target icon
import { useTaskDetails } from '../../hooks/fetch/useTaskDetails'
import ModalDetails from '../common/utils/modalDetails.jsx';
import Comment from "./comment";
import TaskRenderer from "./taskRenderer";

const TaskItem = ({ task }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const taskDetails = useTaskDetails(task.ID, modalIsOpen);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = (event) => {
        event.stopPropagation();
        setModalIsOpen(false);
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="task-item"
            onClick={openModal}
        >
            <div className="task-info">
                <div className="task-title">
                    <span className="task-description">
                        <FaBullseye className="task-icon"/>
                        <h3>{task.Description}</h3>
                    </span>
                </div>
                <div className="task-details">
                    <div className="task-detail-item">
                        <p>{task.Deadline ? task.Deadline : "no deadline"}</p>
                    </div>
                    <div className="task-detail-item">
                        <p>{task.Category ? task.Category : "no category"}</p>
                    </div>
                    <div className="task-detail-item">
                        <p>{task.Status ? task.Status : "no status"}</p>
                    </div>
                    <div className="task-detail-item">
                        <p>{task.Creator.username}</p>
                    </div>
                </div>
            </div>
            {modalIsOpen && <ModalDetails
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                renderObject={taskDetails}
                renderer={TaskRenderer}
            />}
        </motion.div>
    );
};

export default TaskItem;