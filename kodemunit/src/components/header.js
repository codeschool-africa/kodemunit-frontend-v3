import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <header className='header'>
      <nav>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='kodemunit logo' />
            </Link>
          </div>
          <div className='burger' onClick={open}>
            <span></span>
          </div>
          <div className={isOpen? "navigation active": "navigation"}>
            <ul>
              <div className='hamburger' onClick={close}>
                <span></span>
              </div>
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
