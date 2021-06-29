import React, { useState, useEffect } from 'react'
import { Grid, GridColumn, GridRow, Table } from 'semantic-ui-react'
import Categories from '../../layouts/Categories'
import JobPositionService from '../../services/JobPositionService'


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
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>id</Table.HeaderCell>
                                    <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    jobPositions.map(jobPosition => (
                                        <Table.Row key={jobPosition.id}>
                                            <Table.Cell>{jobPosition.id}</Table.Cell>
                                            <Table.Cell>{jobPosition.jobName}</Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div >
    )
}
