import React from "react";

const Button = ({ text }) => {

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
        <button style={styles} >
            {text}
        </button>
    )
}

export default Button;