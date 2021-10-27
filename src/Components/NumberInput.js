import React from "react";

const TextInput = ({ name, placeholder }) => {

    return(
        <input type="number" name={name} placeholder={placeholder} />
    )
}

export default TextInput;