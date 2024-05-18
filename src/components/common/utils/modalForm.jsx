import React, { useState } from 'react';
import "../../../css/components/utils/modalTask.css"
import {postComment} from "../../../api/fetch";
import Comment from "../../task/comment";

const ModalForm = ({ isOpen, onRequestClose, renderer, onFormSubmit }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close_button" onClick={(event) => onRequestClose(event)}>Close</button>
                {renderer ? (
                    renderer(onFormSubmit)
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default ModalForm;