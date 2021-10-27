import React from "react";

const Container = ({ children, display, flexDirection, justifyContent, alignItems, width, padding, border }) => {

    const styles = {
        display: `${display}`,
        flexDirection: `${flexDirection}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
        width: `${width}px`,
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