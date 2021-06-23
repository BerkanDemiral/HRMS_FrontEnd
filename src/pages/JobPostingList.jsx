import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Categories from '../layouts/Categories'
import JobPostingService from '../services/JobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data))

    }, [])

    return (
        <div class="container">
        <Grid columns={2} divided>
            <GridRow>
                <GridColumn width={4}>
                    <Categories />
                </GridColumn>
                <GridColumn width={12}>
                    Tablo deneme
                </GridColumn>
            </GridRow>
        </Grid>

    </div>
    )
}
