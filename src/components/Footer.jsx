import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (

    <>
    <footer>
    <div className='container grid1'>
        <div className='box'>
            <img src="DT logo.png" alt="" />
            <p>123</p>
            <div className = "socialIcon">
            <FontAwesomeIcon icon="fa-brands fa-facebook" /> 
            <FontAwesomeIcon icon={faAtom} />


            </div>
                
        </div>
        </div>
    </footer>
    </>
  )
}
