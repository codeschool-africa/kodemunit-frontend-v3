import React from "react";

const Contact = () => {
  return (
    <section id='contact' className="contact">
      <div className='container'>
        {/* <div className='left-section'></div> */}
        <div className='right-section'>
          <header>
            <h1>Contact</h1>
          </header>
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
              <button type='submit' className="btn btn-secondary">Send</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
