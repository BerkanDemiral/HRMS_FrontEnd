import React from 'react'
import { Menu, Dropdown, Image, Button, GridColumn } from 'semantic-ui-react'
import {NavLink} from "react-router-dom"


export default function SignIn({ signOut }) {
    return (
        <div>

            <Menu.Item>
                <GridColumn>
                    <Button primary as={NavLink} to="/myJobPostings" > Başvurularım </Button>
                </GridColumn>
                <GridColumn>
                    <Image style={{ marginRight: "4.9 em" }} avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQGbjbfZNw5jNQ/profile-displayphoto-shrink_200_200/0/1619296393861?e=1628121600&v=beta&t=i8kqO-j87ydMHnm-PmcSnCbYe5wlj9AehcmIJjId3c4" />
                    <Dropdown pointing="top-left" text="Berkan">
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info" />
                            <Dropdown.Item text="İş İlanlarım" icon="file alternate outline" />
                            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                        </Dropdown.Menu>
                    </Dropdown>
                    </GridColumn>
            </Menu.Item>
           
        </div>
    )
}
