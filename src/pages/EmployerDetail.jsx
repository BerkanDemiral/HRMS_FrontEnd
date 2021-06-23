import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import EmployerService from '../services/EmployerService'

export default function EmployerDetail() {

    let {id} = useParams()

    const [employers, setEmployers] = useState({})
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.(id).then(result => setEmployers(result.data.data))

    }, [])

    return (
        <div>
            
        </div>
    )
}
