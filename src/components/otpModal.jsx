import React, { useState } from 'react';
import "../css/otpModal.css";
import OtpComponent from './otpComponent';
const OtpModal = ({ handleSubmitOtp }) => {
    const handleOtpSubmit = (otp) => {
        const otpCode = otp.join('');
        handleSubmitOtp(otpCode);
    };
  
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Введите OTP код</h2>
                <OtpComponent handleOtpSubmit={handleOtpSubmit}></OtpComponent>
            </div>
        </div>
    );
};

export default OtpModal;