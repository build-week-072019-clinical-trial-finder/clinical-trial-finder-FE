import React, { useStete, useEffect } from "react"
import axios from "axios"
import Cards from "../components/Cards/Cards"


const Dashboard = () => {
    

    return(
        <div>
            <h1>Data</h1>
            <Cards />
        </div>
        
    )
}

export default Dashboard;