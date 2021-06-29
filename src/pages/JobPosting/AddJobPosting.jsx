import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';

export default function AddJobPosting() {

    const initialValues = { productName: "", unitPrice: "" }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunludur"),
        unitPrice: Yup.number().required("Sayı girilmesi gerekmektedir.")
    })

    return (
        <div>

        </div>
    )
}
