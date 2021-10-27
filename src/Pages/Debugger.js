import React from "react";

import Container from "../Containers/Container";
import Span from "../Components/Span";

const Debugger = () => {

    return(
        <Container display="flex" flexDirection="row" justifyContent="space-between" width="400" padding="5" border="2px solid black">
            <Span fontSize="20" >click me</Span>
            <Span>click me</Span>
            <Span>click me</Span>
        </Container>
    )
}

export default Debugger;