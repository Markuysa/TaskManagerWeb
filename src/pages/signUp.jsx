import '../css/pages/signUp.css'
import Button from '../ui/button/Button';
import InputFieldForm from '../ui/inputFieldForm/inputFieldForm';
import Logotype from '../ui/logotype/logotype';
import TransparentButton from '../ui/transparentButton/TransparentButton';
import QRModal from '../components/auth/qrModal';
import React, {Component, useContext, useState} from 'react';
import {AuthContext} from "../App";
import {useNavigate} from "react-router-dom";
const SignUp = () =>{
    const navigate = useNavigate();
    const SIGNUP = "http://localhost:8080/auth/sign_up";
    const { setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showQR, setShowQR] = useState(false);
    const [qrCodeData, setQrCodeData] = useState('');

    const signUp = (e) => {
        e.preventDefault();
      
        const userData = { 
            username: username, 
            password: password, 
            email: email,
          };
        const userDataJson = JSON.stringify(userData);
      
        fetch(SIGNUP, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },  
          body:userDataJson
        })
        .then((response) => {
            if (response.status === 200) {
              response.json().then((data) => {
                setShowQR(true);
                setQrCodeData(data.qr);
              });
            } else {
              alert("Ошибка при подготовке к входу в систему. Повторите попытку.");
            }
          })          
          .catch((error) => {
            alert("Произошла ошибка. Повторите попытку.");
          });
    }

    const submitQr = (code) => {
        const otpData = {
            username: username,
            passCode: code
        };
        const otpDataJson = JSON.stringify(otpData);

        fetch("http://localhost:8080/auth/validate_otp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: otpDataJson
        })
            .then((response) => {
                if (response.status === 200) {
                    setIsAuthenticated(true);
                    navigate('/tasks');
                } else {
                    if (response.status === 400 ){
                        alert("Неверный OTP. Повторите попытку.");
                        return;
                    }
                    alert("Ошибка при валидации OTP. Повторите попытку.");
                }
            })
            .catch((error) => {
                alert("Произошла ошибка. Повторите попытку.");
            });
    }

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
