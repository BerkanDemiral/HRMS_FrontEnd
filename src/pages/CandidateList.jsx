import React, { useState, useEffect } from 'react'
import CandidateService from '../services/CandidateService'
import { Link } from "react-router-dom";
import { Grid, GridColumn, GridRow, Icon, Menu, Table } from 'semantic-ui-react'
import Categories from '../layouts/Categories';

export default function CandidateList() {


    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))

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
                                    <Table.HeaderCell>İş arayan adı</Table.HeaderCell>
                                    <Table.HeaderCell>İş arayan soyadı</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {
                                    candidates.map((candidate) => (
                                        <Table.Row key={candidate.id}>
                                            <Table.Cell><Link to={`/candidates/${candidate.id}`}>{candidate.firstName}</Link></Table.Cell>
                                            <Table.Cell>{candidate.lastName}</Table.Cell>
                                        </Table.Row>
                                    ))
                                }


                            </Table.Body>

                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='3'>
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
