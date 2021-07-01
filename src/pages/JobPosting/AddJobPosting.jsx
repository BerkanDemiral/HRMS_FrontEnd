import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import HrmsTextInput from '../../utils/customFormControl/HrmsTextInput';

export default function AddJobPosting() {
    const initialValues = { minSalary: "", maxSalary: "", numberOfPosition: "",  }
    const schema = Yup.object({
        minSalary: Yup.number().required("Bu alan boş bırakılamaz"),
        maxSalary: Yup.number().required("Bu alan boş bırakılamaz"),
        numberOfPosition: Yup.number().required("Bu alan boş bırakılamaz")
    })


    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >

            <div>
                <form>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputEmail1">Pozisyon</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputEmail1">Şehir</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>


                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Çalışma Tipi</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">Uzaktan</option>
                                    <option value="2">Ofis</option>
                                </select>

                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Çalışma Zamanı</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">Tam Zamanlı</option>
                                    <option value="2">Yarı Zamanlı</option>
                                </select>

                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Minimum Maaş</label>
                                <HrmsTextInput name="minSalary" placeholder="Maaş ₺" />
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Maximum Maaş</label>
                                <input type="text" class="form-control" id="text" placeholder="Maaş ₺" />
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Pozisyon İçinin Aranan Eleman Sayısı</label>
                                <input type="text" class="form-control" id="text" placeholder="Çalışan Sayısı" />
                            </div>
                        </div>

                        <div class="col-12 center">
                            <div class="form-group">
                                <label style={{ fontFamily: "Tahoma" }} for="exampleInputPassword1">Son Başvuru Tarihi*</label>
                                <input type="date" min="2021-06-30" class="form-control" id="closeDate" placeholder="Son başvuru Tarihi" />
                            </div>
                        </div>


                        <p></p>
                        <button type="submit" class="btn btn-success">İş ilanı Ekle</button>
                    </div>
                </form>
            </div>
        </Formik>
    )

}
