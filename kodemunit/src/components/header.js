import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='kodemunit logo' />
            </Link>
          </div>
          <div className='burger'>
            <span></span>
          </div>
          <div className='navigation'>
            <ul>
              <li>
                <Link to='/#curriculum'>curriculum</Link>
              </li>
              <li>
                <Link to='/#contact'>contact</Link>
              </li>
              <li>
                <Link to='/about'>about</Link>
              </li>
            </ul>
          </div>
          <Link to='/register' className='btn btn-primary'>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
