import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import HrmsTextInput from '../utils/customFormControl/HrmsTextInput';
import { NavLink } from "react-router-dom";

export default function RegisterForNormalUser() {



    const initialValues = { firstName: "", lastName: "", password: "", repeatPassword: "", identityNumber: "", email: "", birthDate: "" }
    const schema = Yup.object({
        firstName: Yup.string().required("Bu alan boş bırakılmaz"),
        lastName: Yup.string().required("Bu alan boş bırakılamaz"),
        email: Yup.string().email().required("Email girişi zorunludur"),
        password: Yup.string().required("En az 6 haneli bir parola giriniz").min(6),
        repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor.")
        .required("Lütfen Şifrenizi Doğrulayın."),
        identityNumber: Yup.number().required("Bu alan boş bırakılamaz - 11 haneli Kimlik numaranızı girin").min(11).max(11),
        birthDate: Yup.string().required("Boş bırakmayın ve sadece yıl giriniz"),

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
                                <label>Ad</label>
                                <HrmsTextInput name="firstName" placeholder="Ad" />
                            </div>
                            <div class="field">
                                <label>Soyad</label>
                                <HrmsTextInput name="lastName" placeholder="Soyad" />
                            </div>
                        </div>
                        <div class="two fields">
                            <div class="field">
                                <label>Email</label>
                                <HrmsTextInput name="email" placeholder="Email" />
                            </div>
                            <div class="field">
                                <label>Doğum yılı</label>
                                <HrmsTextInput name="birthDate" placeholder="Doğum yılı" />
                            </div>
                        </div>

                        <div class=" two field">

                            <div class="field">
                                <label>Kimlik No</label>
                                <HrmsTextInput name="identityNumber" placeholder="Kimlik No" />
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
                        <div class="ui message">
                            Kurumsal Hesaplar İçin Kayıt -- <Button as={NavLink} to="/registerEmployer" >Kurumsal</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Formik >
    )
}
