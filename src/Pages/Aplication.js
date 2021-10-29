import React, { useState } from "react";

import Calculator from '../Containers/Calculator';
import Budged from '../Containers/Budged';
import WindowMessage from "../Containers/WindowMessage";

const Aplication = () => {

    const [ budgedList, setBudgetList ] = useState([]);

    const addToBudged = (value) => {
        setBudgetList( prev => [...prev, value] )
    }

    let nextId = budgedList.length;

    return(
        <>
            <Calculator handleClick={addToBudged} nextId={nextId} />
            <Budged content={budgedList} />
            <WindowMessage />
        </>
    )
}

export default Aplication;