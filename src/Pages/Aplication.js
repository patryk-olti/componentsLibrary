import React, { useState } from "react";

import Calculator from '../Containers/Calculator';
import Budged from '../Containers/Budged';

const Aplication = () => {

    const [ budgedList, setBudgetList ] = useState([{id: 1, name: 'lol'}]);

    const addToBudged = (value) => {
        setBudgetList( prev => [...prev, value] )
    }

    return(
        <>
            <Calculator handleClick={addToBudged}/>
            <Budged content={budgedList} />
        </>
    )
}

export default Aplication;