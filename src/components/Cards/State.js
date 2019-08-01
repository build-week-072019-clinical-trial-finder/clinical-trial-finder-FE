import React from "react";

const State = (props) => {
    
    return (
        <h5>{props.state === 'null' ? '': props.state + ','}</h5>
    )
}

export default State;