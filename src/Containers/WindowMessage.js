import React from 'react';

import Span from '../Components/Span';
import Button from '../Components/Button';

const WindowMessage = () => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        padding: '10px',
        border: '2px solid black',
        borderRadius: '5px'
    }

    return(
        <div style={styles}>
            <Span> Actual user: @olti123 </Span>
            <Button text="change user" />
        </div>
    )
}

export default WindowMessage;