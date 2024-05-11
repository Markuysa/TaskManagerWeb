import { useContext } from 'react';
import { validateOtp } from '../../api/auth.js';
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

const useOtpValidation = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOtpValidation = (otpData) => {
        validateOtp(otpData)
            .then(() => {
                setIsAuthenticated(true);
                navigate('/tasks');
            })
            .catch((error) => {
                alert('Error:', error);
            });
    };

    return { handleOtpValidation };
};

export default useOtpValidation;