import { useState } from 'react';
import { signUp } from '../../api/auth.js';

const useSignUp = () => {
    const [qrCodeData, setQrCodeData] = useState('');
    const [showQR, setShowQR] = useState(false);

    const handleSignUp = (userData) => {
        signUp(userData)
            .then(data => {
                setShowQR(true);
                setQrCodeData(data.qr);
            })
            .catch((error) => {
                alert('Error:', error);
            });
    };

    return { handleSignUp, qrCodeData, showQR };
};

export default useSignUp;