import React from 'react'
import { Menu, Dropdown, Image, Button, GridColumn } from 'semantic-ui-react'

export default function SignIn({ signOut }) {
    return (
        <div>

            <Menu.Item>
                <GridColumn>
                    <Button primary> İlan Ekle </Button>
                </GridColumn>
                <GridColumn>
                    <Image style={{ marginRight: "4.9 em" }} avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png" />
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
