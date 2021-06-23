import React, { useState, useEffect } from 'react'
import JobPositionService from '../services/JobPositionService'


export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])
    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

    }, [])

    return (
        <div>
            
        </div>
    )
}
