import React from "react";

const Country = (props) => {
    
    return (
        <h5>{props.country === 'Missing' ? 'Unknown' : props.country}</h5>
    )
}

export default Country;