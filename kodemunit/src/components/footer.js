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
          <div className='quote'>
            <blockquote>
              “Whether you want to uncover the secret of the universe or want to
              pursue a carrier in the 21st century, basic computer programming
              is an essential skill to learn”
              <cite>- Stephen Hawking</cite>
            </blockquote>
          </div>
          <div className='social-media'>
            <div className='group'>
              <p>Follow Us On</p>
              <div>
                <a href='http://www.twitter.com/kodemunit/kodemunit'>
                  <FaTwitter className='icon' />
                </a>
                <a href='http://www.facebook.com/kodemunit'>
                  <FaFacebookF className='icon' />
                </a>
                <a href='http://www.instagram.com/kodemunit'>
                  <FaInstagram className='icon' />
                </a>
                <a href='https://www.youtube.com/channel/UC9P0lls7i2ck1RKYz-NVRPQ'>
                  <FaYoutube className='icon' />
                </a>
                <a href='http://www.linkedin.com/in/kodemunit'>
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
                <HashLink to='#contact'>Contact</HashLink>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/terms-and-conditions'>Terms and conditions</Link>
              </li>
              <li>
                <Link to='/register' className='btn btn-tertiary'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='blank'></div> */}
        <div className='copy-right'>
          <div className='container'>Copyright &copy; - 2020 Kodemunit.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
