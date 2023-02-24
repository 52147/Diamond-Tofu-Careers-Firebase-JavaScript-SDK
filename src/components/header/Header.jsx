import React from 'react'
import {
  Link
} from "react-router-dom";
export const Header = () => {
  // const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <header>
        <div className="container flex text-white">
          <div className="nav">
            <ul className="nav-links text-white">
              <li className="text-white">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          <img className="logo" src="DT logo.png" alt="" />
        </div>
      </header>
    </>
  );
}
