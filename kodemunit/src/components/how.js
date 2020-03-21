import React from "react";

const How = () => {
  return (
    <section className='how'>
      <div className='container'>
        <header>
          <h1>How does This work?</h1>
        </header>
        <div className='col-reasons'>
          <article className='col-reasons__col col1'>
            <div className='row row-one'>
              <h4>01</h4>
              <h3>Curriculum</h3>
              <p>
                You get access to a well structured, easy to follow curriculum
                with a lot of hand’s real life projects.
              </p>
            </div>
            <div className='row row-two'>
              <h4>02</h4>
              <h3>Learning Community</h3>
              <p>
                You get access to a community of fellow learners and expet
                engineers who will be so helpfull in ublocking you and giving
                you guidance and learning support.
              </p>
            </div>
          </article>
          <article className='col-reasons__col col2'>
            <div className='circle'>
              {/* <h1>How does it work</h1> */}
            </div>
          </article>
          <article className='col-reasons__col col1 col3'>
            <div className='row row-one'>
              <h4>03</h4>
              <h3>Mentorship and Guidance</h3>
              <p>
                Our team of mentors is there to clear your doubts and give you
                directions as well as technical assistance every time.
              </p>
            </div>
            <div className='row row-two'>
              <h4>04</h4>
              <h3>Real-World Projects</h3>
              <p>
                There are sets of projects on every end of learning section to
                give you practices and solidify your knowledge.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default How;
