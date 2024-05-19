import React, { useRef, useState } from "react";
import "../../css/components/utils/qrModal.css";
import Base64QRCode from "../common/utils/base64Component.jsx";
import OtpComponent from "./otpComponent.jsx";
const QRModal = ({ show, onHide, qrCodeData, onSubmit }) => {
  const handleSubmit = (otp) => {
    onSubmit(otp);
  };

  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-content">
        <h2>Scan QR-code</h2>
        <div className="image">
          <Base64QRCode base64Data={qrCodeData} />
        </div>
        <br />
        <OtpComponent handleSubmitOtp={handleSubmit}/>
      </div>
    </div>
  );
};

export default QRModal;
