import React from "react";

import Container from "../Containers/Container";

import Span from "../Components/Span";
import Radio from "../Components/Radio";

const Debugger = () => {

    return(
        <Container display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="200" padding="0" border="2px solid black">

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="5" border="none">
                <Radio name="sex" />
                <Span fontSize="20" >click me</Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="5" border="none">
                <Radio name="sex" />
                <Span fontSize="20" >click me</Span>
            </Container>

        </Container>
        
    )
}

export default Debugger;