import React from "react";

const Select = ({ options, value, handleChange }) => {

    const optionsList = options.map( item => (
        <option key={item} value={item}> {item} </option>
    ))

    const handleOnChange = (e) => handleChange(e.target.value);

    return(
        <select 
            value={value}
            onChange={handleOnChange}
            >
            {optionsList}
        </select>
    )
}

export default Select;