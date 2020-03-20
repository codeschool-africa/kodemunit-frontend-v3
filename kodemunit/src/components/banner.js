import React from "react";

const Banner = ({ children, title, description, image, imgAlt }) => {
  return (
    <section className='banner'>
      <div className='container'>
        <article className='illustration'>
          <img src={image} alt={imgAlt} />
        </article>
        <article className='welcoming-message'>
          <h1 className=''>{title}</h1>
          <p className=''>{description}</p>
          {children}
        </article>
      </div>
    </section>
  );
};

export default Banner;
