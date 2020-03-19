import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../redux/actions/auth";

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
    goodTime,
    learningStyle
  } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      goodTime: goodTime,
      learningStyle: learningStyle
    };
    register(newUser);
  };

  useEffect(() => {
    document.title = `Register - Kodemunit`;
  });

  return (
    <div className='user__registration'>
      <div className='panel right__panel'>
        <form onSubmit={e => handleSubmit(e)}>
          <div className='field-group'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              id='firstname'
              placeholder='First Name'
              type='text'
              value={firstName}
              onChange={e => handleChange(e)}
              name='firstName'
              noValidate
            />
          </div>
          <div className='field-group'>
            <label htmlFor='secondname'>First Name:</label>
            <input
              id='secondname'
              type='text'
              name='lastName'
              noValidate
              value={lastName}
              onChange={e => handleChange(e)}
              placeholder='Last Name'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={e => handleChange(e)}
              placeholder='Email address'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>location:</label>
            <input
              type='text'
              name='locaTion'
              id='password'
              value={locaTion}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>computer access:</label>
            <input
              type='text'
              name='compAccess'
              id='password'
              value={compAccess}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>goodtime:</label>
            <input
              type='text'
              name='goodTime'
              id='password'
              value={goodTime}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>learningStyle:</label>
            <input
              type='text'
              name='learningStyle'
              id='password'
              value={learningStyle}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>About:</label>
            <textarea
              type='text'
              name='about'
              id='password'
              value={about}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
            />
          </div>
          <button>Register</button>
        </form>
      </div>
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

//toDo
//work on array data tomorrow oops its today in the morning not tomorrow
