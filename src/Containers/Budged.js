import React from "react";

import SingleBudgedElement from "./SingleBudgedElement";

const Budged = ({ content }) => {

    const contentList = content.map( item => (
        <SingleBudgedElement key={item.id} data={item} />
    ))

    return(
        <div>
            {contentList}
        </div>
    )
}

export default Budged;