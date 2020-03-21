import React, { useState } from "react";
import { FaAngleRight } from "react-icons/all";
import brain from "../images/brain.png";

const Curriculum = () => {
  const [isGetStarted, setGetStarted] = useState(true);
  const [isFrontend, setFrontend] = useState(false);
  const [isLibraries, setLibraries] = useState(false);
  const [isBackend, setBackend] = useState(false);

  const getStarted = () => {
    setGetStarted(!isGetStarted);
    setFrontend(false);
    setLibraries(false);
    setBackend(false);
  };

  const frontend = () => {
    setGetStarted(false);
    setFrontend(!isFrontend);
    setLibraries(false);
    setBackend(false);
  };

  const libraries = () => {
    setGetStarted(false);
    setFrontend(false);
    setLibraries(!isLibraries);
    setBackend(false);
  };

  const backend = () => {
    setGetStarted(false);
    setFrontend(false);
    setLibraries(false);
    setBackend(!isBackend);
  };

  return (
    <section className='curriculum' id='curriculum'>
      <div className='container'>
        <header className='curriculum-header'>
          <h1>A project-based simple curriculum</h1>
          <p>
            Register to learn Web development by following our curriculum which
            focuses on helping you learn the most in-demand skills in software
            development.
          </p>
        </header>
        <div className='showcase'>
          <article className='brain-image'>
            <img src={brain} alt='' />
          </article>
          <article className='curriculum-showcase'>
            <div className='before'>
              <div className='syllabus'>
                <ul className='topics'>
                  <li
                    className={isGetStarted ? "active" : ""}
                    onClick={getStarted}
                  >
                    <FaAngleRight className='icon' /> Getting Started
                  </li>
                  <div className={isGetStarted ? "active" : ""}>
                    <ul className='sub-topics'>
                      <li>Introduction to Programming</li>
                      <li>What is Internet</li>
                      <li>Getting Started with Web - Introduction</li>
                    </ul>
                  </div>
                  <li className={isFrontend ? "active" : ""} onClick={frontend}>
                    <FaAngleRight className='icon' /> Frontend web development
                  </li>
                  <div className={isFrontend ? "active" : ""}>
                    <ul className='sub-topics'>
                      <li>HTML and HTML5</li>
                      <li>CSS and CSS3</li>
                      <li>Responsive web design and media queries</li>
                      <li>Bootstrap</li>
                      <li>Sass</li>
                      <li>JavaScript for Web development</li>
                      <li>Advanced HTML5</li>
                    </ul>
                  </div>
                  <li
                    className={isLibraries ? "active" : ""}
                    onClick={libraries}
                  >
                    <FaAngleRight className='icon' /> Frontend Libraries and
                    Frameworks
                  </li>
                  <div className={isLibraries ? "active" : ""}>
                    <ul className='sub-topics'>
                      <li>ReactJs</li>
                      <li>AngularJs</li>
                      <li>jQuery</li>
                    </ul>
                  </div>
                  <li className={isBackend ? "active" : ""} onClick={backend}>
                    <FaAngleRight className='icon' /> Nodejs and backend
                    technology
                  </li>
                  <div className={isBackend ? "active" : ""}>
                    <ul className='sub-topics'>
                      <li>NodeJs</li>
                      <li>MongoDB</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
