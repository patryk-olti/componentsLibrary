import React from "react";

const TextInput = ({ name, placeholder, value, handleChange }) => {

    const handleOnChange = (e) => handleChange(e.target.value);

    return(
        <input 
            type="number" 
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={handleOnChange}
        />
    )
}

export default TextInput;