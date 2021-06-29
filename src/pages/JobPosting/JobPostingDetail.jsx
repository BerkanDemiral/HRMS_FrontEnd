import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Card } from 'semantic-ui-react'
import JobPostingService from '../../services/JobPostingService'

export default function JobPostingDetail() {

    let { id } = useParams()

    const [jobPosting, setJobPosting] = useState({})

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))

    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>

                    <Card.Content>
                        <Card.Header>{jobPosting.jobPosition.position}</Card.Header>
                        <Card.Description>
                            İş açıklaması <strong>{jobPosting.jobPosition.jobDescribe}</strong>
                        </Card.Description>
                        <Card.Description>
                            Maaş aralığı:  <strong>{jobPosting.minSalary}</strong> "-" <strong>{jobPosting.maxSalary}</strong>
                        </Card.Description>
                        <Card.Description>
                            Şirket Adı: <strong>{jobPosting.employer.companyName}</strong>
                        </Card.Description>
                        <Card.Description>
                            Şehir: <strong>{jobPosting.city.name}</strong>
                        </Card.Description>
                    </Card.Content>



                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button class="center" basic color='green'>
                                Başvuru Yap
                            </Button>

                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
