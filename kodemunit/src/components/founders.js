import React from "react";
import dp from "../images/profile.png";

const Founders = () => {
  return (
    <section className='founders'>
      <div className='container'>
        <header className='founders'>
          <h1>Founders’ stories</h1>
        </header>
        <div className='showcase'>
          <article>
            <div className='left'>
              <img src={dp} alt='profile' />
            </div>
            <div className='right'>
              <h2>Justine's Story</h2>
              <p>
                IIANZA KATIKA MWA MWAKA 2019 BAADA YA sisi pamoja kujifunza
                kuandika programming online through various channels on youtube
                as well as online learning platforms and a number of scholarship
                while at the same time still attending college with me studying
                computer engineering studies at Dar es salaam institute of
                technology and Ben going with water resources engineering at
                water resources institute in Dar es salaam.
              </p>
              <p>
                After I had seen the opportunity in self learning software
                engineering I inspired my friend Ben through my randomly posted
                code’s snippets on social media that Ben stumbod uporn one day
                and decided to join the learning journey, I shared with him a
                number of online free learning platform and we were now the two
                of us online against the codes. After some time we were up and
                running sharing code challenges online in our spare time.
              </p>
              <p>
                Months of learning had gone by and now we started thinking and
                talking to each other about the world of possibilities and doors
                and gates that code can open for us and many other african
                youth. So we said why can’t we share what we had learned with
                other people, why can we teach others to code there is when
                Kodemunit.com was born a community of software developers in
                Africa with the aim of mentoring and sharing skills, knowledge
                and opportunities with one another.
              </p>
            </div>
          </article>
          <article>
            <div className='left'>
              <h2>Benny's Story</h2>
              <p>
                I grew up in a non-technology foundation, where access to
                technology wasn’t easy. I went to college at Water Institute,
                Tanzania where I pursued a bachelor degree in water resources
                and Irrigation engineering. My friend and Co-Founder Justine
                introduced me to Programming and I was interested so he provided
                me with online sites to learn software development. It was hard
                but worth it. In the meantime we learned that sololearning is
                hard if you don’t have proper guidance and mentorship you can
                get stuck on a certain matter and fail to figure out for so long
                and that makes it easy to give up. We also learned that there
                are few people in the digital field from Tanzania and Africa in
                general and the problem of imposter syndrome faces a lot of
                beginners.
              </p>
              <p>
                So we came up with an idea to help learners learn these things
                in an easy and well organized path starting with our
                neighbourhood to all across Africa. This idea involves forming
                the community of learners and mentors in the IT and digital
                field.
              </p>
            </div>
            <div className='right'>
              <img src={dp} alt='profile' />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Founders;
