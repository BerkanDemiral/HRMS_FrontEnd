import React from 'react'
import {GridColumn, GridRow, Grid } from 'semantic-ui-react'
import Categories from './Categories'
import JobPostingList from "../pages/JobPostingList"
import CandidateList from "../pages/CandidateList"
import EmployerList from "../pages/EmployerList"
import { Route } from 'react-router';
import Login from './Login'
import Content from './Content'


export default function Dashboard() {
    return (
        <div>
            <Login/>
        </div>
    )
}
