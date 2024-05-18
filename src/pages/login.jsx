import '../css/pages/login_page.css'
import OTPModal from '../components/auth/otpModal.jsx';
import Button from '../ui/button/Button';

import InputFieldForm from '../ui/inputFieldForm/inputFieldForm';
import Logotype from '../ui/logotype/logotype';
import TransparentButton from '../ui/transparentButton/TransparentButton';
import React, { Component,useState }  from 'react';

import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modalShow, setOtpModalShow] = useState(false);

    const PREPARE_LOGIN_URL = "http://localhost:8080/auth/prepare_sign_in";
    const FINALIZE_LOGIN_URL = "http://localhost:8080/auth/finalize_sign_in"

    const handleOTP = (otpCode) => {
        const userData = { 
            username: username,
            pass_code: otpCode,
          };
        const userDataJson = JSON.stringify(userData);
      
        fetch(FINALIZE_LOGIN_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },  
          body:userDataJson
        })
          .then((response) => {
            if (response.status === 200) {
              setOtpModalShow(false);
              setAuth(true);
              navigate("/tasks");
            } else {
              alert("Ошибка при завершении входа в систему. Повторите попытку.");
            }
          })
          .catch((error) => {
            alert("Произошла ошибка. Повторите попытку.");
          });
      }
      

      const loginUser = (e) => {
        e.preventDefault();
      
        const userData = { 
            username: username, 
            password: password, 
          };
        const userDataJson = JSON.stringify(userData);
      
        fetch(PREPARE_LOGIN_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },  
          body:userDataJson
        })
          .then((response) => {
            if (response.status === 200) {
              setOtpModalShow(true);
            } else {
              alert("Ошибка при подготовке к входу в систему. Повторите попытку.");
            }
          })
          .catch((error) => {
            alert("Произошла ошибка. Повторите попытку.");
          });
      };
      

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome Back</h1>
                <form action="post" className="form" onSubmit={loginUser}>
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="text">Username</label> 
                            <InputFieldForm type="text" name='username' onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm type="password" name='password'  onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
                        </section>
                    </div>
                    <div className="form__additionalFeatures">
                        
                        <a href="#"><span>Forgot password</span></a>
                    </div>
                    <div className="form__buttonsBlock">
                        <Button onClick={loginUser}>Sign in</Button>
                        <p>or</p>
                        <TransparentButton>Sign in with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Don't fave an account? <a href='/signUp'>Sign up here</a></span>
            </div>
            <OTPModal handleSubmitOtp={handleOTP} show={modalShow}/>
        </div>
    );

}

export default Login;
