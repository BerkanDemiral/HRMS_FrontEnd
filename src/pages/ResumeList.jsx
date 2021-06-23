import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Categories from '../layouts/Categories'
import ResumeService from '../services/ResumeService'


export default function ResumeList() {

    const [resumes, setResumes] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getResume().then(result => setResumes(result.data.data))

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
