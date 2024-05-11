import React from 'react';
import '../../../css/components/header_content.css'

const HeaderContent = ({ username }) => {
    return (
        <div className="content_header_wrapper">
            <header className="header_content">
                <div className="header_logo">
                    <p>TASKY</p>
                </div>
                <div>
                    <div className="header_account_drop">
                        <div className="header_account">
                            <span className="icon">Signed as {username}</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderContent;