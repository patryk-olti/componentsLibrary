import React from "react";

const Radio = ({ name, value, handleClick, option }) => {

    return(
        <input 
            type="radio" 
            name={name}
            checked={ option==value ? true : false }
            onClick={() => handleClick(value)}
            />
    )
}

export default Radio;