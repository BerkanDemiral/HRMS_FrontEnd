import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {NavLink} from "react-router-dom"


export default function SignOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button.Group>
                    
                    <Button as={NavLink} to="/login" >Giriş Yap</Button>
                    <Button.Or />
                    <Button positive>Kayıt Ol</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
