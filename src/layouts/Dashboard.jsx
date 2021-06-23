import React from 'react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobPositionDetail from '../pages/JobPositionDetail'
import JobPositionList from '../pages/JobPositionList'
import ResumeList from '../pages/ResumeList'
import Login from './Login'
import { Route } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <Route exact path="/candidate" component={CandidateList} />
            <Route exact path="/employer" component={EmployerList} />
            <Route exact path="/jobPosting" component={JobPositionDetail} />
            <Route exact path="/jobPosition" component={JobPositionList} />
            <Route exact path="/resume" component={ResumeList} />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
        </div>
    )
}
