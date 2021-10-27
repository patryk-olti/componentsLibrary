import React from "react";

const Radio = ({ name, value, handleClick }) => {

    return(
        <input 
            type="radio" 
            name={name}
            onClick={() => handleClick(value)}
            />
    )
}

export default Radio;