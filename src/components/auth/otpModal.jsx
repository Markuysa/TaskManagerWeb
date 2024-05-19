import React, { useState } from 'react';
import "../../css/components/utils/otpModal.css";
import OtpComponent from './otpComponent';
const OtpModal = ({ show, handleSubmitOtp }) => {
    const handleOtpSubmit = (otp) => {
        handleSubmitOtp(otp);
    };
    return (
        <div className="otpModal" style={{ display: show ? "block" : "none" }}>
            <div className="otp-modal-content">
                <h2>Введите OTP код</h2>
                <OtpComponent handleSubmitOtp={handleOtpSubmit}></OtpComponent>
            </div>
        </div>
    );
};

export default OtpModal;