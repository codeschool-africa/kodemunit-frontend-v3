import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/all";
import bwLogo from "../images/bw-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <div className='container'>
          <div className='social-media'>
            <div className='group'>
              <p>Follow Us On</p>
              <div>
                <a href='#'>
                  <FaTwitter className='icon' />
                </a>
                <a href='#'>
                  <FaFacebookF className='icon' />
                </a>
                <a href='#'>
                  <FaInstagram className='icon' />
                </a>
                <a href='#'>
                  <FaYoutube className='icon' />
                </a>
                <a href='#'>
                  <FaLinkedinIn className='icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='quick-links'>
          <div className='container'>
            <ul>
              <img src={bwLogo} alt='kodemunit logo' />
              <li>
                <HashLink to='/#curriculum'>Curriculum</HashLink>
              </li>
              <li>
                <HashLink to='/#contact'>Contact</HashLink>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='copy-right'>
          <div className='container'>Copyright &copy; - 2020 Kodemunit.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
