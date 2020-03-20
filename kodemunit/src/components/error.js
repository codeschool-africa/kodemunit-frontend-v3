import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Banner from "./banner";

const Error = () => {
  return (
    <>
      <Header />
      <main>
        <Banner image='' title='Looks like you are lost' imgAlt=''>
          <Link to='/' className='btn-primary'>
            Home
          </Link>
        </Banner>
      </main>
    </>
  );
};

export default Error;
