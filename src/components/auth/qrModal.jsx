import React, { useRef, useState } from "react";
import "../../css/components/qrModal.css";
import Base64QRCode from "../common/base64Component.jsx";
import OtpComponent from "./otpComponent.jsx";
const QRModal = ({ show, onHide, qrCodeData, onSubmit }) => {
  const handleSubmit = (otp) => {
    onSubmit(otp);
  };

  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-content">
        <h2>Scan QR-code</h2>
        <Base64QRCode base64Data={qrCodeData} />
        <p>
          Input the OTP from authentication app
        </p>
        <br />
        <OtpComponent handleSubmitOtp={handleSubmit}/> 
      </div>
    </div>
  );
};

export default QRModal;
