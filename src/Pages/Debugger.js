import React from "react";

import Container from "../Containers/Container";

import Span from "../Components/Span";
import Radio from "../Components/Radio";
import TextInput from "../Components/TextInput";

const Debugger = () => {

    return(
        <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" width="300" padding="2" border="2px solid black">

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="5" border="none">
                <Radio name="sex" />
                <Span fontSize="20" >click me</Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="5" border="none">
                <Radio name="sex" />
                <Span fontSize="20" >click me</Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="5" border="none">
                <TextInput name="name" placeholder="name" />
                <Span fontSize="18" ></Span>
            </Container>

        </Container>
        
    )
}

export default Debugger;