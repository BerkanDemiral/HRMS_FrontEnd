import React, { useState, useEffect } from 'react'
import ResumeService from '../services/ResumeService'


export default function ResumeList() {

    const [resumes, setResumes] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getResume().then(result => setResumes(result.data.data))

    }, [])

    return (
        <div>
            Cv'ler
        </div>
    )
}
