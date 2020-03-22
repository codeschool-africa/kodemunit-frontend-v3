import React from "react";
import Header from "../components/header";

//components
import Intro from "../components/intro";
import Team from "../components/team";
import Founders from "../components/founders";
import Contact from "../components/contact";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <Intro />
        <Team />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default About;
