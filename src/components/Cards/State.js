import React from "react";

const State = (props) => {
    
    return (
        <h5>{props.state === 'Missing' ? '': props.state + ','}</h5>
    )
}

export default State;