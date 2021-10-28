import React from "react";

import Span from "../Components/Span";

const SingleBudgedElement = ({ data }) => {

    const colorBorder = data.select === `expense` ? 'red' : 'black';

    const styles = {
        padding: `2px`,
        width: `350px`,
        border: `1px solid ${colorBorder}`
    }

    return(
        <div style={styles} >
            <Span fontSize={20}> name: { data.firstName } </Span>
            <Span fontSize={16}> price: { data.price }zł</Span>
            <Span> purpose: { data.select }</Span>
        </div>
    )
}

export default SingleBudgedElement;