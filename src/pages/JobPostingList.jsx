import React, { useState, useEffect } from 'react'
import JobPostingService from '../services/JobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data))

    }, [])

    return (
        <div>
            İş ilanları
        </div>
    )
}
