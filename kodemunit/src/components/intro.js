import React from "react";

const Intro = () => {
  return (
    <section className='intro'>
      <div className='container'>
        <article>
          <header className='intro'>
            <h1>What is kodemunit</h1>
          </header>
          <div className='description'>
            <p>
              Kodemunit is a learning platform built on the foundation of
              community, sharing and helping one another to become better and
              technology ready citizens of the world. It was started in 2019.
            </p>
            <p>
              This platform was created to help us provide mentorship to
              beginners we will be able to reduce the time that someone can
              spend online trying to figure out what to learn, instead for
              someone to go across the internet with a lot of questions on what
              to learn and how now through our career guidance and mentorship
              program someone can connect with mentors who have already been
              through process and figure out what to do.
            </p>
            <p>
              At kodemunit we committed to help young Africans contribute to
              solving challenges in the world, challenges like hunger, diseases
              and unemployment and poverty.
            </p>
          </div>
        </article>
        <article className='mission'>
          <header>
            <h1>our mission</h1>
          </header>
          <div className='description'>
            <p>
              To develop talents from Africa that can work anywhere in the world
            </p>
          </div>
        </article>
        <article>
          <header className='elevator'>
            <h1>What do we do?</h1>
          </header>
          <div className='description'>
            <p>
              At kodemunit you’ll find curriculums that will guide you from
              absolute beginner in programming to an expert, also you will find
              dedicated mentors who will guide you along the journey.
            </p>
            <p>We have designed a curriculum that combines:-</p>
            <ol>
              <li>Courses</li>
              <li>Projects</li>
              <li>Dedicated Mentors</li>
              <li>A Community</li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Intro;
