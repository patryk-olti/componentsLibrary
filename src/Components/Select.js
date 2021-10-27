import React from "react";

const Select = ({ options }) => {

    const optionsList = options.map( item => (
        <option value={item}> {item} </option>
    ))

    return(
        <select>
            {optionsList}
        </select>
    )
}

export default Select;