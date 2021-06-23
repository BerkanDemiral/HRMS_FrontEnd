import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Categories from '../layouts/Categories'
import EmployerService from '../services/EmployerService'

export default function EmployerList() {
    const [emplpyers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))

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
