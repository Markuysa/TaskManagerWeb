import {useState} from "react";
import {postComment} from "../../api/fetch";
import Comment from "./comment";

const RenderTaskDetails = (taskDetails) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        await postComment(taskDetails.id, comment);
        setComment('');
    };

    return (
        <div className="modal-details">
            <h1>{taskDetails.description}</h1>
            <p>Category: {taskDetails.category}</p>
            <p>Status: {taskDetails.status}</p>
            <p>Assigned To: {taskDetails.assignedTo}</p>
            <p>Created By: {taskDetails.creator.username}</p>
            <p>Deadline: {taskDetails.deadline ? taskDetails.deadline : "No deadline"}</p>
            <div className="chat">
                {taskDetails.comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                ))}
                <form onSubmit={handleCommentSubmit}>
                    <div className="comment-input">
                        <input className="comment-input" type="text" placeholder="Write your comment here"
                               value={comment} onChange={handleCommentChange}/>
                        <button className="button-send">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RenderTaskDetails;