import React from "react";
import { motion } from "framer-motion";
import '../../css/components/taskItem.css'
import { FaBullseye } from 'react-icons/fa'; // import the target icon

const TaskItem = ({ task }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="task-item"
        >
            <div className="task-info">
                <FaBullseye className="task-icon" /> {/* add the target icon */}
                <h3>{task.Description}</h3>
                <div className="task-details">
                    <p>{task.Deadline ? task.Deadline : "Не указан"}</p>
                    <p>{task.Type ? task.Type : "Не указан"}</p>
                    <p>{task.CreatorID}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TaskItem;