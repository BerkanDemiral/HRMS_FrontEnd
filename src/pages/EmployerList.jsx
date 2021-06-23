import React, { useState, useEffect } from 'react'
import EmployerService from '../services/EmployerService'

export default function EmployerList() {
    const [emplpyers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))

    }, [])

    return (
        <div>
            Employer List
        </div>
    )
}
