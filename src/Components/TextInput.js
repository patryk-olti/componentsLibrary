import React from "react";

const TextInput = ({ name, placeholder, value, handleChange }) => {

    const handleOnChange = (e) => handleChange(e.target.value);

    return(
        <input 
            type="text" 
            name={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
        />
    )
}

export default TextInput;