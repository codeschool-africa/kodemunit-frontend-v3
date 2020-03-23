import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Header from "../components/header";
import Banner from "../components/banner";
import Curriculum from "../components/curriculum";
import How from "../components/how";
import Contact from "../components/contact";
import Footer from "../components/footer";

//images
import illustration from "../images/illustration.png";

const Home = () => {
  useEffect(() => {
    document.title = `Home - Kodemunit`;
  });

  return (
    <>
      <Header />
      <Banner
        image={illustration}
        title='Welcome to kodemunit'
        description='We guide aspiring software developers  by providing career guidance and world class curriculums
We equip you  with software developement skills and knowledge necessary to get  software developer jobs.'
        imgAlt='illustration'
      >
        <Link to='/register' className='btn btn-primary'>
          register
        </Link>
      </Banner>
      <main className='home'>
        <div className='colored-bg'></div>
        <Curriculum />
        <How />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
