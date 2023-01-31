import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const Header = () => {
    // const [sidebar, setSidebar] = useState(false);
  return (
    <>
    <header>
        <div className = "container flex">

            <div className = "nav">
                <ul className = "nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/career">Career</Link></li>
                </ul>

            </div>
            <div className = "logo">
                <img src="DT logo.png" alt="" />
            </div>
        </div>
    </header>
    
    </>
  )
}
