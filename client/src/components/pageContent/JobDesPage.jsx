import React from 'react'
import {Jobdes} from '../jobdes/Jobdes'
export const JobDesPage = ({ title, setTitle }) => {
  return (
    <>
    <Jobdes setTitle={title}/>
    </>
  )
}