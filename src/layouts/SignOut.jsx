import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
export default function SignOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button.Group>
                    
                    <Button primary onClick={signIn}>Giriş Yap</Button>
                    <Button.Or />
                    <Button positive>Kayıt Ol</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
