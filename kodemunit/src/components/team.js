import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/all";
import dp from "../images/profile.png";

const Team = () => {
  return (
    <section className='team'>
      <div className='container'>
        <header className='team'>
          <h1>Meet the team</h1>
        </header>
        <div className='showcase'>
          <article>
            <img src={dp} alt='profile' />
            <h2>Justine Mahinyila</h2>
            <h3>Co-Founder and Team Leader</h3>
            <div className='social'>
              <a href='#'>
                <FaFacebookF className='icon' />
              </a>
              <a href='#'>
                <FaTwitter className='icon' />
              </a>
              <a href='#'>
                <FaLinkedinIn className='icon' />
              </a>
            </div>
          </article>
          <article>
            <img src={dp} alt='profile' />
            <h2>Benedict Steven</h2>
            <h3>Co-Founder and CTO</h3>
            <div className='social'>
              <a href='https://www.facebook.com/profile.php?id=100006234616525'>
                <FaFacebookF className='icon' />
              </a>
              <a href='http://www.twitter.com/bmsteven'>
                <FaTwitter className='icon' />
              </a>
              <a href='https://www.linkedin.com/in/benedict-steven'>
                <FaLinkedinIn className='icon' />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;
