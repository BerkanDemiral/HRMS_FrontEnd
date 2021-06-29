import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import JobPostingService from '../../services/JobPostingService'

export default function MyJobPostings() {

    let { id } = useParams()

    const [jobPostings, setJobPostings] = useState({})
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByJobPostingId(id).then(result => setJobPostings(result.data.data))

    }, [])

    return (
        <div>
            deneme
        </div>
    )
}
