import {Component, useContext, useEffect, useState} from 'react';
import React from 'react';
import '../../css/components/header.css'
import Logotype from '../../ui/logotype/logotype';
import {AuthContext} from "../../App";
const HeaderMain = () => {
    return (
        <div className="headerWrapper">
            <header className="header">
                <div className="header_logo">
                    <p>TASKY</p>
                </div>
                <div className="header_options_list">
                    <ul className="options_list">
                        <a href='/get_into'><li className="options_list_item">Get into</li></a>
                        <a href='/errorPage'><li className="options_list_item">About us</li></a>
                        <a href='/errorPage'><li className="options_list_item">Blog</li></a>
                    </ul>
                </div>
                <div>
                <div className="header_account_drop">
                    <div className="header_account">
                        <span className="icon">SIGN IN</span>
                    </div>
                </div>
                </div>
            </header>

            <ul className="header__navigation__list_hidden">
                <a href="/meditations"><li>Get into</li></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Blog</li></a>
                <span className="close_button">X</span>
            </ul>
        </div>
    );

}
export default HeaderMain;