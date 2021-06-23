import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Categories from '../layouts/Categories'
import JobPositionService from '../services/JobPositionService'


export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])
    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

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
