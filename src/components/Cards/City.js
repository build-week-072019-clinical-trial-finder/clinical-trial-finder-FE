import React from "react";

const City = (props) => {
    
    return (
        <h5>{props.city === 'Missing' ? 'Unknown' : props.city},</h5>
    )
}

export default City;