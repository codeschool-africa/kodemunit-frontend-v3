import React from "react";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='left-section'></div>
        <div className='right-section'>
          <header className='contact'>
            <form onSubmit={e => e.preventDefault()}>
              <div className='fieldset'>
                <label htmlFor='name'>
                  <input type='text' id='name' placeholder='Name' />
                </label>
              </div>
              <div className='fieldset'>
                <label htmlFor='email'>
                  <input
                    type='email'
                    id='email'
                    placeholder='example@email.com'
                  />
                </label>
              </div>
              <div className='fieldset'>
                <label htmlFor='subject'>
                  <input type='text' id='subject' placeholder='Subject' />
                </label>
              </div>
              <div className='fieldset'>
                <label htmlFor='message'>
                  <textarea id='name' placeholder='Message' />
                </label>
              </div>
              <button type='submit'>Send</button>
            </form>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Contact;
