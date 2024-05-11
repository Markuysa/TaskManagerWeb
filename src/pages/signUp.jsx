import '../css/pages/signUp.css'
import Button from '../ui/button/Button';
import InputFieldForm from '../ui/inputFieldForm/inputFieldForm';
import Logotype from '../ui/logotype/logotype';
import TransparentButton from '../ui/transparentButton/TransparentButton';
import QRModal from '../components/auth/qrModal';
import React, {Component, useContext, useState} from 'react';
import {AuthContext} from "../App";
import {useNavigate} from "react-router-dom";
import useOtpValidation from "../hooks/auth/useOtpValidation";
import useSignUp from "../hooks/auth/userSignUp";
const SignUp = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { handleSignUp, qrCodeData, showQR } = useSignUp();
    const { handleOtpValidation } = useOtpValidation();

    const signUp = (e) => {
        e.preventDefault();
        const userData = { username, password, email };
        handleSignUp(userData);
    };

    const submitQr = (code) => {
        const otpData = { username, passCode: code };
        handleOtpValidation(otpData);
    };

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome </h1>
                <form action="post" className="form" onSubmit={signUp}>
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="email">Email</label> 
                            <InputFieldForm onChange={(e) => setUsername(e.target.value)} type="text" name='email' placeholder="Email"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password"/>
                        </section>
                        <section>
                            <label htmlFor="name">Name</label> 
                            <InputFieldForm onChange={(e) => setEmail(e.target.value)} type="text" name='username' placeholder="Name"/>
                        </section>
                        <div className="form__additionalFeatures">
                    </div>
                    </div>
                    <div className="form__buttonsBlock">
                        <Button onClick={signUp}>Register</Button>
                        <p>or</p>
                        <TransparentButton>Sign up with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Already have an account? <a href='/login'>Sign in here</a></span>
            </div>
            <QRModal show={showQR} onHide={(e) => {}} onSubmit={submitQr} qrCodeData={qrCodeData}/>
        </div>
    );

}

export default SignUp;
