import React from 'react'
import CandidateList from '../pages/Candidate/CandidateList'
import EmployerList from '../pages/Employer/EmployerList'
import JobPositionList from '../pages/JobPosition/JobPositionList'
import ResumeList from '../pages/Resume/ResumeList'
import { Route } from 'react-router-dom';
import JobPostingList from '../pages/JobPosting/JobPostingList'
import Content from './Content'
import Navi from './Navi'
import { Container } from 'semantic-ui-react'
import JobPostingDetail from '../pages/JobPosting/JobPostingDetail'
import AddJobPosting from '../pages/JobPosting/AddJobPosting'

export default function Dashboard() {
    return (
        <div >
            <Navi />
            <Container className="main">
                <Route exact path="/candidates/" component={CandidateList} />
                <Route path="/candidates/:id" component={CandidateList} />
                <Route exact path="/employers" component={EmployerList} />
                <Route exact path="/jobPostings" component={JobPostingList} />
                <Route exact path="/addJobPosting" component={AddJobPosting} />
                <Route path="/jobPostings/:id" component={JobPostingDetail} />
                <Route exact path="/jobPositions" component={JobPositionList} />
                <Route exact path="/resumes" component={ResumeList} />
                <Route exact path="/" component={JobPostingList} />
            </Container>
            <Content />
        </div>
    )
}
