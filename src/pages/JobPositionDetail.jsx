import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'

import JobPositionService from '../services/JobPositionService'

export default function JobPositionDetail() {

    let {id} = useParams()

    const [jobPositions, setJobPositions] = useState({})
    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

    }, [])


    return (
        <div>
            
        </div>
    )
}
