import React, { useStete, useEffect } from "react"
import axios from "axios"
import Title from "./DashboardComponent/Title"
import { sampleData } from "../dummyData"

const Dashboard = () => {
    const [info, setInfo] = useStete([])
    const [title, setTitle] = useStete(sampleData)

    
    return(
        <div>
            <h1>Dummy Data</h1>
            
        </div>
        
    )
}

export default Dashboard;