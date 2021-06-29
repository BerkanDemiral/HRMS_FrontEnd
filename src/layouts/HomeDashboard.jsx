import React from 'react'
import Content from './Content'
import { Route } from 'react-router-dom';
import Login2 from './Login2';
import RegisterForNormalUser from './RegisterForNormalUser';
import RegisterForEmployer from './RegisterForEmployer';
import Dashboard from './Dashboard';
import Navi from './Navi';

export default function HomeDashboard() {
    return (
        
        <div >
            <Navi/>
            <Route exact path="/login" component={Login2} />
            <Route exact path="/registerUser" component={RegisterForNormalUser} />
            <Route exact path="/registerEmployer" component={RegisterForEmployer} />
            <Route exact path="/candidates/" component={Dashboard} />
            <Route path="/candidates/:id" component={Dashboard} />
            <Route exact path="/employers" component={Dashboard} />
            <Route exact path="/jobPostings" component={Dashboard} />
            <Route path="/jobPostings/:id" component={Dashboard} />
            <Route exact path="/jobPositions" component={Dashboard} />
            <Route exact path="/resumes" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />
            
        </div>
    )
}
