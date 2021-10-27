import React from "react";

const Budged = ({ content }) => {

    const contentList = content.map( item => (
        <div key={item.id} >
            {item.name}
        </div>
    ))

    return(
        <div>
            {contentList}
        </div>
    )
}

export default Budged;