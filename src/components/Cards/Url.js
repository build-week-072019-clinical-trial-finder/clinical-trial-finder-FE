import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Url = (props) => {
    
    return (
        <Link to={props.url === 'null' ? 'N/A': props.url}><Button size='small'>More Info</Button></Link>
        
        // <h4>More Info {props.url === 'null' ? 'N/A': props.url}</h4>
    )
}

export default Url;