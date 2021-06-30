import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, useField, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
import HrmsTextInput from '../utils/customFormControl/HrmsTextInput';
import { NavLink } from "react-router-dom"

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
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterForNormalUser() {

    const initialValues = { birthDate: "", email: "", firstName: "", lastName: "", nationalityId: "", password: "", repeatPassword: "" }
    const schema = Yup.object({
        birthDate: Yup.date().required("Doğum yılı giriniz"),
        email: Yup.string().email().required("E-posta zorunludur"),
        firstName: Yup.string().required("Ad zorunludur"),
        lastName: Yup.string().required("Soyad zorunludur"),
        nationalityId: Yup.string()
            .required("TC Kimlik zorunludur")
            .min(11, "TCKN 11 karakterden oluşmalıdır.")
            .max(11, "TCKN 11 karakterden oluşmalıdır."),
        password: Yup.string().required("Şifre zorunludur"),
        repeatPassword: Yup.string()
            .required("Şifre tekrarı zorunludur.")
            .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor"),
    });


    const classes = useStyles();

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >


            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Hesap Oluştur
                    </Typography>
                    <Form className="ui form col-12" >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Ad</label>
                                <HrmsTextInput name="firstName" placeholder="Ad" />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Soyad</label>
                                <HrmsTextInput name="lastName" placeholder="Soyad" />
                            </Grid>
                            <Grid item xs={12}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Email</label>
                                <HrmsTextInput name="email" placeholder="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Parola</label>
                                <HrmsTextInput name="password" placeholder="Parola" />
                            </Grid>
                            <Grid item xs={12}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Parola(Tekrar)</label>
                                <HrmsTextInput name="repeatPassword" placeholder="Parola" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label style={{ fontFamily: "Tahoma" }} for="">TC Kimlik No</label>
                                <HrmsTextInput name="identityNumber" placeholder="TC Kimlik No" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label style={{ fontFamily: "Tahoma" }} for="">Doğum yılı</label>
                                <HrmsTextInput name="birthDate" placeholder="Doğum yılı" />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Kayıt sözleşmesini okudum ve onaylıyorum"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Kayıt Ol
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/registerEmployer" variant="body2">
                                    {"Kurumsal bir hesap oluşturmak için Tıklayınız"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Zaten bir hesabınız var mı - Giriş yap"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </div>

            </Container>
        </Formik>
    );
}