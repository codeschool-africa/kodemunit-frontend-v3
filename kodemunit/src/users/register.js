import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../redux/actions/auth";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";

//components
import Footer from "../components/registerFooter";

import {
  learningStylesCheckBoxes,
  goodTimeCheckBoxes,
  hoursWeekRadio,
  CompAccessSelect,
  normalInputs
} from "../components/data";

//styles
import "../styles/users/style.css";

const emailReg = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Register = ({ register, setAlert, auth: { loading } }) => {
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
    // console.log(formData);
  };

  const handleCheckbox = async e => {
    let checkedItem = formData.goodTime;
    if (e.target.checked) {
      checkedItem.push(e.target.value);
    } else {
      checkedItem.remove(checkedItem, obj => {
        return obj === e.target.value;
      });
    }
    // console.log(checkedItem);
    setFormData({ ...formData, goodTime: checkedItem });
  };

  const handleChangeLearn = e => {
    let checkedItem = formData.learningStyle;
    if (e.target.checked) {
      checkedItem.push(e.target.value);
    } else {
      checkedItem.remove(checkedItem, obj => {
        return obj === e.target.value;
      });
    }
    // console.log(checkedItem);
    setFormData({ ...formData, learningStyle: checkedItem });
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
    if (!email.match(emailReg)) {
      setAlert("Please enter a valid email", "error");
    } else if (lastName.length === 0) {
      setAlert("Last name is required", "error");
    } else if (firstName.length === 0) {
      setAlert("First name is required", "error");
    } else if (locaTion.length === 0) {
      setAlert("Please enter your location", "error");
    } else if (compAccess.length === 0) {
      setAlert("Please select one option if you have computer access", "error");
    } else if (goodTime.length === 0) {
      setAlert("Identify the time period that you will be active", "error");
    } else if (learningStyle.length === 0) {
      setAlert("Please choose your learning style", "error");
    } else {
      register(newUser);
    }
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
            <form onSubmit={e => handleSubmit(e)} noValidate>
              {normalInputs.map(access => {
                return (
                  <div className='field-group content' key={access.key}>
                    <label htmlFor={access.key}>{access.label}</label>
                    <div className='input'>
                      <input
                        id={access.key}
                        placeholder={access.placeholder}
                        type={access.type}
                        value={access.value.value}
                        onChange={e => handleChange(e)}
                        name={access.name}
                      />
                    </div>
                  </div>
                );
              })}
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
                  Kindly indicate the time period (in your local time) during
                  which you will be actively participating in the program
                  activities
                </p>
                {goodTimeCheckBoxes.map(access => {
                  return (
                    <label htmlFor={access.key} key={access.key}>
                      <input
                        type='checkbox'
                        name='goodTime'
                        id={access.key}
                        value={access.value}
                        onChange={e => handleCheckbox(e)}
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
                        onChange={e => handleChangeLearn(e)}
                      />{" "}
                      {access.value}
                    </label>
                  );
                })}
                <a
                  href='https://openclassrooms.com/en/courses/5281811-learn-how-to-learn/5514261-explore-your-various-intelligences-and-learning-styles'
                  target='_blank'
                  rel='noopener noreferrer'
                >
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
                  <Link to='/terms-and-conditions'>terms and conditions</Link>
                </span>
              </div>
              <Alert />
              <button className='btn btn-secondary' disabled={loading}>
                {loading ? `Please wait...` : `Register`}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { register, setAlert })(Register);

//to add data in array i will have to create  a variable using react hooks and set it as an array...
