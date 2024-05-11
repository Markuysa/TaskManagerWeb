import React from "react";

const Base64QRCode = ({ base64Data }) => {
  return <img src={`data:image/png;base64,${base64Data}`} alt="QR Code" />;
};

export default Base64QRCode;
