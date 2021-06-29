import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup"
import { Button } from 'semantic-ui-react';
import HrmsTextInput from "../utils/customFormControl/HrmsTextInput";
import { NavLink } from "react-router-dom"


export default function Login({ signIn }) {


    const initialValues = { email: "", password: "" }
    const schema = Yup.object({
        email: Yup.string().email().required("Email girişi zorunludur"),
        password: Yup.string()
            .required("En az 6 haneli bir parola giriniz")

    })

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {

            }}
        >

            <div class="loginForm">
                <div class="ui inverted segment">
                    <p style={{fontSize:"24px"}} class="center">Giriş Yap</p>
                    <div class="ui inverted form">
                        <div class="two fields">
                            <div class="field">
                                <label>Email</label>
                                <HrmsTextInput name="email" placeholder="Email" />
                            </div>
                            <div class="field">
                                <label>Pasword</label>
                                <HrmsTextInput name="password" placeholder="Parola" />
                            </div>
                        </div>
                        <Button onClick={signIn} color="green" type="submmit">Giriş Yap</Button>
                        <div class="ui message">
                            <Button  as={NavLink} to="/registerUser"  > Hesap Oluştur </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}
