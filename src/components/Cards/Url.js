import React from "react";
//import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Url = (props) => {
    
    return (
        <Button size='small'><a href={props.url} target="_blank" rel="noopener noreferrer">More Info</a>
        </Button>
        // <h4>More Info {props.url === 'null' ? 'N/A': props.url}</h4>
    )
}

export default Url;