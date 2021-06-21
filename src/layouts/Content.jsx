import React from "react";
import {
    Segment,
    Container,
    Grid,
    List,
    Header,
    Divider,
    Image,
    Card,
    Button,
    Icon,
    Form,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
export default function Content() {
    return (
       
        <>
            <Segment
                inverted
                vertical
                style={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    

                }}
            >
                <Container textAlign="center">
                    <Grid divided stackable>
                        <Grid.Column width={8} >
                            <p>❄</p>
                            <p center > <em>"Asla yanlış yapmamış insan, yeni hiçbir şey denememiştir." </em></p>
                            <p center><em> Albert Enisthein </em></p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header inverted>SOSYAL MEDYA HESAPLARIMIZ </Header>
                            <p >Bizi sosyal medya hesaplarımzdan takip edebilirsiniz</p>

                            <Grid divided stackable>
                                <Grid.Column width={4}>
                                    <Button circular size="tiny" color='facebook'>
                                        <Icon name='facebook' />HRMS
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button circular size="tiny" color='linkedin'>
                                        <Icon name='linkedin' />HRMS
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button circular size="tiny" color='instagram'>
                                        <Icon name='instagram' />HRMS
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button circular size="tiny" color='youtube'>
                                        <Icon name='youtube' />HRMS
                                    </Button>
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                        </Grid>
                    </Container>
                    <Container >
                        <Grid center divided stackable>
                            <Grid.Column width={16}>
                                <Divider inverted section />
                                <Link to="/home" style={{ color: "orange" }}>
                                    <h1
                                        className="logo-footer"
                                        style={{ fontSize: 20, paddingTop: 10 }}
                                    >
                                        KARİYERİNE YÖN VER
                                    </h1>
                                </Link>
                                <br />
                                Bu site, kodlama.io Java/React projesi kapsamında tamamlanmıştır
                                <br />
                                `Berkan Demiral`
                                <br />
                                <List horizontal inverted divided link size="small">
                                    <List.Item as="a" target="_blank" href="https://github.com/BerkanDemiral">
                                        Berkan Demiral
                                    </List.Item>
                                    <List.Item as="a" target="_blank" href="https://www.kodlama.io">
                                        kodlama.io
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>
                    </Container>
            </Segment>
        </>
     
    )
}
