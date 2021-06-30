import React, { useState, useEffect } from 'react'
import { Button, Grid, GridColumn, GridRow, Icon, Menu, Table } from 'semantic-ui-react'
import Categories from '../../layouts/Categories';
import JobPostingService from '../../services/JobPostingService';
import {NavLink, Link } from "react-router-dom";

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data))

    }, [])

    return (
        <div class="container">
            <Grid columns={2}>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>İş pozisyonu</Table.HeaderCell>
                                    <Table.HeaderCell>Firma adı</Table.HeaderCell>
                                    <Table.HeaderCell>Açık pozisyon adedi</Table.HeaderCell>
                                    <Table.HeaderCell>Yayın tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
                                    <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                                    <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {
                                    jobPostings.map((jobPosting) => (
                                        <Table.Row key={jobPosting.id}>
                                            <Table.Cell><Link to={`/jobPostings/${jobPosting.id}`}>{jobPosting.jobPosition.position}</Link></Table.Cell>
                                            <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                            <Table.Cell>{jobPosting.openPositionNumber}</Table.Cell>
                                            <Table.Cell>{jobPosting.createdDate}</Table.Cell>
                                            <Table.Cell>{jobPosting.closedDate}</Table.Cell>
                                            <Table.Cell>{jobPosting.workingTime.workingTime}</Table.Cell>
                                            <Table.Cell>{jobPosting.workingType.workingType}</Table.Cell>
                                            <Table.Cell><Button> Başvur </Button></Table.Cell>
                                        </Table.Row>
                                    ))
                                }


                            </Table.Body>
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='8'>
                                        <Menu floated='right' pagination>
                                            <Menu.Item as='a' icon>
                                                <Icon name='chevron left' />
                                            </Menu.Item>
                                            <Menu.Item as='a'>1</Menu.Item>
                                            <Menu.Item as='a'>2</Menu.Item>
                                            <Menu.Item as='a'>3</Menu.Item>
                                            <Menu.Item as='a'>4</Menu.Item>
                                            <Menu.Item as='a' icon>
                                                <Icon name='chevron right' />
                                            </Menu.Item>
                                            
                                        </Menu>
                                        <Button
                                            floated='left'
                                            icon
                                            labelPosition='left'
                                            primary
                                            size='small'
                                            as={NavLink} to="/addJobPosting"
                                        >
                                            <Icon name='user' /> İş ilanı Ekle
                                        </Button>
                                    </Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell colSpan='4'>
                                    
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
