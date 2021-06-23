import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import ResumeService from '../services/ResumeService'

export default function ResumeDetail() {

    let { id } = useParams()

    const [resumes, setResumes] = useState({})
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.(id).then(result => setResumes(result.data.data))

    }, [])

    return (
        <div>
            
        </div>
    )
}
