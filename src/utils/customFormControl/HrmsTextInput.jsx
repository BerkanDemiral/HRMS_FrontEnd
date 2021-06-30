import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'
export default function HrmsTextInput({ ...props }) {
    //console.log(props)
    //reflect api
    const [field, meta] = useField(props)
    //console.log(meta)

    return (


        <div error={meta.touched && !!meta.error} >
            <div class="form-group">

                <input  {...field} {...props} />{meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </div>
        </div>
    )
}
