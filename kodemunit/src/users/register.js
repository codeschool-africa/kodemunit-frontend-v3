import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../redux/actions/auth";

//components
import Footer from "../components/registerFooter";

import {
  learningStylesCheckBoxes,
  goodTimeCheckBoxes,
  hoursWeekRadio,
  CompAccessSelect
} from "../components/data";

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

  const handleCheckbox = () => {};

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
    <div className='registration'>
      <main>
        <div className='container'>
          <div className='user-registration'>
            <div className='intro-image content'></div>
            <header className='register content'>
              <h1>Register Now To Start your Journey with us</h1>
              <p>
                Fill this form to help us implement the best way to guide you in
                your software development carrier.
              </p>
            </header>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='field-group content'>
                <label htmlFor='first-name'>First Name</label>
                <div className='input'>
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
              </div>
              <div className='field-group content'>
                <label htmlFor='last-name'>Last Name</label>
                <div className='input'>
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
              </div>
              <div className='field-group content'>
                <label htmlFor='email'>Your email address</label>
                <div className='input'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={e => handleChange(e)}
                    placeholder='example@email.com'
                  />
                </div>
              </div>
              <div className='field-group content'>
                <label htmlFor='location'>Where are you from?</label>
                <div className='input'>
                  <input
                    type='text'
                    id='location'
                    name='locaTion'
                    value={locaTion}
                    onChange={e => handleChange(e)}
                    placeholder='City, Country'
                  />
                </div>
              </div>
              <div className='field-group content'>
                <label htmlFor='comp-access'>
                  Do you own or have access to computer for coding?
                </label>
                <select
                  name='compAccess'
                  id='comp-access'
                  onChange={e => handleChange(e)}
                >
                  <option value=''>Please select</option>
                  {CompAccessSelect.map(access => {
                    return (
                      <option value={access.value} key={access.value}>
                        {access.value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='field-group content'>
                <p>
                  Kindly quantify the number of hours you’ll be able to dedicate
                  to the program every week
                </p>
                {goodTimeCheckBoxes.map(access => {
                  return (
                    <label htmlFor={access.key} key={access.key}>
                      <input
                        type='checkbox'
                        name='goodTime'
                        id={access.key}
                        value={access.value}
                        onChange={e => handleChange(e)}
                      />{" "}
                      {access.value}
                    </label>
                  );
                })}
              </div>
              <div className='field-group content'>
                <p>
                  How many hours can you dedicate to the program in a week?{" "}
                  <span>(Choose one option)*</span>
                </p>
                {hoursWeekRadio.map(access => {
                  return (
                    <label htmlFor={access.key} key={access.key}>
                      <input
                        type='radio'
                        name='hoursWeek'
                        id={access.key}
                        value={access.value}
                        onChange={e => handleChange(e)}
                      />{" "}
                      {access.value}
                    </label>
                  );
                })}
              </div>
              <div className='field-group content'>
                <p>which learning ways/styles are good for you?</p>
                {learningStylesCheckBoxes.map(access => {
                  return (
                    <label htmlFor={access.key} key={access.key}>
                      <input
                        type='checkbox'
                        name='learningStyle'
                        id={access.key}
                        value={access.value}
                        onChange={e => handleChange(e)}
                      />{" "}
                      {access.value}
                    </label>
                  );
                })}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Learn more about different learning style
                </a>
              </div>
              <div className='field-group content'>
                <label htmlFor='about'>
                  tell us about yourself <span>(optional)*</span>
                </label>
                <div className='input'>
                  <textarea
                    name='about'
                    id='about'
                    value={about}
                    onChange={e => handleChange(e)}
                    placeholder='About yourself'
                  />
                </div>
              </div>
              <div className='terms'>
                <span>
                  By registering you agree with our{" "}
                  <Link to='/term-and-conditions'>terms and conditions</Link>
                </span>
              </div>
              <button className='btn btn-secondary'>Register</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, { register })(Register);

//to add data in array i will have to create  a variable using react hooks and set it as an array...
