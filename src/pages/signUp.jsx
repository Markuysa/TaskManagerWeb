import '../css/signUp.css'
import Button from '../ui/Blackbutton/BlackButton';
import InputField from '../ui/InputField/InputFiels';
import InputFieldForm from '../ui/InputFieldForm/InputFieldForm';
import Logotype from '../ui/Logotype/Logotype';
import TransparentButton from '../ui/transparentButton/TransparentButton';
import QRModal from '../components/qrModal';
import React, { Component, useState }  from 'react';
import BlackButton from '../ui/Blackbutton/BlackButton';
const SignUp = () =>{
    const SIGNUP = "http://localhost:8080/auth/sign_up";

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
                        <BlackButton onClick={signUp}>Register</BlackButton>
                        <p>or</p>
                        <TransparentButton>Sign up with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Already have an account? <a href='/login'>Sign in here</a></span>
            </div>
            <QRModal show={showQR} onHide={(e) => {}} onSubmit={(e) => {}} qrCodeData={qrCodeData}/>
        </div>
        

    );

}

export default SignUp;
