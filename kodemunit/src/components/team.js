import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/all";
import dp from "../images/profile.png";
import { HashLink } from "react-router-hash-link";

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
            <h3>Team Leader</h3>
            <div className='social'>
              <a href='#'>
                <FaFacebookF className='icon' />
              </a>
              <a href='#'>
                <FaTwitter className='icon' />
              </a>
              <a href='https://www.linkedin.com/in/justinemahinyila'>
                <FaLinkedinIn className='icon' />
              </a>
            </div>
          </article>
          <article>
            <img src={dp} alt='profile' />
            <h2>Benedict Steven</h2>
            <h3>Technical Lead (CTO)</h3>
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
          <article>
            <img src={dp} alt='profile' />
            <h2>Veronica Likunama</h2>
            <h3>Community Leader</h3>
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
            <h2>This might be you</h2>
            <h3><HashLink to="#contact">Join the Team</HashLink></h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;
