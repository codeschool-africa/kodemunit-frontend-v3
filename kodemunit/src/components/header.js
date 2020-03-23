import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
          <div className={isOpen ? "navigation active" : "navigation"}>
            <ul>
              <div className='hamburger' onClick={close}>
                <span></span>
              </div>
              <li>
                <HashLink to='/#curriculum' onClick={close}>Curriculum</HashLink>
              </li>
              <li>
                <HashLink to='#contact' onClick={close}>Contact</HashLink>
              </li>
              <li>
                <Link to='/about' onClick={close}>about</Link>
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

//todo... work on hashlinks... so tired right now aaarrggg
