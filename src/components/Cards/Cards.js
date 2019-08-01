import React from "react"
import Title from "./Title"
import Condition from "./Condition"
import City from "./City"
import Country from "./Country"
import State from "./State"
import Summary from "./Summary"
import Phase from "./Phase"
import InverventionName from "./InterventionName"

import { Card, Button } from 'semantic-ui-react'
import './cards.css'

const Cards = (props) => {
    //console.log('props',props.trials);
    
    return(
        <div>
            <h1>Clinical Trial</h1>
            {props.trials.map((item, id) => (
                <Card.Group centered>
                    <Card fluid>
                        <Title title={item['official_title']} key={Math.random()} />
                        <Summary summary={item['brief_summary']} key={Math.random()} />
                    <div className="flex-box1">
                        <Condition condition={item['condition']} key={Math.random()} />
                        <Phase phase={item['phase']} key={Math.random()} />
                        <InverventionName intervention={item['intervention_name']} key={Math.random()} />
                    </div>
                        <Card.Content>   
                            <div className="flex-box2">
                                <h5>Location:</h5>
                                <div className="box">
                                    <City city={item['city']} key={Math.random()} />
                                </div>
                                <div className="box">
                                    <State state={item['state']} key={Math.random()} />
                                </div>
                                <div className="box">
                                    <Country country={item['country']} key={Math.random()} />
                                </div>
                            </div>
                        </Card.Content>
                        <Card.Content>
                            <div className="flex-box2">
                                {props.addTrial ? 
                                    <Button 
                                        icon='find' 
                                        content='Save to Watchlist' 
                                        style={{background: '#b80c09', color: '#ffffff'}} 
                                        onClick={(event) => props.addTrial(event, item)}/>
                                : <Button 
                                    icon='trash alternate outline' 
                                    content='Remove from Watchlist' 
                                    style={{background: '#222e50', color: '#ffffff'}} 
                                    onClick={(event) => props.removeTrial(event, item)}/>}
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
                
            ))}
        </div>
    )
}

export default Cards;
