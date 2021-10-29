import React from "react";

const Radio = ({ name, value, handleClick, option }) => {

    return(
        <input 
            type="radio" 
            name={name}
            checked={ option==value ? true : false }
            onChange={() => handleClick(value)}
            />
    )
}

export default Radio;