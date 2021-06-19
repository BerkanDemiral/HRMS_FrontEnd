import React from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from "react-router-dom"

export default function Categories() {
return(
        <div>
                <Menu pointing vertical size="large" >
                        <Menu.Item as={NavLink} to="/Candidates"  icon="users" name='İş Arayanlar '/>
                        <Menu.Item as={NavLink} to="/JobPostings"  icon="bullhorn" name='İş İlanları' />
                        <Menu.Item as={NavLink} to="/Employers"  icon="globe" name='İşverenler' />
                </Menu>
        </div>


)
}
