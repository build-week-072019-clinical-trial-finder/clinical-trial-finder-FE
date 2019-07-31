import React, { useState, useEffect } from "react"
import { connect } from 'react-redux';
import { fetch } from '../../store/actions/index';
import Title from "./Title"
import Condition from "./Condition"
import City from "./City"
import Country from "./Country"
import State from "./State"
import Summary from "./Summary"
import Phase from "./Phase"
import InverventionName from "./InterventionName"

import { Card, Header, Table } from 'semantic-ui-react'
import './cards.css'



const Cards = (props) => {
    

    useEffect(() => {
        props.fetch();
    }, [])

    console.log('props',props.trials);
    
    return(
        <div>
            {props.trials.map((item, id) => (
                
                
                <Card.Group centered>
                    <Card fluid color='red'>
                        <Title title={item['brief_title']} key={Math.random()} />
                        <Summary summary={item['brief_summary']} key={Math.random()} />
                        <Condition condition={item['condition']} key={Math.random()} />
                        <Phase phase={item['phase']} key={Math.random()} />
                        <InverventionName intervention={item['intervention_name']} key={Math.random()} />
                        <City city={item['city']} key={Math.random()} />
                        <State state={item['state']} key={Math.random()} />
                        <Country country={item['country']} key={Math.random()} />

                    </Card>
                </Card.Group>
                
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    trials: state.trials,
})

export default connect(mapStateToProps, { fetch })(Cards);