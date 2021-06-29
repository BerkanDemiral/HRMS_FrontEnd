import React, { useState } from 'react'
import { Container, Menu, Input, Segment } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router"


export default function Navi() {

    const [isAuthanticated, setisAuthanticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setisAuthanticated(false)
        history.push("/")
    }
    function handleSignIn(params) {
        setisAuthanticated(true)
       
    }

    return (
        <Container>
            <div>


                <Menu style={{ background: "#ffe066" }} pointing fixed="top" >
                    <Container>
                        <Menu.Item as={NavLink} to="/" style={{ fontFamily: "Tahoma" }} name="Anasayfa" />
                        <Menu.Item icon="search" as={NavLink} to="/jobPosting" style={{ fontFamily: "Tahoma" }} name="İş ilanları" />
                        <Menu.Menu position="right">
                            {isAuthanticated ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}
                        </Menu.Menu>
                    </Container>

                </Menu>

            </div>
        </Container>
    )
}
