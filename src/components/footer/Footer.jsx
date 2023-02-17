import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <>
    <footer>
      <div className = 'footer-block'>
        <img src="DT logo.png" alt="" />
        <div className = "">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <span className = "footer-list-icon">
                <FontAwesomeIcon icon={faLocation} />
              </span>
              <label htmlFor="">
                MA, Cambridge, US
              </label>
            </li>
            <li>
              <span className = "footer-list-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
              <label htmlFor="">
                diamond-tofu
              </label>
            </li>
            <li>
              <span className = "footer-list-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <label htmlFor="">
                support@gmail.com
              </label>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}
