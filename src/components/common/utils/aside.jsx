import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../../css/components/utils/aside.css"
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
                    <li><Link to="/team" style={location.pathname === "/team" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCog} style={iconStyle} /> Team</Link></li>
                    <li><Link to="/tasks" style={location.pathname === "/tasks" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faTasks} style={iconStyle} /> My tasks</Link></li>
                    <li><Link to="/settings" style={location.pathname === "/settings" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCog} style={iconStyle} /> Settings</Link></li>
                    <li><Link to="/coming" style={location.pathname === "/coming" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faInbox} style={iconStyle} /> Inbox</Link></li>
                    <li><Link to="/coming" style={location.pathname === "/coming" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faHome} style={iconStyle} /> Home</Link></li>
                </ul>
            </div>
            <div className="additional">
                <h1>Additional</h1>
                <ul className="aside-list-additional">
                    <li><Link to="/coming" style={location.pathname === "/coming" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faTrash} style={iconStyle} /> Trash</Link></li>
                    <li><Link to="/coming" style={location.pathname === "/coming" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faQuestionCircle} style={iconStyle} /> Help & Support</Link></li>
                    <li><Link to="/coming" style={location.pathname === "/coming" ? activeLinkStyle : linkStyle}><FontAwesomeIcon icon={faCalendar} style={iconStyle} /> Calendar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AsideMenu;