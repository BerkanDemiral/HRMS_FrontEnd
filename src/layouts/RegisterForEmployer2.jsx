import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import HrmsTextInput from '../utils/customFormControl/HrmsTextInput';
import { NavLink } from "react-router-dom";


export default function RegisterForEmployer() {


    const initialValues = { password: "", repeatPassword: "", webAdress: "", email: "", companyName: "", phone: "" }
    const schema = Yup.object({
        webAdress: Yup.string().required("Bu alan boş bırakılmaz"),
        companyName: Yup.string().required("Bu alan boş bırakılamaz"),
        email: Yup.string().email().required("Email girişi zorunludur"),
        password: Yup.string().required("En az 6 haneli bir parola giriniz").min(6),
        phone: Yup.string().required("Bu alan boş bırakılamaz").min(10).max(11),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor.")
            .required("Lütfen Şifrenizi Doğrulayın."),

    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <div class="loginForm">
                <div class="ui inverted segment">
                    <p style={{ fontSize: "24px" }} class="center">Kayıt Ol</p>
                    <div class="ui inverted form">
                        <div class="two fields">
                            <div class="field">
                                <label>Web Adress</label>
                                <HrmsTextInput name="webAdress" placeholder="Web Adress" />
                            </div>
                            <div class="field">
                                <label>Şirket Adı</label>
                                <HrmsTextInput name="companyName" placeholder="Şirket Adı" />
                            </div>
                        </div>
                        <div class="two fields">
                            <div class="field">
                                <label>Email</label>
                                <HrmsTextInput name="email" placeholder="Email" />
                            </div>
                            <div class="field">
                                <label>Telefon</label>
                                <HrmsTextInput name="phone" placeholder="(000)000-00-00" />
                            </div>
                        </div>
                        <div class="two fields">
                            

                                <div class="field">
                                    <label>Parola</label>
                                    <HrmsTextInput name="password" placeholder="Parola" />
                                </div>

                                <div class="field">
                                    <label>Parola Tekrar</label>
                                    <HrmsTextInput name="repeatPassword" placeholder="Parola Tekrar" />
                                </div>
                        
                        </div>
                        <Button as={NavLink} to="/login" color="green" type="submmit">Kayıt Ol</Button>
                    </div>
                </div>
            </div>
        </Formik >
    )
}
