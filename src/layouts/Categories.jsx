import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
return(
        <div>
                <Menu pointing vertical size="large" >
                        <Menu.Item icon="users" name='İş Arayanlar'/>
                        <Menu.Item icon="bullhorn" name='İş İlanları' />
                        <Menu.Item icon="globe" name='İşverenler' />
                </Menu>
        </div>


)
}
