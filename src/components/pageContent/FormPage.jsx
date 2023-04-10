import React from 'react'
import {FormComponent} from "../form/FormComponent"
export const FormPage = ({ title }) => {
  return (
    <>
    <FormComponent setTitle={title}/>
    </>
  )
}
