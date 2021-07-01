import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, useField, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
import { NavLink } from "react-router-dom"
import HrmsTextInput from '../utils/customFormControl/HrmsTextInput';
import { Label } from 'semantic-ui-react'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/WLUHO9A_xik/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login2({ signIn }) {

    const initialValues = { email: "", password: "" }
    const schema = Yup.object({
        email: Yup.string().email().required("Email girişi zorunludur"),
        password: Yup.string()
            .required("En az 6 haneli bir parola giriniz")

    })

    const classes = useStyles();

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >

            <div>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Giriş Yap
                            </Typography>
                            <Form className="ui form col-12" >
                                <label style={{ fontFamily: "Tahoma" }} for="">Email</label>
                                <HrmsTextInput name="email" placeholder="Email" />
                                <label style={{ fontFamily: "Tahoma" }} for="">Parola</label>
                                <HrmsTextInput name="password" placeholder="Parola" />


                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={signIn}
                                >
                                    Giriş Yap
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="/registerUser" variant="body2">
                                            {"Hesabınız yok mu? Hesap Oluştur"}
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Formik>
    );
}
