import React, { useState } from 'react'
import { Container, Menu, Input, Segment } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthanticated, setisAuthanticated] = useState(true)

    function handleSignOut(params) {
        setisAuthanticated(false)
    }
    function handleSignIn(params) {
        setisAuthanticated(true)
    }

    return (
        <Container>
            <div>
                <Segment inverted>
                    <Menu inverted pointing fixed="top" >
                        <Container>
                            <Menu.Item name="Anasayfa"/>
                            <Menu.Item name="Kariyer Merkezi" />
                            <Menu.Item>
                                <Input icon='search' placeholder='Ara' />
                            </Menu.Item>


                            <Menu.Menu position="right">
                                {isAuthanticated ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}
                            </Menu.Menu>
                        </Container>

                    </Menu>
                </Segment>
            </div>
        </Container>
    )
}
