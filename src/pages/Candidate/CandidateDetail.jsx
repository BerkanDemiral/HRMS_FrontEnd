import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import CandidateService from '../../services/CandidateService'

export default function CandidateDetail() {
    
    let {id} = useParams()

    const [candidates, setCandidates] = useState({})
    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.(id).then(result => setCandidates(result.data.data))

    }, [])

    return (
        
        <div>
            İş arayan detayı
        </div>
    )
}
