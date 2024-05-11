import Footer from "../components/common/footers/footer";
import React from 'react';
import HeaderMain from "../components/common/headers/header";
import '../css/pages/main_page.css'
import LandingPageFirst from "../components/landing/landingPageContent_1";
import LandingPageSecond from "../components/landing/landingPageContent_2";
import LandingPageThird from "../components/landing/landingPageContent_3";

const MainPage = () =>{
    const scrollDown = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };
    const pagesContent = ([
        {id:1,title:"Manage tasks by commands",topTitle:"Task management",description: "Before starting classes, it is necessary to determine your level of preparedness for such a difficult path of cognition and awareness. To do this, you should take a small test, which will determine your level. Are you ready to start your journey? ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/2.png"},
        {id:2,title:"Control deadlines and sprints",topTitle:"Time management",description: "Judging by your level, we will determine thefor such a difficult path of cognition and awareness. To do this, you should take a small test most suitable course of classes that will help you start the path of self-knowledge and awareness ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/background_login.png"},
        {id:3,title:"Gain profit with us, rule the world with us!",topTitle:"Enjoy the journey",description: "it's time to start real classes and start for such a difficult path of cognition and awareness. To do this, you should take a small test your journey to the halls of the mind. Good luck for such a difficult path of cognition and awareness ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/background_login.jng"}
    ]);

    return (
        <div className="main-wrapper">
            <div className="first_page">
                <HeaderMain />
                <div className="main__firstPage">
                    <div className="firstPage__title">
                        <div className="firstPage_title__header">
                            <span className="title__header_rect">Tasky - your best helper</span>
                        </div>
                        <div className="firstPage_title_descriprion">
                            <h1>Manage your tasks <br /> with the new era task tracker</h1>
                        </div>
                        <div className="firstPage_title_scrollButton">
                            <button onClick={scrollDown}><span className="title__scrollButton">scroll down</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_landing">
                <LandingPageFirst page={pagesContent[0]}/>
            </div>
            <div className="third_landing">
                <LandingPageSecond page={pagesContent[1]}/>
            </div>
            <div className="fourth_landing">
                <LandingPageThird page ={pagesContent[2]}/>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )   

}

export default MainPage;