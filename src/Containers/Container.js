import React from "react";

const Container = ({ children, display, flexDirection, justifyContent, padding, border }) => {

    const styles = {
        display: `${display}`,
        flexDirection: `${flexDirection}`,
        justifyContent: `${justifyContent}`,
        padding: `${padding}px`,
        border: `${border}`
    }

    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Container;