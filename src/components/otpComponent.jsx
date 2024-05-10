import React, { useState } from 'react';
import "../css/otpModal.css";
import BlackButton from '../ui/Blackbutton/BlackButton';

const OtpComponent = ({ handleSubmitOtp  }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [];
  
    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        
        if (e.target.value !== '') {
            if (index < otp.length - 1) {
                inputRefs[index + 1].focus();
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].focus();
            }
        }
    };
  
    const handleOtpSubmit = () => {
        const otpCode = otp.join('');
        handleSubmitOtp(otpCode);
    };
  
    return (
        <div>
            <div className="otp-input">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            ref={(input) => inputRefs[index] = input}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <BlackButton onClick={handleOtpSubmit}>Отправить OTP</BlackButton>
        </div>
    );
};

export default OtpComponent;