import React from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from "react-router-dom"

export default function Categories() {
return(
        <div>
                <Menu pointing vertical size="large" >
                        <Menu.Item as={NavLink} to="/candidates"  icon="users" name='İş Arayanlar '/>
                        <Menu.Item as={NavLink} to="/jobPosting"  icon="bullhorn" name='İş İlanları' />
                        <Menu.Item as={NavLink} to="/employers"  icon="globe" name='İşverenler' />
                </Menu>
        </div>


)
}
