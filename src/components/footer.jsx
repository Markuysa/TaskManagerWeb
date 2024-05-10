

import React, { Component }  from 'react';
import '../css/footer.css'
import Logotype from '../ui/Logotype/Logotype';
const Footer = ()=>{

    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content__copyright">
                    <Logotype />
                    <span className="copyright__title"><p>Manage your team tasks with the best task tracker!</p></span>
                    <span className="copyright__text"><p>Copyright 2024 Tasky, Inc. Terms & Privacy</p></span>

                </div>
                <div className="footer-content__more">
                    <h2>More on The Blog</h2>
                    <ul>
                        <a href=""><li>About Tasky</li></a>
                        <a href=""><li>Contributors & Writers</li></a>
                        <a href=""><li>Write For Us</li></a>
                        <a href=""><li>Contact Us</li></a>
                        <a href=""><li>Pricing</li></a>
                    </ul>

                </div>
                <div className="footer-content__links">
                    <h2>More on Tasky.io</h2>
                    <ul>
                        <a href=""><li>The Team</li></a>
                        <a href=""><li>Jobs</li></a>
                        <a href=""><li>Press</li></a>
                    </ul>


                </div>

            </div>


        </footer>



    );



}

export default Footer;