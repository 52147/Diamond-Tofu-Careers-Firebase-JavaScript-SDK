import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (

    <>
    <footer>
    <div className='container grid1'>
        <div className='box'>
            <img src="DT logo.png" alt="" />
            <p>123</p>
            <div className = "socialIcon">
              {/* <FontAwesomeIcon icon={faAtom} /> */}
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>        
        </div>
        </div>
    </footer>
    </>
  )
}
