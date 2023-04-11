import React from 'react'
import {FormComponent} from "../form/FormComponent"
export const FormPage = ({ title, setDocument }) => {
  return (
    <>
    <FormComponent setTitle={title} setDocument = {setDocument}/>
    </>
  )
}
