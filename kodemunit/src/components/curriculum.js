import React from "react";
import { FaAngleRight } from "react-icons/all";
import brain from "../images/brain.png";

const Curriculum = () => {
  return (
    <section className='curriculum' id='curriculum'>
      <div className='container'>
        <header className='curriculum-header'>
          <h1>A project based simple curriculum</h1>
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
            <div className='syllabus'>
              <ul>
                <li>
                  <FaAngleRight className='icon' /> Getting Started
                </li>
                <div>
                  <ul>
                    <li>Introduction to Programming</li>
                    <li>What is Internet</li>
                    <li>Getting Started with Web - Introduction</li>
                  </ul>
                </div>
                <li>
                  <FaAngleRight className='icon' /> Frontend web development
                </li>
                <div>
                  <ul>
                    <li>HTML and HTML5</li>
                    <li>CSS and CSS3</li>
                    <li>Responsive web design and media queries</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>JavaScript for Web development</li>
                    <li>Advanced HTML5</li>
                  </ul>
                </div>
                <li>
                  <FaAngleRight className='icon' /> Frontend Libraries and
                  Frameworks
                </li>
                <div>
                  <ul>
                    <li>ReactJs</li>
                    <li>AngularJs</li>
                    <li>jQuery</li>
                  </ul>
                </div>
                <li>
                  <FaAngleRight className='icon' /> Nodejs and backend
                  technology
                </li>
                <div>
                  <ul>
                    <li>NodeJs</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
