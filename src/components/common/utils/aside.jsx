import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../../css/components/aside.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInbox, faTasks, faCog, faTrash, faCalendar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {color} from "framer-motion";

const AsideMenu = () => {
    const iconStyle = { color: 'black' };
    const linkStyle = { color: 'black' };
    const activeLinkStyle = {
        color: 'blue',

    };

    const location = useLocation();

    return (
        <div className="aside">
            <div className="general">
                <h1>General</h1>
                <ul className="aside-list-general">
                    <li><Link to="/commands" style={location.pathname === "/commands" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCog} style={iconStyle} /> Commands</Link></li>
                    <li><Link to="/tasks" style={location.pathname === "/tasks" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faTasks} style={iconStyle} /> My tasks</Link></li>
                    <li><Link to="/settings" style={location.pathname === "/settings" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCog} style={iconStyle} /> Settings</Link></li>
                    <li><Link to="/inbox" style={location.pathname === "/inbox" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faInbox} style={iconStyle} /> Inbox</Link></li>
                    <li><Link to="/home" style={location.pathname === "/home" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faHome} style={iconStyle} /> Home</Link></li>
                </ul>
            </div>
            <div className="additional">
                <h1>Additional</h1>
                <ul className="aside-list-additional">
                    <li><Link to="/trash" style={location.pathname === "/trash" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faTrash} style={iconStyle} /> Trash</Link></li>
                    <li><Link to="/help" style={location.pathname === "/help" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faQuestionCircle} style={iconStyle} /> Help & Support</Link></li>
                    <li><Link to="/calendar" style={location.pathname === "/calendar" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCalendar} style={iconStyle} /> Calendar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AsideMenu;