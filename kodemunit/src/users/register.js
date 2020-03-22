import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../redux/actions/auth";

//conmponents
import Header from "../components/header";
import Footer from "../components/footer";

//styles
import "../styles/users/style.css";

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    locaTion: "",
    about: "",
    compAccess: "",
    goodTime: [],
    learningStyle: []
  });

  const {
    firstName,
    lastName,
    email,
    locaTion,
    about,
    compAccess,
    hoursWeek,
    goodTime,
    learningStyle
  } = formData;

  const handleChange = async e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: lastName,
      locaTion: locaTion,
      about: about,
      compAccess: compAccess,
      hoursWeek: hoursWeek,
      goodTime: goodTime,
      learningStyle: learningStyle
    };
    register(newUser);
  };

  useEffect(() => {
    document.title = `Register - Kodemunit`;
  });

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='user-registration'>
            <header className='register'>
              <h1>Register Now To Start your Journey with us</h1>
            </header>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='field-group'>
                <label htmlFor='first-name'>First Name</label>
                <br />
                <input
                  id='first-name'
                  placeholder='First Name'
                  type='text'
                  value={firstName}
                  onChange={e => handleChange(e)}
                  name='firstName'
                  noValidate
                />
              </div>
              <div className='field-group'>
                <label htmlFor='last-name'>Last Name</label>
                <br />
                <input
                  id='last-name'
                  type='text'
                  name='lastName'
                  noValidate
                  value={lastName}
                  onChange={e => handleChange(e)}
                  placeholder='Last Name'
                />
              </div>
              <div className='field-group'>
                <label htmlFor='email'>Your email address</label>
                <br />
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={e => handleChange(e)}
                  placeholder='example@email.com'
                />
              </div>
              <div className='field-group'>
                <label htmlFor='location'>Where are you from?</label>
                <input
                  id='location'
                  name='locaTion'
                  value={locaTion}
                  onChange={e => handleChange(e)}
                  placeholder='City, Country'
                />
              </div>
              <div className='field-group'>
                <label htmlFor='comp-access'>
                  Do you own or have access to computer for coding?
                </label>
                <select
                  name='compAccess'
                  id='comp-access'
                  onChange={e => handleChange(e)}
                >
                  <option value=''>Please select</option>
                  <option value='Never'>Never</option>
                  <option value='Sometimes'>Sometimes</option>
                  <option value='Often'>Often</option>
                  <option value='Always'>Always</option>
                </select>
              </div>
              <div className='field-group'>
                <p>
                  Kindly quantify the number of hours you’ll be able to dedicate
                  to the program every week
                </p>
                <label htmlFor='eightam'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='eightam'
                    value='8 AM - 10 AM'
                    onChange={e => handleChange(e)}
                  />{" "}
                  8 AM - 10 AM
                </label>{" "}
                <label htmlFor='tenam'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='tenam'
                    value='10 AM - 12 PM'
                    onChange={e => handleChange(e)}
                  />{" "}
                  10 AM - 12 PM{" "}
                </label>
                <label htmlFor='twelvepm'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='twelvepm'
                    value='12 PM - 2 PM'
                    onChange={e => handleChange(e)}
                  />{" "}
                  12 PM - 2 PM{" "}
                </label>
                <label htmlFor='twopm'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='twopm'
                    value='2 PM - 4 PM'
                    onChange={e => handleChange(e)}
                    autoComplete='new-password'
                  />{" "}
                  2 PM - 4 PM{" "}
                </label>
                <label htmlFor='fourpm'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='fourpm'
                    value='4 PM - 6 PM'
                    onChange={e => handleChange(e)}
                    autoComplete='new-password'
                  />{" "}
                  4 PM - 6 PM{" "}
                </label>
                <label htmlFor='sixpm'>
                  <input
                    type='checkbox'
                    name='goodTime'
                    id='sixpm'
                    value='6 PM - 8 PM'
                    onChange={e => handleChange(e)}
                    autoComplete='new-password'
                  />{" "}
                  6 PM - 8 PM{" "}
                </label>
              </div>
              <div className='field-group'>
                <p>
                  How many hours can you dedicate to the program in a week?{" "}
                  <span>(Choose one option)*</span>
                </p>
                <label htmlFor='onetothree'>
                  <input
                    type='radio'
                    name='hoursWeek'
                    id='onetothree'
                    value='1-3 hours'
                    onChange={e => handleChange(e)}
                  />{" "}
                  1-3 hours
                </label>{" "}
                <label htmlFor='fourtosix'>
                  <input
                    type='radio'
                    name='hoursWeek'
                    id='fourtosix'
                    value='4-6 hours'
                    onChange={e => handleChange(e)}
                  />{" "}
                  4-6 hours{" "}
                </label>
                <label htmlFor='seventotwelve'>
                  <input
                    type='radio'
                    name='hoursWeek'
                    id='seventotwelve'
                    value='7-12 hours'
                    onChange={e => handleChange(e)}
                  />{" "}
                  7-12 hours{" "}
                </label>
                <label htmlFor='twelveplus'>
                  <input
                    type='radio'
                    name='hoursWeek'
                    id='twelveplus'
                    value='12+ hours'
                    onChange={e => handleChange(e)}
                    autoComplete='new-password'
                  />{" "}
                  12+ hours{" "}
                </label>
                <label htmlFor='cant-quantify'>
                  <input
                    type='radio'
                    name='hoursWeek'
                    id='cant-quantify'
                    value="I can't quantify"
                    onChange={e => handleChange(e)}
                    autoComplete='new-password'
                  />{" "}
                  I can't quantify{" "}
                </label>
              </div>
              <div className='field-group'>
                <p>which learning ways/styles are good for you?</p>
                <label htmlFor='visual'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='visual'
                    value='Visual'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Visual
                </label>{" "}
                <label htmlFor='auditory'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='auditory'
                    value='Auditory'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Auditory{" "}
                </label>
                <label htmlFor='linguistic'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='linguistic'
                    value='Linguistic'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Linguistic{" "}
                </label>
                <label htmlFor='practical'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='practical'
                    value='Practical'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Practical{" "}
                </label>
                <label htmlFor='reflexive'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='reflexive'
                    value='Reflexive'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Reflexive{" "}
                </label>
                <label htmlFor='social'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='social'
                    value='Social'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Social{" "}
                </label>
                <label htmlFor='logical'>
                  <input
                    type='checkbox'
                    name='learningStyle'
                    id='logical'
                    value='Logical-Theoretical'
                    onChange={e => handleChange(e)}
                  />{" "}
                  Logical-Theoretical{" "}
                </label>
                <a href='#'>Learn more about different learning style</a>
              </div>
              <div className='field-group'>
                <label htmlFor='about'>
                  tell us about yourself <span>(optional)*</span>
                </label>
                <textarea
                  type='text'
                  name='about'
                  id='about'
                  value={about}
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className='terms'>
                <span>
                  By registering you agree with our{" "}
                  <Link to='/term-and-conditions'>terms and conditions</Link>
                </span>
              </div>
              <button>Register</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, { register })(Register);
