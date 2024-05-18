import React, { useEffect, useState } from 'react';
import "../../../css/components/utils/taskTable.css"

const TaskTable = ({ tasks }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (tasks) {
            setLoaded(true);
        }
    }, [tasks]);

    console.log(tasks)
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Creator</th>
                    <th>Description</th>
                    <th>Assigned To</th>
                    <th>Sprint</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task.id} className={loaded ? 'loaded' : ''}>
                        <td>{task.id}</td>
                        <td>{task.category}</td>
                        <td>{task.deadline || 'N/A'}</td>
                        <td>{task.status}</td>
                        <td>{task.creator.username}</td>
                        <td>{task.description}</td>
                        <td>{task.assignedTo}</td>
                        <td>{task.sprint.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;