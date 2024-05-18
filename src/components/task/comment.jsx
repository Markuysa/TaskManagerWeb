import React from 'react';
import "../../css/components/task/comment.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <p>{comment.message}</p>
            <p>{new Date(comment.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default Comment;