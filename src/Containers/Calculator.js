import React, { useState } from "react";

import Container from "./Container";

import Span from "../Components/Span";
import Radio from "../Components/Radio";
import TextInput from "../Components/TextInput";
import NumberInput from '../Components/NumberInput';
import Select from "../Components/Select";
import Button from "../Components/Button";

const Debugger = ({ handleClick, nextId }) => {

    const getTotal = () => {
        if( localStorage.getItem("total") == 0){
            return 3000;
        }else return Number(JSON.parse(localStorage.getItem("total")));
    }

    const [ total, setTotal] = useState(getTotal());

    const totalChange = (option, value) => {
        if(option==`proceeds`) return setTotal(prev => prev + Number(value));
        if(option==`expense`) return setTotal(prev => prev - Number(value));
    }

    const [ option, setOption ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ select, setSelect ] = useState("dom");

    const [ firstNameError, setFirstNameError ] = useState(" ");
    const [ priceError, setPriceError ] = useState(" ");
 
    const optionsForSelect = [ "dom", "auto", "rozrywka", "praca", "praca dodatkowa" ];

    const objectTmp = {
        id: nextId,
        option,
        firstName,
        price,
        select
    }

    const validateObject = () => {
        let approve = true;
        setFirstNameError(" ");
        setPriceError(" ");

        if(option.length === ""){ approve = false; }
        if(firstName.length === 0){ 
            approve = false; 
            setFirstNameError('błędnie wpisane imię!');
        }
        if(price <= 0){ 
            approve = false; 
            setPriceError('wartość poniżej 0!');
        }

        if(approve){ 
            handleClick(objectTmp); 
            localStorage.removeItem('total');
            localStorage.setItem('total', JSON.stringify(total));
            totalChange(option,price);
            setOption("");
            setFirstName("");
            setPrice(0);
            setSelect("dom");
            setFirstNameError("");
            setPriceError("");

            console.log(objectTmp);
        }
    }

    return(
        <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" width="250" padding="5" border="2px solid black">

            <Container display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" width="330" padding="5" border="none">
                <Span fontSize={30}> {total}zł </Span>
            </Container>


            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" width="330" padding="5" border="none">
                <Container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" width="100" padding="2" border="none">
                    <Radio name="sex" value="proceeds" handleClick={setOption} option={option} />
                    <Span fontSize="20" >proceeds</Span>
                </Container>

                <Container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" width="100" padding="2" border="none">
                    <Radio name="sex" value="expense" handleClick={setOption} option={option} />
                    <Span fontSize="20" >expense</Span>
                </Container>
            </Container>

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="200" padding="2" border="none">
                <TextInput name="name" placeholder="name" value={firstName} handleChange={setFirstName}/>
                <Span fontSize="12" color='red' >{firstNameError}</Span>
            </Container>

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="200" padding="2" border="none">
                <NumberInput name="price" placeholder="price" value={price} handleChange={setPrice} />
                <Span fontSize="12" color='red' >{priceError}</Span>
            </Container>

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="200" padding="2" border="none">
                <Select options={optionsForSelect} value={select} handleChange={setSelect} />
                <Span fontSize="18" ></Span>
            </Container>

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="200" padding="2" border="none">
                <Button text="add" handleClick={validateObject} />
            </Container>

            <Container display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" width="200" padding="2" border="none">
                <Button text="clear storage" handleClick={() => localStorage.clear()} />
            </Container>

        </Container>
        
       
    )
}

export default Debugger;