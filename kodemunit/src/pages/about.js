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
      <main>
        <Intro />
        <Team />
        <Founders />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default About;
