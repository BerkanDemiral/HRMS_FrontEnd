import React from 'react'
import {GridColumn, GridRow, Grid } from 'semantic-ui-react'
import Categories from './Categories'
import JobPostingList from "../pages/JobPostingList"
import CandidateList from "../pages/CandidateList"
import EmployerList from "../pages/EmployerList"
import { Route } from 'react-router';


export default function Dashboard() {
    return (
        <div>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/JobPostings" component={JobPostingList} />
                        <Route exact path="/Candidates" component={CandidateList} />
                        <Route exact path="/Employers" component={EmployerList} />
                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
