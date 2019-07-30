import React, { useState } from "react"
import Title from "./Title"

import { sampleData } from "../../dummyData"

const Cards = (props) => {
    const [cardData, setCardData] = useState(sampleData)

    console.log(cardData)
    return(
        <div>
            {cardData.map((item, id) => (
                    <Title title={item.title} key={id} />
                    
            ))}
        </div>
    )
}

export default Cards;