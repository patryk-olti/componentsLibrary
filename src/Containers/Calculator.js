import React, { useState } from "react";

import Container from "./Container";

import Span from "../Components/Span";
import Radio from "../Components/Radio";
import TextInput from "../Components/TextInput";
import NumberInput from '../Components/NumberInput';
import Select from "../Components/Select";
import Button from "../Components/Button";

const Debugger = ({ handleClick, nextId }) => {

    const [ option, setOption ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ select, setSelect ] = useState("dom");
 
    const optionsForSelect = [ "dom", "auto", "rozrywka" ];

    const objectTmp = {
        id: nextId,
        option,
        firstName,
        price,
        select
    }

    const validateObject = () => {
        let approve = true;
        if(option.length === ""){ approve = false; }
        if(firstName.length === 0){ approve = false; }
        if(price <= 0){ approve = false; }

        if(approve){ 
            handleClick(objectTmp); 
            setOption("");
            setFirstName("");
            setPrice(0);
            setSelect("dom");

            console.log(objectTmp);
        }
    }

    return(
        <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" width="350" padding="5" border="2px solid black">

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" width="330" padding="5" border="none">
                <Container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" width="100" padding="2" border="none">
                    <Radio name="sex" value="proceeds" handleClick={setOption} />
                    <Span fontSize="20" >proceeds</Span>
                </Container>

                <Container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" width="100" padding="2" border="none">
                    <Radio name="sex" value="expense" handleClick={setOption} />
                    <Span fontSize="20" >expense</Span>
                </Container>
                <Span fontSize="20" ></Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="2" border="none">
                <TextInput name="name" placeholder="name" value={firstName} handleChange={setFirstName}/>
                <Span fontSize="18" ></Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="2" border="none">
                <NumberInput name="price" placeholder="price" value={price} handleChange={setPrice} />
                <Span fontSize="18" ></Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="2" border="none">
                <Select options={optionsForSelect} value={select} handleChange={setSelect} />
                <Span fontSize="18" ></Span>
            </Container>

            <Container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100" padding="2" border="none">
                <Button text="add" handleClick={validateObject} />
            </Container>

        </Container>
        
       
    )
}

export default Debugger;