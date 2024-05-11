import classes from "./logotypeStyles.module.css"
import React  from 'react';
import { useNavigate } from "react-router-dom";

const Logotype = ()=>{

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className={classes.header_logo} onClick={handleClick}>
            <p>TASKY</p>
        </div>
    );
}



export default Logotype;
