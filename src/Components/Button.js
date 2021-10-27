import React from "react";

const Button = ({ text, handleClick }) => {

    const styles = {
        padding: '5px 15px',
        fontSize: '16px',
        letterSpacing: '2px',
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
        cursor: 'pointer'
    }

    return(
        <button style={styles} onClick={() => handleClick({id:2, name:"lololo"})}>
            {text}
        </button>
    )
}

export default Button;