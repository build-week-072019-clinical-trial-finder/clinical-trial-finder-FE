import React from "react";

const Probability = (props) => {
    
    return (
        <h4>Probability: {props.probability === 'null' ? 'N/A': props.probability}</h4>
    )
}

export default Probability;