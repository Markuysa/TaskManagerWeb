import React from "react";
import classes from "./BlackButton_styles.module.css"
import { useState } from "react";

const BlackButton = ({ children, onClick, ...props  }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = (e) => {
        setIsLoading(true);
        onClick(e);
        setIsLoading(false);
    }
    return (
      <button
        className={classes.button}
        type="submit"
        {...props}
        disabled={isLoading}
        onClick={handleClick}
      >
        {isLoading ? "Идет загрузка..." : children}
      </button>
    );
}

export default BlackButton;
