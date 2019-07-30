import React, { useState, useEffect } from "react"
import { connect } from 'react-redux';
import { fetch } from '../../store/actions/index';
import Title from "./Title"

//import { sampleData } from "../../dummyData"

const Cards = (props) => {
    //const [cardData, setCardData] = useState([])

    useEffect(() => {
        props.fetch();
    }, [])

    console.log(props.trials);
    
    return(
        <div>
            {props.trials.map((item, id) => (
                    <Title title={item['brief_title']} key={id} />
                    
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    trials: state.trials,
})

export default connect(mapStateToProps, { fetch })(Cards);