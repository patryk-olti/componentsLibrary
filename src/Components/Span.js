import React from "react";

const Span = ({ children, fontSize, color }) => {

    const styles = {
        padding: `2px`,
        fontSize: `${fontSize}px`,
        color: `${color}`
    }

    return(
        <span style={styles} >
            { children }
        </span>
    )
}

export default Span;