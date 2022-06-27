import React from 'react';

function Car (props) {
    return (  
        <>
            {`Model : ${props.model}, Provider : ${props.provider}, Color : ${props.color}`}
        </>
    );
}

export default Car ;