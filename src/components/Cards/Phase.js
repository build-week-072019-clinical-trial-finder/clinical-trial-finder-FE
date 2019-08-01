import React from "react";

const Phase = (props) => {
    
    return (
        <h4>Phase: {props.phase === 'null' ? 'N/A': props.phase}</h4>
    )
}

export default Phase;