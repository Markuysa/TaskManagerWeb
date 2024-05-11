import React, { useState } from 'react';
import "../../../css/components/modalTask.css"
import {postComment} from "../../../api/fetch";
import Comment from "../../task/comment";

const ModalDetails = ({ isOpen, onRequestClose, renderer, renderObject }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close_button" onClick={(event) => onRequestClose(event)}>Close</button>
                {renderObject ? (
                    renderer(renderObject)
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default ModalDetails;