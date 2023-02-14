import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileMedicalAlt, faLocation } from '@fortawesome/free-solid-svg-icons'

import {  faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <>
    <footer>
    <div className='container grid1'>
        <div className='box'>
            <img src="DT logo.png" alt="" />
            <div className = "">
                <div className = "icon">
                <h2>Get in Touch</h2>
                <ul>
                <li><FontAwesomeIcon icon={faLocation} />
                <label htmlFor=""> MA, Cambridge, US</label></li>
                 <li><FontAwesomeIcon icon={faLinkedinIn} />
                <label htmlFor="">  diamond-tofu</label></li>
                <li><FontAwesomeIcon icon={faEnvelope} />
                <label htmlFor=""> Email: support@gmail.com</label></li>
                </ul>
              </div>
            </div>      
        </div>
        </div>
    </footer>
    </>
  )
}