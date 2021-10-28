import React from "react";

import Span from "../Components/Span";

const SingleBudgedElement = ({ data }) => {

    const colorBorder = `${data.option}` === `expense` ? 'red' : 'green';

    const styles = {
        displat:'flex',
        justifyContent: 'space-between',
        padding: `2px`,
        width: `350px`,
        color: `${colorBorder}`,
        span: {
            display: 'block'
        }
    }

    return(
        <div style={styles} >
            <Span fontSize={20} style={styles.span}> { data.firstName } </Span>
            <Span fontSize={16} style={styles.span}> { data.price }zł</Span>
            <Span style={styles.span}> { data.select }</Span>
        </div>
    )
}

export default SingleBudgedElement;